import Image from "next/image";
import { MessageCircle, Thermometer } from "lucide-react";
import type { Product } from "@/data/products";
import { siteConfig } from "@/config/site";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const whatsappMessage = encodeURIComponent(
    `Hello Aakash Enterprise! I am interested in ${product.name}. Please provide quotation and availability details.`
  );

  const displayCategory =
    product.division === "trading"
      ? "Synthetic Heat Transfer Fluid"
      : product.category;

  return (
    <div className="bg-white border border-gray-200/80 hover:border-brand-secondary/40 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full group">
      
      {/* Product Image Area */}
      <div className="relative h-56 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden p-3 border-b border-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Traded by Aakash Enterprise badge */}
        {product.isTradedProduct && (
          <div className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            Also Traded by Us
          </div>
        )}

        {/* Temperature rating badge */}
        {product.temperatureRange && (
          <div className="absolute bottom-2.5 right-2.5 bg-slate-900/85 backdrop-blur-sm text-cyan-300 text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm border border-slate-700/50">
            <Thermometer className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>{product.temperatureRange}</span>
          </div>
        )}
      </div>

      {/* Product Content Area */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className={`text-[11px] font-bold uppercase tracking-wider ${
            product.division === "trading" ? "text-amber-700" : "text-brand-secondary"
          }`}>
            {displayCategory}
          </span>
          {product.brand && (
            <span className="text-[10px] text-gray-500 font-medium truncate">
              {product.brand}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-brand-text mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Application Tags */}
        {product.applications && product.applications.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.applications.slice(0, 3).map((app, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-700 rounded"
              >
                {app}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-gray-100">
          <a
            href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2.5 rounded-lg font-semibold transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
