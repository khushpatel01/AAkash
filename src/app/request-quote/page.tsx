import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { siteConfig } from "@/config/site";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a custom quote for AakashHydroTech water treatment solutions and equipment.",
};

export default function RequestQuotePage() {
  return (
    <div>
      <PageHero
        title="Request a Quote"
        description="Provide details about your water treatment requirements, and our technical team will prepare a customized proposal."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Information Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Why Request a Quote?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Industrial water treatment requires tailored solutions. A boiler system in a textile plant has different chemical needs than a cooling tower in a pharmaceutical facility.
                  By providing your specific requirements, our engineers can design a program that optimizes performance and minimizes costs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-semibold text-lg text-brand-primary mb-6">Need Immediate Assistance?</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-md text-brand-secondary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Call Us</div>
                      <div className="font-medium text-gray-900">{siteConfig.contact.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-md text-brand-secondary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Email Us</div>
                      <div className="font-medium text-gray-900">{siteConfig.contact.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-md text-brand-secondary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Working Hours</div>
                      <div className="font-medium text-gray-900">{siteConfig.contact.workingHours}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Quote Form */}
            <div className="lg:col-span-2 relative z-10 -mt-8 lg:-mt-32">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
