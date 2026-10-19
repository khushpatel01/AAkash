import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col h-full group">
      <div className="relative h-56 bg-gray-50 flex items-center justify-center overflow-hidden p-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-brand-text mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center bg-gray-50 hover:bg-gray-100 text-brand-primary border border-gray-200 px-4 py-2 rounded-md font-medium transition-colors text-sm"
          >
            View Details
          </Link>
          <Link
            href={`/request-quote?product=${product.slug}`}
            className="flex-1 text-center bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
