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
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <h2>Our Story</h2>
            <p>
              AakashHydroTech is a premier industrial water treatment company dedicated to providing innovative and sustainable solutions...
            </p>
            {/* More content to be added */}
          </div>
        </div>
      </section>
    </div>
  );
}
