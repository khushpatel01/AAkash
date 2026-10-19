import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AakashHydroTech's history, mission, and commitment to providing advanced water treatment solutions.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About AakashHydroTech"
        description="Pioneering advanced water treatment solutions since our inception."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-brand-primary mb-6">About Us</h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                <p>
                  <strong className="text-brand-primary font-bold">Aakash Enterprise</strong> is a leading provider and trader of water treatment chemicals, serving a wide range of industries with reliable, high-quality solutions.
                </p>
                <p>
                  Based in Mahesana, Gujarat, we are committed to helping industries manage water resources efficiently through innovative products, technical expertise and dedicated customer support.
                </p>
                <p>
                  Our product portfolio includes boiler water treatment chemicals, cooling water treatment chemicals, process water treatment chemicals, RO & membrane care chemicals, wastewater treatment chemicals and Speciality solutions.
                </p>
                <p>
                  We work closely with our clients to understand their unique requirements and deliver effective, cost-efficient and environmentally responsible water treatment programs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#041a3a] text-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00adef]/20 flex items-center justify-center text-[#00adef]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To develop and deliver high-quality water treatment chemicals and solutions that help industries manage water resources efficiently, reduce waste and maintain compliance with environmental standards, while creating long-term value for our customers and communities.
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#00adef] opacity-10 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-[#00adef] text-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#041a3a]/20 flex items-center justify-center text-[#041a3a]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    Our Vision
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    To emerge as a trusted leader in industrial water treatment, recognized for technological excellence, consistent performance, and sustainable solutions that create long-term value for our customers and the environment.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[#041a3a] opacity-10 rounded-full blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
