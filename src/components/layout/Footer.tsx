import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Droplet, Mail, MapPin, Phone, Globe, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#041a3a] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex bg-white p-3 rounded-xl">
              <Image
                src="/Images/HydroTech_LOGO.png"
                alt="HydroTech Logo"
                width={60}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-2xl tracking-tight leading-none mb-1">
                  <span className="text-brand-primary">Hydro</span><span className="text-brand-secondary">Tech</span>
                </span>
                <span className="text-[0.55rem] tracking-[0.2em] text-brand-secondary font-semibold uppercase leading-none">
                  Water Treatment Solution
                </span>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed">
              {siteConfig.tagline}
              <br />
              {siteConfig.description.split('.')[0]}.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-brand-secondary p-2 rounded-full transition-colors text-white">
                <Globe className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-brand-secondary p-2 rounded-full transition-colors text-white">
                <Globe className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-brand-secondary p-2 rounded-full transition-colors text-white">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-brand-secondary transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="hover:text-brand-secondary transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-brand-secondary transition-colors">Industries</Link></li>
              <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand-secondary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello AakashHydroTech! I'm interested in your products.")}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-secondary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and technical insights.</p>
            <form className="flex flex-col gap-3" action="#">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 focus:outline-none focus:border-brand-secondary text-white placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="bg-brand-secondary hover:bg-brand-primary text-white px-4 py-2.5 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-secondary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
