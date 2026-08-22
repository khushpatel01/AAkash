import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { industries } from "@/data/industries";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Specialized water treatment solutions for various industrial sectors.",
};

export default function IndustriesPage() {
  return (
    <div>
      <PageHero 
        title="Industries We Serve" 
        description="We understand that every industry has unique water treatment challenges."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48">
                  <Image 
                    src={industry.image} 
                    alt={industry.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{industry.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
