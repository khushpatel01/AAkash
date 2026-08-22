"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/app/actions/contact";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  industry: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  solution: z.string().min(1, "Please select a solution"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;

const solutions = [
  "Boiler Water Treatment",
  "Cooling Water Treatment",
  "RO Treatment",
  "ETP / STP",
  "Water Treatment Plant",
  "Chemicals",
  "AMC / Service",
  "Other",
];

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setResult(null);
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      
      const response = await submitContactForm(null, formData);
      setResult({ success: response.success, message: response.message });
      if (response.success) {
        reset();
        if (response.whatsappUrl) {
          window.open(response.whatsappUrl, "_blank");
        }
      }
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-primary mb-6">Send an Enquiry</h3>
      
      {result && (
        <div className={cn("p-4 mb-6 rounded-md flex items-start gap-3", result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800")}>
          {result.success ? <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" /> : <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />}
          <p>{result.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              {...register("name")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              {...register("company")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="Company Ltd."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <input
              {...register("industry")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="e.g. Pharma"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              {...register("city")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="Mumbai"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              {...register("state")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
              placeholder="Maharashtra"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interested Solution *</label>
          <select
            {...register("solution")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all bg-white"
          >
            <option value="">Select a solution...</option>
            {solutions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.solution && <p className="text-red-500 text-xs mt-1">{errors.solution.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all resize-none"
            placeholder="Please describe your requirements..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
