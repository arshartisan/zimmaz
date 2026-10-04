import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          Legal
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-[#111]">
          Terms and Conditions
        </h1>
        <p className="text-xs text-[#8E8E93] mt-2">Last updated: 2024</p>
      </div>

      <div className="mt-8 space-y-8 text-sm text-[#555] leading-relaxed">
        <p>
          Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully before using the Dieter website operated by Dieter Studio (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
        </p>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Purchases</h2>
          <p>
            If you wish to purchase any product made available through the Service, you may be asked to supply certain information relevant to your Purchase, including your name, shipping address, billing information, and contact details.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Intellectual Property</h2>
          <p>
            The Service and its original content, features, industrial models, and functionality are and will remain the exclusive property of Dieter Studio and its licensors. Our trademarks and design trade dress may not be used in connection with any commercial product or service without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the Netherlands and the European Union, without regard to conflict of law provisions.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#111] mb-2">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact our legal desk at hi@dieterstore.com.
          </p>
        </div>
      </div>
    </div>
  );
}
