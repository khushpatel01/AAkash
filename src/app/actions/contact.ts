"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  company: z.string().optional().default(""),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number (at least 7 digits)"),
  industry: z.string().optional().default(""),
  city: z.string().optional().default(""),
  state: z.string().optional().default(""),
  solution: z.string().min(1, "Please select an interested solution"),
  message: z.string().min(1, "Please enter your message or requirements"),
  honeypot: z.string().max(0, "Spam detected").optional().default(""),
});

// Helper to save enquiry locally so no enquiry is ever lost
async function saveEnquiryLocally(record: any) {
  try {
    const filePath = path.join(process.cwd(), "enquiries.json");
    let list: any[] = [];
    try {
      const content = await fs.readFile(filePath, "utf-8");
      list = JSON.parse(content);
    } catch {
      list = [];
    }
    list.unshift({
      id: "ENQ-" + Date.now(),
      type: "Contact Enquiry",
      ...record,
      createdAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    });
    await fs.writeFile(filePath, JSON.stringify(list, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save enquiry locally:", err);
  }
}

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const getVal = (key: string): string => {
      const val = formData.get(key);
      return typeof val === "string" ? val.trim() : "";
    };

    const rawData = {
      name: getVal("name"),
      company: getVal("company"),
      email: getVal("email"),
      phone: getVal("phone"),
      industry: getVal("industry"),
      city: getVal("city"),
      state: getVal("state"),
      solution: getVal("solution"),
      message: getVal("message"),
      honeypot: getVal("honeypot"),
    };

    const validatedData = contactSchema.parse(rawData);

    // If honeypot is filled, silently succeed (bot trap)
    if (validatedData.honeypot) {
      return { success: true, message: "Thank you for your enquiry." };
    }

    // Always save enquiry to local database/JSON file
    await saveEnquiryLocally(validatedData);

    const contactEmail = process.env.CONTACT_EMAIL || siteConfig.contact.email;
    const fromEmail = process.env.SMTP_FROM || contactEmail;

    // Send email to company if SMTP credentials exist
    let emailSent = false;
    let emailStatusNote = "";
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `"Website Enquiry" <${fromEmail}>`,
          to: contactEmail,
          replyTo: validatedData.email,
          subject: `New Website Enquiry - AakashHydroTech - ${validatedData.name}`,
          html: `
            <h2>New Enquiry from Website</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Company:</strong> ${validatedData.company || "N/A"}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Industry:</strong> ${validatedData.industry || "N/A"}</p>
            <p><strong>Location:</strong> ${[validatedData.city, validatedData.state].filter(Boolean).join(", ") || "N/A"}</p>
            <p><strong>Interested Solution:</strong> ${validatedData.solution}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          `,
        });

        // Send auto-response to customer
        try {
          await transporter.sendMail({
            from: `"AakashHydroTech" <${fromEmail}>`,
            to: validatedData.email,
            subject: "Thank You for Contacting AakashHydroTech",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #062B5F;">Thank You for Contacting Us</h2>
                <p>Dear ${validatedData.name},</p>
                <p>Thank you for contacting AakashHydroTech. Our team has received your enquiry regarding <strong>${validatedData.solution}</strong>.</p>
                <p>One of our technical experts will review your requirements and get back to you shortly.</p>
                <br>
                <p>Best Regards,</p>
                <p><strong>Team AakashHydroTech</strong></p>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an automated message. Please do not reply directly to this email.</p>
              </div>
            `,
          });
        } catch (autoRespError) {
          console.error("Failed to send auto-response:", autoRespError);
        }

        emailSent = true;
      } catch (mailError: any) {
        console.error("Nodemailer error:", mailError);
        emailStatusNote = mailError?.message || "Email could not be delivered.";
      }
    } else {
      console.log("SMTP credentials (SMTP_USER/SMTP_PASSWORD) are empty in .env.local.");
      emailStatusNote = "SMTP_USER or SMTP_PASSWORD is not set in .env.local";
    }

    const whatsappText = `*New Website Enquiry*\n\n*Name:* ${validatedData.name}\n*Company:* ${validatedData.company || "N/A"}\n*Phone:* ${validatedData.phone}\n*Email:* ${validatedData.email}\n*Location:* ${[validatedData.city, validatedData.state].filter(Boolean).join(", ") || "N/A"}\n*Solution:* ${validatedData.solution}\n*Message:* ${validatedData.message}`;
    const whatsappPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappText)}`;

    return {
      success: true,
      message: "Enquiry submitted successfully! Saved to your enquiry records.",
      whatsappUrl,
      emailSent,
      emailStatusNote
    };
  } catch (error: any) {
    console.error("Contact form error:", error);
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors).flat()[0] || "Please check your inputs and try again.";
      return { 
        success: false, 
        message: firstErrorMessage, 
        errors: fieldErrors 
      };
    }
    return { success: false, message: error?.message || "An error occurred while sending your message. Please try again later." };
  }
}
