"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/data/products";
import { Search, Filter, MessageCircle, Flame, Droplets, X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ProductFilterGridProps {
  products: Product[];
  categories: string[];
}

export function ProductFilterGrid({ products, categories }: ProductFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const whatsappPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const thermicFluidWhatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "Hello Aakash Enterprise! I am interested in your Synthetic Heat Transfer Fluids (Thermic Oils). Please provide pricing and technical specifications."
  )}`;

  const coreProducts = useMemo(() => {
    return products.filter((p) => p.division === "core");
  }, [products]);

  const tradingProducts = useMemo(() => {
    return products.filter((p) => p.division === "trading");
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some((app) =>
          app.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // When "All Products" is selected and no search query, show separated sections
  const showSeparatedSections = selectedCategory === "All Products" && searchQuery.trim() === "";

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
        
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold uppercase tracking-wider mr-1 hidden sm:flex shrink-0">
            <Filter className="w-3.5 h-3.5 text-brand-secondary" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const isTrading = cat.includes("Thermic Fluids");

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? isTrading
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-brand-primary text-white shadow-sm"
                    : isTrading
                    ? "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300/80"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isTrading ? (
                  <Flame className={`w-3 h-3 ${isSelected ? "text-amber-200" : "text-amber-600"}`} />
                ) : (
                  <Droplets className={`w-3 h-3 ${isSelected ? "text-cyan-300" : "text-brand-secondary"}`} />
                )}
                <span>{cat}</span>
                {isTrading && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-amber-200 text-amber-900"
                  }`}>
                    {tradingProducts.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px] lg:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chemicals, oils or applications..."
            className="w-full pl-9 pr-8 py-2 text-xs text-gray-900 placeholder:text-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* VIEW 1: Separated Sections when viewing All Products */}
      {showSeparatedSections ? (
        <div className="space-y-12">
          
          {/* SECTION 1: Core Water Treatment Chemicals & Equipment */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Droplets className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg md:text-xl font-bold text-brand-primary">
                      Water Treatment Chemicals & Systems
                    </h2>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-brand-primary px-2 py-0.5 rounded">
                      Main Product Line
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Our core specialized formulations for boilers, cooling towers, reverse osmosis, and water treatment plants.
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium self-end sm:self-center">
                {coreProducts.length} Products
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* SECTION 2: We Also Trade: Synthetic Heat Transfer Fluids */}
          <div className="space-y-6 pt-4">
            {/* Distinct Trading Banner */}
            <div className="bg-gradient-to-r from-amber-50 via-orange-50/40 to-white border border-amber-200/90 rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5 shadow-sm">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                      We Also Trade This
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      Synthetic Heat Transfer Fluids & Thermic Oils
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                      Beyond water treatment chemicals, Aakash Enterprise also trades and supplies high-performance <strong>synthetic heat transfer fluids and thermic oils</strong> for industrial closed-loop process heating systems up to 400°C.
                    </p>
                  </div>
                </div>

                <a
                  href={thermicFluidWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tradingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* VIEW 2: Filtered Results (by Category or Search) */
        <div className="space-y-6">
          {/* If the user specifically clicked "Also Traded: Thermic Fluids", show the trading info header */}
          {selectedCategory.includes("Thermic Fluids") && (
            <div className="bg-gradient-to-r from-amber-50 via-orange-50/40 to-white border border-amber-200/90 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500 text-white shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1">
                      Trading Division
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      Synthetic Heat Transfer Fluids & Thermic Oils
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Traded & supplied by Aakash Enterprise for industrial boilers, heaters, and closed-loop process systems.
                    </p>
                  </div>
                </div>

                <a
                  href={thermicFluidWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-gray-500 px-1">
            <span>
              Showing <strong>{filteredProducts.length}</strong> matching products
            </span>
            <button
              onClick={() => {
                setSelectedCategory("All Products");
                setSearchQuery("");
              }}
              className="text-brand-secondary hover:underline font-medium"
            >
              Show All Products
            </button>
          </div>

          {/* Filtered Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <p className="text-gray-500 text-sm mb-3">No products match your selected filter or search.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSearchQuery("");
                }}
                className="bg-brand-primary text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-brand-secondary transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
