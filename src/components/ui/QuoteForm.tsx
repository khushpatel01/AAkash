"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitQuoteForm } from "@/app/actions/quote";
import { Loader2, CheckCircle2, AlertCircle, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  company: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number (at least 7 digits)"),
  industry: z.string().optional(),
  city: z.string().optional(),
  solution: z.string().min(1, "Please select a required solution"),
  waterSource: z.string().optional(),
  capacity: z.string().optional(),
  problem: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;

const solutionsList = [
  "Boiler Water Treatment",
  "Cooling Water Treatment",
  "RO Treatment",
  "Heat Transfer Fluids (Maxothermie®)",
  "ETP / STP",
  "Water Treatment Plant",
  "Chemical Programs",
  "Dosing Equipment",
  "Other"
];

export function QuoteForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ 
    success: boolean; 
    message: string; 
    whatsappUrl?: string;
    emailSent?: boolean;
    emailStatusNote?: string;
  } | null>(null);

  const whatsappPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const currentValues = watch();

  const handleDirectWhatsApp = () => {
    const text = `*Website Quote Request*\n\n*Name:* ${currentValues.name || "Customer"}\n*Company:* ${currentValues.company || "N/A"}\n*Phone:* ${currentValues.phone || "N/A"}\n*Solution:* ${currentValues.solution || "General Quote"}\n*Capacity:* ${currentValues.capacity || "N/A"}\n*Problem:* ${currentValues.problem || "N/A"}\n*Message:* ${currentValues.message || "Please provide a customized proposal."}`;
    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const onSubmit = (data: FormData) => {
    setResult(null);
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });
      
      const response = await submitQuoteForm(null, formData);
      setResult({ 
        success: response.success, 
        message: response.message, 
        whatsappUrl: response.whatsappUrl,
        emailSent: response.emailSent,
        emailStatusNote: (response as any).emailStatusNote
      });

      if (response.success) {
        reset();
        if (response.whatsappUrl) {
          try {
            window.open(response.whatsappUrl, "_blank");
          } catch {
            // Handled by the fallback button in result alert
          }
        }
      }
    });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-primary mb-2">Request a Proposal</h3>
      <p className="text-xs text-gray-500 mb-6">
        Provide details about your water treatment or heating system requirements for a custom quotation.
      </p>
      
      {result && (
        <div className={cn(
          "p-4 mb-6 rounded-xl flex items-start gap-3 border transition-all",
          result.success ? "bg-green-50 border-green-200 text-green-900" : "bg-red-50 border-red-200 text-red-900"
        )}>
          {result.success ? (
            <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mt-0.5 text-red-600 shrink-0" />
          )}
          <div className="flex-1">
            <p className="font-semibold text-sm">{result.message}</p>
            {result.success && !result.emailSent && (
              <p className="text-xs text-amber-700 mt-1">
                Note: Email notification skipped (SMTP credentials not yet added in .env.local). Enquiry has been saved to records and forwarded via WhatsApp.
              </p>
            )}
            {result.whatsappUrl && (
              <div className="mt-3">
                <a
                  href={result.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Click here to Open WhatsApp Message</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Contact Details Section */}
        <div>
          <h4 className="text-base font-bold text-brand-secondary border-b pb-2 mb-4">
            1. Contact Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
              <input
                {...register("name")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name *</label>
              <input
                {...register("company")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="Company Ltd."
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Industry</label>
              <input
                {...register("industry")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="e.g. Textiles, Pharma"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
              <input
                {...register("city")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="Mumbai"
              />
            </div>
          </div>
        </div>

        {/* Technical Requirements Section */}
        <div>
          <h4 className="text-base font-bold text-brand-secondary border-b pb-2 mb-4">
            2. Technical Requirements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Required Solution *</label>
              <select
                {...register("solution")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm cursor-pointer"
              >
                <option value="">Select a solution...</option>
                {solutionsList.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.solution && <p className="text-red-500 text-xs mt-1">{errors.solution.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Water Source</label>
              <input
                {...register("waterSource")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="e.g. Borewell, Municipal, River"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Approximate Capacity</label>
              <input
                {...register("capacity")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="e.g. 5000 LPH or 50 KLD"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Current Problem / Challenge</label>
              <input
                {...register("problem")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm"
                placeholder="e.g. High scaling, Poor effluent quality"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message / Remarks</label>
              <textarea
                {...register("message")}
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-sm resize-none"
                placeholder="Please describe any additional details or requirements..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Dual Actions: Submit Proposal or Instant WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request via WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}
