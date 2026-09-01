import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Shield, Droplet, Cog, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import IndustryImage from "@/Images/Industry.png";
import { solutions } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function Home() {
  const featuredSolutions = solutions.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={IndustryImage}
            alt="Industry Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B5F]/90 to-[#062B5F]/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {siteConfig.description.split('.')[0]}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
              We deliver reliable water treatment chemicals, systems and technical solutions designed to improve efficiency, protect equipment and support sustainable water management.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <Link
                href="/request-quote"
                className="bg-brand-secondary hover:bg-white text-white hover:text-brand-primary px-8 py-4 rounded-md font-bold transition-colors text-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/solutions"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-bold transition-colors text-lg flex items-center gap-2"
              >
                Explore Solutions
              </Link>
              <Link
                href="/videos"
                className="text-white hover:text-brand-secondary px-6 py-4 rounded-md font-medium transition-colors text-lg flex items-center gap-2"
              >
                <PlayCircle className="w-6 h-6" />
                Watch Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Why Choose AakashHydroTech?" 
            subtitle="Partner with industry experts for reliable, efficient, and sustainable water treatment solutions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Premium Quality", icon: Shield, desc: "ISO certified chemicals and equipment." },
              { title: "Customized Solutions", icon: Cog, desc: "Tailored to your specific water challenges." },
              { title: "Technical Expertise", icon: Droplet, desc: "Decades of experience in water management." },
              { title: "Fast & Reliable Support", icon: CheckCircle2, desc: "24/7 technical assistance and service." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="inline-flex p-4 rounded-full bg-blue-50 text-brand-secondary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              title="Our Solutions"
              subtitle="Comprehensive water treatment programs for every industrial application."
              className="mb-0"
            />
            <Link href="/solutions" className="hidden md:flex items-center gap-2 text-brand-primary font-medium hover:text-brand-secondary transition-colors">
              View All Solutions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/solutions" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-brand-secondary transition-colors">
              View All Solutions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 opacity-10">
          <Image src={images.about.url} alt="Background" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Water Systems?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our technical team today for a free consultation and customized treatment program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-brand-secondary hover:bg-white text-white hover:text-brand-primary px-8 py-4 rounded-md font-bold transition-colors text-lg">
              Contact Us Now
            </Link>
            <Link href="/request-quote" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold transition-colors text-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
