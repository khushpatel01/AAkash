"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitQuoteForm } from "@/app/actions/quote";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
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

type FormData = z.infer<typeof formSchema>;

const solutionsList = [
  "Boiler Water Treatment",
  "Cooling Water Treatment",
  "RO Treatment",
  "ETP / STP",
  "Water Treatment Plant",
  "Chemical Programs",
  "Dosing Equipment",
  "Other"
];

export function QuoteForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setResult(null);
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      
      const response = await submitQuoteForm(null, formData);
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
      <h3 className="text-2xl font-bold text-brand-primary mb-6">Request a Proposal</h3>
      
      {result && (
        <div className={cn("p-4 mb-6 rounded-md flex items-start gap-3", result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800")}>
          {result.success ? <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" /> : <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />}
          <p>{result.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Contact Details Section */}
        <div>
          <h4 className="text-lg font-semibold text-brand-secondary border-b pb-2 mb-4">1. Contact Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input {...register("name")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <input {...register("company")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" {...register("email")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input type="tel" {...register("phone")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <input {...register("industry")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" placeholder="e.g. Textiles, Pharma" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input {...register("city")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" />
            </div>
          </div>
        </div>

        {/* Technical Requirements Section */}
        <div>
          <h4 className="text-lg font-semibold text-brand-secondary border-b pb-2 mb-4">2. Technical Requirements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Required Solution *</label>
              <select {...register("solution")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none bg-white">
                <option value="">Select a solution...</option>
                {solutionsList.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.solution && <p className="text-red-500 text-xs mt-1">{errors.solution.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Water Source</label>
              <input {...register("waterSource")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" placeholder="e.g. Borewell, Municipal, River" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Approximate Capacity</label>
              <input {...register("capacity")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" placeholder="e.g. 5000 LPH or 50 KLD" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Problem / Challenge</label>
              <input {...register("problem")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none" placeholder="e.g. High scaling, Poor effluent quality" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message / Remarks</label>
              <textarea {...register("message")} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary outline-none resize-none"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" disabled={isPending} className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-medium py-4 px-6 rounded-md transition-colors flex items-center justify-center gap-2 text-lg">
          {isPending ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting Request...</> : "Submit Quote Request"}
        </button>
      </form>
    </div>
  );
}
