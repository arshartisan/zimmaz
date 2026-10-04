'use client';

import React, { useState } from 'react';
import { products, categories, Category } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-6 md:py-10">
      {/* Editorial Hero Statement */}
      <ScrollReveal className="py-8 md:py-14 border-b border-[#E5E5EA]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E8E93] mb-3 block">
              Functionalist Hardware & Audio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111] leading-[1.12]">
              Experience e-commerce simplicity at its best.
            </h1>
            <p className="text-[#666] text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              Dieter is a curated collection of minimalist electronics and precision design objects. Built with uncompromising clarity and industrial durability.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#666] flex-shrink-0">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#111]" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#111]" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Filter Bar */}
      <div className="py-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? products.length
                : products.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#111] text-white shadow-sm'
                    : 'bg-[#F6F6F7] text-[#666] hover:bg-[#EEEEF0] hover:text-[#111]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#8E8E93]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Features Banner */}
      <ScrollReveal className="mt-24 py-16 border-y border-[#E5E5EA]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l border-[#E5E5EA] pl-6">
            <span className="text-xs font-mono text-[#8E8E93]">01 / PHILOSOPHY</span>
            <h3 className="text-base font-medium text-[#111] mt-2">
              As Little Design as Possible
            </h3>
            <p className="text-xs text-[#666] mt-2 leading-relaxed">
              Back to purity, back to simplicity. Products fulfill their purpose cleanly without visual noise or unnecessary decorations.
            </p>
          </div>

          <div className="border-l border-[#E5E5EA] pl-6">
            <span className="text-xs font-mono text-[#8E8E93]">02 / CRAFTSMANSHIP</span>
            <h3 className="text-base font-medium text-[#111] mt-2">
              Honest Engineering
            </h3>
            <p className="text-xs text-[#666] mt-2 leading-relaxed">
              Anodized aerospace-grade aluminum, tactile mechanical switches, and silent precision quartz movements built for a lifetime.
            </p>
          </div>

          <div className="border-l border-[#E5E5EA] pl-6">
            <span className="text-xs font-mono text-[#8E8E93]">03 / GUARANTEE</span>
            <h3 className="text-base font-medium text-[#111] mt-2">
              Free Worldwide Delivery
            </h3>
            <p className="text-xs text-[#666] mt-2 leading-relaxed">
              Every order arrives in sustainable zero-plastic cardboard packaging with an insured 30-day trial guarantee.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
