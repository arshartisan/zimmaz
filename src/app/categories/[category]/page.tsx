'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { products, categories, Category } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);

  // Capitalize category param to match our data
  const normalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-6 md:py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium text-[#666] hover:text-[#111] transition py-3"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All Products</span>
      </Link>

      <ScrollReveal className="py-8 border-b border-[#E5E5EA]">
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E93] mb-2 block">
          Category
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111]">
          {normalizedCategory}
        </h1>
        <p className="text-sm text-[#666] mt-2">
          Showing {filteredProducts.length} objects designed for everyday functional use.
        </p>
      </ScrollReveal>

      {/* Category Pills */}
      <div className="py-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <Link
          href="/"
          className="px-4 py-2 rounded-full text-[13px] font-medium bg-[#F6F6F7] text-[#666] hover:bg-[#EEEEF0] hover:text-[#111] transition whitespace-nowrap"
        >
          All
        </Link>
        {categories
          .filter((c) => c !== 'All')
          .map((cat) => {
            const isActive = cat.toLowerCase() === category.toLowerCase();
            return (
              <Link
                key={cat}
                href={`/categories/${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition whitespace-nowrap ${
                  isActive
                    ? 'bg-[#111] text-white shadow-sm'
                    : 'bg-[#F6F6F7] text-[#666] hover:bg-[#EEEEF0] hover:text-[#111]'
                }`}
              >
                {cat}
              </Link>
            );
          })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-4">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
