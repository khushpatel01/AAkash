import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our range of industrial water treatment chemicals and equipment.",
};

export default function ProductsPage() {
  return (
    <div>
      <PageHero 
        title="Our Products" 
        description="High-performance chemicals and reliable equipment for all water treatment needs."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
