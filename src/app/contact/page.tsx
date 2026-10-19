import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AakashHydroTech for advanced water treatment solutions, chemical programs, and technical support.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        description="Our technical experts are ready to help you optimize your water treatment systems."
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-10 text-lg">
                Whether you need a comprehensive water treatment program, equipment consultation, or technical support, our team is here to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-text mb-2">Office Address</h4>
                    <p className="text-gray-600">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-text mb-2">Phone</h4>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-brand-secondary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-[#25D366]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-text mb-2">WhatsApp</h4>
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello AakashHydroTech! I'm interested in your products.")}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition-colors">
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-text mb-2">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-brand-secondary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-text mb-2">Working Hours</h4>
                    <p className="text-gray-600">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="-mt-8 lg:-mt-32 relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
