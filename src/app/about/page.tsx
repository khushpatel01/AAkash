import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { 
  Droplets, 
  Flame, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Target, 
  Eye, 
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aakash Enterprise: over 15 years of excellence in industrial water treatment chemicals, systems, and synthetic heat transfer fluids in Gujarat, India.",
};

export default function AboutPage() {
  const whatsappPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Aakash Enterprise! I would like to inquire about your products.")}`;

  return (
    <div>
      {/* Standard Uniform Hero */}
      <PageHero
        title="About Us"
        description="Reliable water treatment chemicals, systems, and specialized industrial heating fluids."
      />

      {/* Company Profile Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Story & Description */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                Company Profile
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary leading-tight">
                Aakash Enterprise — Industrial Water Treatment & Specialty Fluids
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Based in <strong className="text-gray-900 font-semibold">Unjha, Mehsana (Gujarat)</strong>, <strong className="text-gray-900 font-semibold">Aakash Enterprise</strong> is a dedicated provider of industrial water treatment chemicals, dosing systems, and technical services. We work closely with plant managers and process engineers to improve energy efficiency, protect equipment from scale and corrosion, and maintain regulatory compliance.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our portfolio spans chemical conditioning for steam boilers, cooling towers, reverse osmosis (RO) systems, and industrial wastewater (ETP / STP) plants. Additionally, we trade and distribute premium <strong className="text-gray-900 font-semibold">Maxothermie® synthetic heat transfer fluids (thermic oils)</strong> for high-temperature process heating applications.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>15+ Years Industrial Experience</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>24/7 Technical Support</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Custom Water Formulations</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Prompt Supply & Local Delivery</span>
                </div>
              </div>

              {/* Quick Navigation Link */}
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  <span>Explore Our Products & Chemicals</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Clean Contact Details Card (Replaces Image) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                    Get in Touch
                  </span>
                  <h3 className="text-xl font-bold text-brand-primary mt-1">
                    Contact Details
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-brand-primary shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Office Address
                      </div>
                      <p className="text-gray-700 leading-snug mt-0.5">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-brand-primary shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Phone Number
                      </div>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-gray-800 font-semibold hover:text-brand-secondary transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-50 text-[#25D366] shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        WhatsApp (Instant Support)
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 font-semibold hover:text-[#25D366] transition-colors"
                      >
                        {siteConfig.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-brand-primary shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-800 font-semibold hover:text-brand-secondary transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-brand-primary shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Business Hours
                      </div>
                      <p className="text-gray-700">
                        {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white py-2.5 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 bg-brand-primary hover:bg-brand-secondary text-white py-2.5 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Two Core Offerings (Simple & Clear) */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-brand-primary">
              Our Products & Operations
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Engineered chemical programs and specialty thermal transfer fluids.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Water Treatment */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-secondary flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-secondary">
                    Primary Specialization
                  </span>
                  <h3 className="text-lg font-bold text-brand-primary">
                    Water Treatment Chemicals
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tailored chemical programs designed to prevent scaling, inhibit corrosion, and control microbiological growth across critical water systems.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Boiler Water Chemicals (Anti-scalants, O₂ Scavengers)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Cooling Tower Chemicals (Corrosion Inhibitors, Biocides)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>RO Membrane Anti-scalants & Cleaners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Effluent & Wastewater Chemicals (ETP / STP)</span>
                </li>
              </ul>
            </div>

            {/* Synthetic Thermic Fluids */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    We Also Trade This
                  </span>
                  <h3 className="text-lg font-bold text-brand-primary">
                    Synthetic Heat Transfer Fluids
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Authorized supply of premium synthetic thermic fluids (Maxothermie®) for closed-loop, high-temperature industrial process heating.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Bulk temperature limit up to 350°C+</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>High thermal stability & low vapor pressure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Superior resistance to cracking and oxidation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Applications in textiles, chemicals, pharma & processing</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision (Clean Two Cards) */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Mission */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To formulate and supply dependable water treatment chemicals and thermal fluids that help industries protect equipment, conserve water, reduce energy consumption, and maintain compliance with environmental regulations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-brand-secondary text-white flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be recognized as a reliable, technically competent partner for industrial water management and specialized heating fluids across Gujarat and India, valued for our integrity, prompt service, and consistent product quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Simple Call to Action */}
      <section className="py-10 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h3 className="text-xl font-bold text-brand-primary mb-2">
            Need Technical Assistance or Product Details?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Get in touch with our team for water testing support, product recommendations, or direct quotation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (+91 9909053121)</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
