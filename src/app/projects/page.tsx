import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { projects } from "@/data/projects";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description: "View our completed industrial water treatment projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHero 
        title="Our Projects" 
        description="Discover how we've helped industries optimize their water systems."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-64">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-500 mb-4">{project.location}</div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700">The Challenge:</h4>
                      <p className="text-gray-600 text-sm mt-1">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">The Result:</h4>
                      <p className="text-gray-600 text-sm mt-1">{project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
