"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  industry: z.string().optional(),
  city: z.string().optional(),
  solution: z.string().min(1, "Please select a required solution"),
  waterSource: z.string().optional(),
  capacity: z.string().optional(),
  problem: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export async function submitQuoteForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      industry: formData.get("industry"),
      city: formData.get("city"),
      solution: formData.get("solution"),
      waterSource: formData.get("waterSource"),
      capacity: formData.get("capacity"),
      problem: formData.get("problem"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    };

    const validatedData = quoteSchema.parse(rawData);

    if (validatedData.honeypot) {
      return { success: true, message: "Thank you for your request." };
    }

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
      from: `"Website Quote Request" <${fromEmail}>`,
      to: contactEmail,
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

    // Format WhatsApp Message
    const whatsappText = `*New Quote Request*\n\n*Name:* ${validatedData.name}\n*Company:* ${validatedData.company}\n*Phone:* ${validatedData.phone}\n*Solution:* ${validatedData.solution}\n*Capacity:* ${validatedData.capacity || "N/A"}\n*Problem:* ${validatedData.problem || "N/A"}`;
    const whatsappUrl = `https://wa.me/9106303850?text=${encodeURIComponent(whatsappText)}`;

    return { 
      success: true, 
      message: "Your quote request has been sent successfully. Our technical team will prepare a proposal and get back to you shortly.",
      whatsappUrl 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Please check your inputs and try again.", errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An error occurred while sending your request. Please try again later." };
  }
}
