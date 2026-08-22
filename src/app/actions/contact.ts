"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  industry: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  solution: z.string().min(1, "Please select a solution"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      industry: formData.get("industry"),
      city: formData.get("city"),
      state: formData.get("state"),
      solution: formData.get("solution"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    };

    const validatedData = contactSchema.parse(rawData);

    // If honeypot is filled, silently succeed (bot trap)
    if (validatedData.honeypot) {
      return { success: true, message: "Thank you for your enquiry." };
    }

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const contactEmail = process.env.CONTACT_EMAIL || "kpj050103@gmail.com";
    const fromEmail = process.env.SMTP_FROM || contactEmail;

    // Send email to company
    await transporter.sendMail({
      from: `"Website Enquiry" <${fromEmail}>`,
      to: contactEmail,
      subject: `New Website Enquiry - AAkash AquaTech - ${validatedData.name}`,
      html: `
        <h2>New Enquiry from Website</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Company:</strong> ${validatedData.company || "N/A"}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Industry:</strong> ${validatedData.industry || "N/A"}</p>
        <p><strong>Location:</strong> ${validatedData.city || "N/A"}, ${validatedData.state || "N/A"}</p>
        <p><strong>Interested Solution:</strong> ${validatedData.solution}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send auto-response to customer
    try {
      await transporter.sendMail({
        from: `"AAkash AquaTech" <${fromEmail}>`,
        to: validatedData.email,
        subject: "Thank You for Contacting AAkash AquaTech",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #062B5F;">Thank You for Contacting Us</h2>
            <p>Dear ${validatedData.name},</p>
            <p>Thank you for contacting AAkash AquaTech. Our team has received your enquiry regarding <strong>${validatedData.solution}</strong>.</p>
            <p>One of our technical experts will review your requirements and get back to you shortly.</p>
            <br>
            <p>Best Regards,</p>
            <p><strong>Team AAkash AquaTech</strong></p>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an automated message. Please do not reply directly to this email.</p>
          </div>
        `,
      });
    } catch (autoRespError) {
      console.error("Failed to send auto-response:", autoRespError);
      // We don't fail the whole request if auto-response fails
    }

    const whatsappText = `*New Website Enquiry*\n\n*Name:* ${validatedData.name}\n*Phone:* ${validatedData.phone}\n*Solution:* ${validatedData.solution}\n*Message:* ${validatedData.message}`;
    const whatsappUrl = `https://wa.me/9106303850?text=${encodeURIComponent(whatsappText)}`;

    return { 
      success: true, 
      message: "Thank you! Your enquiry has been sent successfully. We will contact you shortly.",
      whatsappUrl 
    };
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Please check your inputs and try again.", errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An error occurred while sending your message. Please try again later." };
  }
}
