import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { solutions } from "@/data/solutions";
import { SolutionCard } from "@/components/ui/SolutionCard";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Comprehensive industrial water treatment solutions.",
};

export default function SolutionsPage() {
  return (
    <div>
      <PageHero 
        title="Our Solutions" 
        description="Advanced water treatment programs for every industrial application."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
