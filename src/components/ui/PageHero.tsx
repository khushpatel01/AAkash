import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Droplets, ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
  breadcrumb?: string;
  className?: string;
}

function getDefaultHeroImage(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("product")) return "/Images/ChemicalTreatment.png";
  if (lower.includes("solution")) return "/Images/water_Treatment.jpg";
  if (lower.includes("industr")) return "/Images/Industry.png";
  if (lower.includes("service")) return "/Images/Cooling Water Treatment.png";
  if (lower.includes("project")) return "/Images/Industry.png";
  if (lower.includes("video") || lower.includes("resource")) return "/Images/waterTretment.png";
  if (lower.includes("about")) return "/Images/Industry.png";
  if (lower.includes("contact")) return "/Images/water_Treatment.jpg";
  if (lower.includes("quote")) return "/Images/water_Treatment.jpg";
  return "/Images/water_Treatment.jpg";
}

export function PageHero({
  title,
  description,
  image,
  badge,
  breadcrumb,
  className,
}: PageHeroProps) {
  const heroImage = image || getDefaultHeroImage(title);

  return (
    <section
      className={cn(
        "relative pt-28 pb-7 md:pt-32 md:pb-8 overflow-hidden bg-gradient-to-r from-[#021838] via-[#062B5F] to-[#0A3D73] text-white border-b border-[#00AEEF]/20",
        className
      )}
    >
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-luminosity brightness-90 contrast-125"
        />
        {/* Directional gradient to guarantee text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021838]/95 via-[#062B5F]/85 to-[#062B5F]/60" />
      </div>

      {/* High-tech engineering dot pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none z-0" 
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute -top-24 right-10 w-72 h-72 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-10 w-72 h-72 bg-[#00B8A9]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Bottom Accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/40 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-cyan-200/80 mb-2 font-medium" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400/60" />
              <span className="text-cyan-300 font-semibold">{breadcrumb || title}</span>
            </nav>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-xs sm:text-sm md:text-base text-slate-200/90 mt-1 max-w-2xl font-normal leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Quick subtle badge on the right for md+ screens */}
          {badge && (
            <div className="hidden sm:inline-flex items-center gap-2 self-start md:self-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 text-xs font-semibold tracking-wider uppercase shrink-0">
              <Droplets className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>{badge}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
