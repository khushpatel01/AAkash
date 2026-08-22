import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

export function PageHero({ title, description, image, className }: PageHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[#062B5F] z-0">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        )}
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
