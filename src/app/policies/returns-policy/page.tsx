import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ReturnsPolicyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-10 md:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium text-[#666] hover:text-[#111] transition py-3"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Store</span>
      </Link>

      <div className="mt-6 border-b border-[#E5E5EA] pb-6">
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E93] block mb-2">
          Customer Service
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-[#111]">
          Returns and Refund Policy
        </h1>
        <p className="text-xs text-[#8E8E93] mt-2">Hassle-free 30-day guarantee</p>
      </div>

      <div className="mt-8 space-y-8 text-sm text-[#555] leading-relaxed">
        <p>
          Thank you for shopping at Dieter. We appreciate your interest in our minimalist hardware and want you to be completely satisfied with your purchase.
        </p>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">30-Day Returns</h2>
          <p>
            You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused, in the same pristine condition that you received it, and enclosed in its original manufacturer packaging.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Refunds</h2>
          <p>
            Once we receive your item, our quality inspection desk will verify the package and immediately notify you of the status. Upon approval, we initiate a full refund to your original payment method (Credit Card, PayPal, Apple Pay). You will receive the credit within 3–5 business days depending on your bank issuer.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Exchanges</h2>
          <p>
            If you wish to exchange an object for another model or color variant, please submit a return request and place a new order directly on our site.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Contact Us</h2>
          <p>
            To initiate a return label or for assistance, please email our support team at{' '}
            <a href="mailto:hi@dieterstore.com" className="text-[#111] underline">
              hi@dieterstore.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
