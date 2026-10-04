import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5EA] bg-white py-12 mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E5E5EA]">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold lowercase tracking-tight text-[#111]">
              dieter
            </span>
            <p className="text-xs text-[#8E8E93]">
              Experience e-commerce simplicity at its best.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#666]">
            <Link href="/" className="hover:text-[#111] transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-[#111] transition">
              About
            </Link>
            <Link href="/faq" className="hover:text-[#111] transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-[#111] transition">
              Contact
            </Link>
            <Link
              href="/policies/returns-policy"
              className="hover:text-[#111] transition"
            >
              Returns Policy
            </Link>
            <Link
              href="/policies/terms-and-conditions"
              className="hover:text-[#111] transition"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8E93] gap-4">
          <span>©2024 dieter. All rights reserved.</span>
          <span className="text-[#8E8E93]">
            Form follows function in everyday objects.
          </span>
        </div>
      </div>
    </footer>
  );
}
