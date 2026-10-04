import React from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 md:py-16">
      {/* Hero Headline */}
      <ScrollReveal className="max-w-3xl">
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E93] mb-4 block">
          About Dieter
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111] leading-[1.12]">
          Reimagining the way we experience technology.
        </h1>
        <p className="text-base sm:text-lg text-[#555] mt-6 leading-relaxed">
          Dieter was born out of a relentless curiosity and a desire to bring functionalist, timeless simplicity back to modern electronics.
        </p>
      </ScrollReveal>

      {/* Our Story */}
      <ScrollReveal className="mt-20 pt-12 border-t border-[#E5E5EA]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-[#111]">Our Story</h2>
            <span className="text-xs text-[#8E8E93] font-mono mt-1 block">
              EST. 2023 / AMSTERDAM
            </span>
          </div>
          <div className="md:col-span-2 space-y-6 text-[#555] text-sm sm:text-base leading-relaxed">
            <p>
              It all started with a simple question: What if technology didn’t have to be complicated? What if it could be intuitive, beautiful, and accessible to everyone? With this vision in mind, Dieter was founded.
            </p>
            <p>
              Founded by a group of like-minded designers, engineers, and tech enthusiasts, our journey began with a shared belief: that electronics should seamlessly integrate into our lives, making them simpler, smarter, and more enjoyable.
            </p>
            <p>
              Inspired by Dieter Rams&apos; ten principles for good design, we focus on eliminating the superfluous so that the essential may speak.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Craftsmanship */}
      <ScrollReveal className="mt-16 pt-12 border-t border-[#E5E5EA]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-[#111]">Craftsmanship</h2>
            <span className="text-xs text-[#8E8E93] font-mono mt-1 block">
              QUALITY & LONGEVITY
            </span>
          </div>
          <div className="md:col-span-2 space-y-6 text-[#555] text-sm sm:text-base leading-relaxed">
            <p>
              At Dieter, we don’t just sell electronics; we curate experiences. We believe that technology should be an enabler, a tool that empowers you to achieve more, explore new horizons, and connect with the world around you.
            </p>
            <p>
              We handpick every product in our catalog, ensuring that it meets our uncompromising standards for quality, design, and usability. Each item in our collection is carefully selected, tested, and vetted to ensure it meets our rigorous standards.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Principles Grid */}
      <ScrollReveal className="mt-20 pt-12 border-t border-[#E5E5EA]">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#8E8E93] uppercase">Core Tenets</span>
          <h2 className="text-2xl font-semibold text-[#111] mt-2">
            Ten Principles for Good Design
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { num: '01', title: 'Innovative', desc: 'Possibilities for innovation are not exhausted.' },
            { num: '02', title: 'Useful', desc: 'A product is bought to be used and satisfy functional criteria.' },
            { num: '03', title: 'Aesthetic', desc: 'Only well-executed objects can be truly beautiful.' },
            { num: '04', title: 'Understandable', desc: 'Clarifies the structure of the product intuitively.' },
            { num: '05', title: 'Unobtrusive', desc: 'Products fulfilling a purpose are like tools, not art.' },
            { num: '06', title: 'Honest', desc: 'Does not manipulate the consumer with false promises.' },
            { num: '07', title: 'Long-lasting', desc: 'Avoids being fashionable and therefore never appears antiquated.' },
            { num: '08', title: 'Thorough', desc: 'Nothing must be arbitrary or left to chance.' },
            { num: '09', title: 'Eco-Friendly', desc: 'Conserves resources and minimizes physical pollution.' },
            { num: '10', title: 'As Little As Possible', desc: 'Less, but better. Concentrated on essential aspects.' },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-[#F6F6F7] p-5 rounded-lg flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-xs font-mono text-[#8E8E93]">{item.num}</span>
              <div>
                <h3 className="text-sm font-semibold text-[#111]">{item.title}</h3>
                <p className="text-[11px] text-[#666] mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA */}
      <div className="mt-20 text-center py-16 bg-[#F6F6F7] rounded-xl px-6">
        <h2 className="text-2xl font-semibold text-[#111]">Explore the Collection</h2>
        <p className="text-sm text-[#666] mt-2 max-w-md mx-auto">
          Discover our range of tactile radios, speakers, consoles, and calculators.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#111] text-white text-xs font-medium hover:bg-[#333] transition"
        >
          <span>View all products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
