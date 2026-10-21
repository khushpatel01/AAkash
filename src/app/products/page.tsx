import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { products, productCategories } from "@/data/products";
import { ProductFilterGrid } from "@/components/ui/ProductFilterGrid";

export const metadata: Metadata = {
  title: "Water Treatment Chemicals & Products",
  description: "Specialized industrial water treatment chemicals, dosing systems, and Maxothermie® synthetic heat transfer fluids traded by Aakash Enterprise.",
};

export default function ProductsPage() {
  return (
    <div>
      <PageHero 
        title="Our Products" 
        description="Specialized water treatment chemicals, dosing equipment, and industrial thermic fluids."
      />
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ProductFilterGrid products={products} categories={productCategories} />
        </div>
      </section>
    </div>
  );
}
