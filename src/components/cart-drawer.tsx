'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/cart-context';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    totalPrice,
    totalItems,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-white z-50 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E5E5EA]">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-[#111]">Your Cart</h2>
                <span className="text-xs text-[#8E8E93] bg-[#F6F6F7] px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#F6F6F7] text-[#666] hover:text-[#111] transition"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E5E5EA]">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <p className="text-sm font-medium text-[#111]">Your cart is empty</p>
                  <p className="text-xs text-[#8E8E93] mt-1 max-w-[240px]">
                    Looks like you haven&apos;t added any minimalist objects yet.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-xs font-medium text-white bg-[#111] px-5 py-2.5 rounded-full hover:bg-[#333] transition"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map(({ product, quantity }) => (
                  <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                    <div className="w-20 h-20 bg-[#F6F6F7] rounded-md flex-shrink-0 flex items-center justify-center p-2 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={70}
                        height={70}
                        unoptimized
                        className="object-contain max-h-full"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium text-[#111]">
                            {product.name}
                          </h3>
                          <p className="text-xs text-[#8E8E93]">{product.category}</p>
                        </div>
                        <span className="text-sm font-semibold text-[#111]">
                          ${product.price * quantity}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5E5EA] rounded-full px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-1 text-[#666] hover:text-[#111] transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold px-2 min-w-[20px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-1 text-[#666] hover:text-[#111] transition"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-[#8E8E93] hover:text-red-500 transition p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#E5E5EA] bg-[#FAFAFA]">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#666]">Subtotal</span>
                  <span className="font-semibold text-[#111]">${totalPrice}</span>
                </div>
                <p className="text-[11px] text-[#8E8E93] mb-4">
                  Free 30-day return policy. Free shipping on all orders.
                </p>
                <button
                  onClick={() => {
                    alert('Order placed successfully! This is a demo checkout.');
                  }}
                  className="w-full bg-[#111] text-white py-3.5 rounded-full text-sm font-medium hover:bg-[#333] transition"
                >
                  Checkout • ${totalPrice}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
