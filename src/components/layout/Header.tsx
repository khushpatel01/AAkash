"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Droplet } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Resources", href: "/videos" },
  { name: "Contact", href: "/contact" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Images/HydroTech_LOGO.png"
            alt="HydroTech Logo"
            width={60}
            height={60}
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-2xl md:text-3xl tracking-tight leading-none mb-1">
              <span className="text-brand-primary">Hydro</span><span className="text-brand-secondary">Tech</span>
            </span>
            <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-brand-secondary font-semibold uppercase leading-none">
              Water Treatment Solution
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-brand-secondary",
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  ? "text-brand-secondary"
                  : "text-brand-text"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/request-quote"
            className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2.5 rounded-md font-medium transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-brand-text hover:text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-50",
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                      ? "text-brand-secondary bg-gray-50"
                      : "text-brand-text"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="/request-quote"
                  className="block w-full text-center bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
