"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { siteConfig } from "@/config/site";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  company: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number (at least 7 digits)"),
  industry: z.string().optional().default(""),
  city: z.string().optional().default(""),
  solution: z.string().min(1, "Please select a required solution"),
  waterSource: z.string().optional().default(""),
  capacity: z.string().optional().default(""),
  problem: z.string().optional().default(""),
  message: z.string().optional().default(""),
  honeypot: z.string().max(0, "Spam detected").optional().default(""),
});

// Helper to save quote requests locally so no request is ever lost
async function saveQuoteLocally(record: any) {
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
      id: "QUO-" + Date.now(),
      type: "Quote Request",
      ...record,
      createdAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    });
    await fs.writeFile(filePath, JSON.stringify(list, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save quote locally:", err);
  }
}

export async function submitQuoteForm(prevState: any, formData: FormData) {
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
      solution: getVal("solution"),
      waterSource: getVal("waterSource"),
      capacity: getVal("capacity"),
      problem: getVal("problem"),
      message: getVal("message"),
      honeypot: getVal("honeypot"),
    };

    const validatedData = quoteSchema.parse(rawData);

    if (validatedData.honeypot) {
      return { success: true, message: "Thank you for your request." };
    }

    // Save quote request locally
    await saveQuoteLocally(validatedData);

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
          from: `"Website Quote Request" <${fromEmail}>`,
          to: contactEmail,
          replyTo: validatedData.email,
          subject: `Quote Request: ${validatedData.solution} - ${validatedData.company}`,
          html: `
            <h2>New Quote Request</h2>
            <h3>Contact Details</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Company:</strong> ${validatedData.company}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Industry:</strong> ${validatedData.industry || "N/A"}</p>
            <p><strong>City:</strong> ${validatedData.city || "N/A"}</p>
            
            <h3>Technical Requirements</h3>
            <p><strong>Required Solution:</strong> ${validatedData.solution}</p>
            <p><strong>Water Source:</strong> ${validatedData.waterSource || "N/A"}</p>
            <p><strong>Approximate Capacity:</strong> ${validatedData.capacity || "N/A"}</p>
            <p><strong>Current Problem:</strong> ${validatedData.problem || "N/A"}</p>
            <p><strong>Additional Message:</strong></p>
            <p>${validatedData.message?.replace(/\n/g, "<br>") || "None"}</p>
          `,
        });

        emailSent = true;
      } catch (mailError: any) {
        console.error("Nodemailer quote error:", mailError);
        emailStatusNote = mailError?.message || "Email could not be delivered.";
      }
    } else {
      console.log("SMTP credentials (SMTP_USER/SMTP_PASSWORD) are empty in .env.local.");
      emailStatusNote = "SMTP_USER or SMTP_PASSWORD is not set in .env.local";
    }

    // Format WhatsApp Message
    const whatsappText = `*New Quote Request*\n\n*Name:* ${validatedData.name}\n*Company:* ${validatedData.company}\n*Phone:* ${validatedData.phone}\n*Email:* ${validatedData.email}\n*City:* ${validatedData.city || "N/A"}\n*Solution:* ${validatedData.solution}\n*Capacity:* ${validatedData.capacity || "N/A"}\n*Problem:* ${validatedData.problem || "N/A"}`;
    const whatsappPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappText)}`;

    return { 
      success: true, 
      message: "Your quote request has been received and saved successfully!",
      whatsappUrl,
      emailSent,
      emailStatusNote
    };
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors).flat()[0] || "Please check your inputs and try again.";
      return { 
        success: false, 
        message: firstErrorMessage, 
        errors: fieldErrors 
      };
    }
    return { success: false, message: error?.message || "An error occurred while sending your request. Please try again later." };
  }
}
