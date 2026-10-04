'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#F6F6F7] rounded-lg overflow-hidden flex items-center justify-center p-8 transition-colors duration-300">
        {/* Stock status indicator badge */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock ? (
            <span className="text-[11px] font-medium text-[#16A34A] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
              In Stock
            </span>
          ) : (
            <span className="text-[11px] font-medium text-[#71717A] bg-[#EEEEF0] px-2.5 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Product Image */}
        <Link
          href={`/store/${product.slug}`}
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          <div className="relative w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </Link>

        {/* Quick Add Button */}
        {product.inStock && (
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm hover:bg-[#111] hover:text-white text-[#111] rounded-full flex items-center justify-center shadow-md transition-all duration-200 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Info */}
      <div className="pt-3 pb-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <Link
            href={`/store/${product.slug}`}
            className="text-[14px] font-medium text-[#111] hover:underline"
          >
            {product.name}
          </Link>
          <span className="text-[14px] font-semibold text-[#111] flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <span className="text-[11px] text-[#8E8E93] mt-0.5">
          {product.category}
        </span>
      </div>
    </motion.div>
  );
}
