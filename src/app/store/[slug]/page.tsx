'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { ProductCard } from '@/components/product-card';
import { ArrowLeft, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  // If not enough in category, supplement with other products
  const displayRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-6 md:py-10">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium text-[#666] hover:text-[#111] transition py-3"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Products</span>
      </Link>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-6">
        {/* Left: Product Image Box */}
        <div className="aspect-square bg-[#F6F6F7] rounded-xl flex items-center justify-center p-8 md:p-16 relative">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-mono tracking-wider text-[#8E8E93]">
              {product.category}
            </span>
            {product.inStock ? (
              <span className="text-xs font-medium text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                In stock
              </span>
            ) : (
              <span className="text-xs font-medium text-[#71717A] bg-[#EEEEF0] px-2.5 py-0.5 rounded-full">
                Out of stock
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#111] mt-3">
            {product.name}
          </h1>

          <div className="text-2xl font-semibold text-[#111] mt-3">
            ${product.price} USD
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex items-center justify-between border border-[#E5E5EA] rounded-full px-4 py-3 min-w-[120px]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-[#666] hover:text-[#111] text-lg font-medium px-2"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="text-sm font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-[#666] hover:text-[#111] text-lg font-medium px-2"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 py-3.5 px-8 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                !product.inStock
                  ? 'bg-[#E5E5EA] text-[#8E8E93] cursor-not-allowed'
                  : added
                  ? 'bg-[#16A34A] text-white'
                  : 'bg-[#111] text-white hover:bg-[#333]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart</span>
                </>
              ) : product.inStock ? (
                `Buy it now — $${product.price * quantity}`
              ) : (
                'Currently Out of Stock'
              )}
            </button>
          </div>

          {/* Description */}
          <div className="mt-8 pt-8 border-t border-[#E5E5EA]">
            <h2 className="text-xs uppercase font-mono tracking-wider text-[#8E8E93] mb-3">
              Overview
            </h2>
            <div className="text-sm text-[#555] leading-relaxed whitespace-pre-line space-y-4">
              {product.description}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mt-8 pt-8 border-t border-[#E5E5EA]">
            <h2 className="text-xs uppercase font-mono tracking-wider text-[#8E8E93] mb-4">
              Specifications
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#F6F6F7] p-3 rounded-lg">
                <span className="text-[#8E8E93] block">Dimensions</span>
                <span className="font-medium text-[#111] mt-1 block">
                  {product.specs.dimensions}
                </span>
              </div>
              <div className="bg-[#F6F6F7] p-3 rounded-lg">
                <span className="text-[#8E8E93] block">Weight</span>
                <span className="font-medium text-[#111] mt-1 block">
                  {product.specs.weight}
                </span>
              </div>
              <div className="bg-[#F6F6F7] p-3 rounded-lg">
                <span className="text-[#8E8E93] block">Materials</span>
                <span className="font-medium text-[#111] mt-1 block">
                  {product.specs.materials}
                </span>
              </div>
              <div className="bg-[#F6F6F7] p-3 rounded-lg">
                <span className="text-[#8E8E93] block">Power Supply</span>
                <span className="font-medium text-[#111] mt-1 block">
                  {product.specs.power}
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-8 pt-6 border-t border-[#E5E5EA] flex flex-wrap gap-6 text-xs text-[#666]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#111]" />
              <span>Free shipping on all orders</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#111]" />
              <span>Free 30-day return policy</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#111]" />
              <span>2-year warranty included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <ScrollReveal className="mt-28 pt-12 border-t border-[#E5E5EA]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-[#111]">You may also like</h2>
          <Link
            href="/"
            className="text-xs font-medium text-[#666] hover:text-[#111] transition"
          >
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRelated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
