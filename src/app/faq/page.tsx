'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I place an order?',
    answer:
      'Browse our catalog of minimalist objects, select the item you desire, choose the quantity, and click "Buy it now" or "Add to Cart". You can then proceed to our streamlined checkout.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, PayPal, and regional options like iDEAL and Bancontact.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Orders are typically processed within 24–48 hours. Standard domestic delivery takes 2–4 business days, while international shipping usually takes 5–8 business days with full door-to-door tracking.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a hassle-free 30-day return policy. If you are not completely satisfied with your object, return it in its original packaging for a full refund or exchange.',
  },
  {
    question: 'How do I get technical support for my product?',
    answer:
      'Every Dieter product comes with our comprehensive 2-year warranty. For troubleshooting, replacement parts, or technical manuals, simply email us at hi@dieterstore.com.',
  },
  {
    question: 'Is my payment information safe on your website?',
    answer:
      'Yes, our store is secured with 256-bit SSL encryption and processed via certified PCI-DSS Level 1 compliant payment gateways. We never store your full payment card details.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-[840px] mx-auto px-6 py-10 md:py-16">
      <ScrollReveal>
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E93] mb-3 block">
          Support & Questions
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-[#666] mt-3">
          For all of your other inquiries you can contact us at{' '}
          <a
            href="mailto:hi@dieterstore.com"
            className="text-[#111] underline hover:opacity-80"
          >
            hi@dieterstore.com
          </a>
        </p>
      </ScrollReveal>

      {/* Accordion List */}
      <div className="mt-12 divide-y divide-[#E5E5EA] border-y border-[#E5E5EA]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-5">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-base font-medium text-[#111] group-hover:opacity-80 transition">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8E8E93] transition-transform duration-200 flex-shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-[#111]' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm text-[#555] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Contact box */}
      <div className="mt-16 p-8 bg-[#F6F6F7] rounded-xl text-center">
        <h2 className="text-lg font-semibold text-[#111]">Still have questions?</h2>
        <p className="text-xs text-[#666] mt-1 max-w-sm mx-auto">
          Our studio team is available Monday through Friday from 09:00 to 18:00 CET.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-5 px-6 py-2.5 rounded-full bg-[#111] text-white text-xs font-medium hover:bg-[#333] transition"
        >
          Send us a message
        </Link>
      </div>
    </div>
  );
}
