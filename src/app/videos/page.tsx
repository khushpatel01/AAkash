import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { videos } from "@/data/videos";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Videos & Resources",
  description: "Watch our product demonstrations, plant tours, and technical guides.",
};

export default function VideosPage() {
  return (
    <div>
      <PageHero 
        title="Video Resources" 
        description="Learn more about our solutions through technical demonstrations and overviews."
      />
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
                <div className="relative h-48 bg-gray-900">
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                    {video.category}
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
