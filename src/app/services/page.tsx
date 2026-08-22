import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/data/services";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive technical services, plant maintenance, and water testing.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero 
        title="Our Services" 
        description="Expert technical support, maintenance, and consulting to ensure optimal plant performance."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = (Icons as any)[service.icon] || Icons.Wrench;
              return (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="inline-flex p-4 rounded-full bg-blue-50 text-brand-secondary mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
