import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/data/solutions";

interface SolutionCardProps {
  solution: Solution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-brand-primary mb-2">
          {solution.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-1">{solution.shortDescription}</p>
        <Link
          href={`/solutions/${solution.slug}`}
          className="inline-flex items-center gap-2 text-brand-secondary font-medium group-hover:text-brand-primary transition-colors mt-auto"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
