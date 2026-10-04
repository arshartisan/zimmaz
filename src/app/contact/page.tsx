'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Mail, MapPin, Clock, Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 md:py-16">
      <ScrollReveal className="max-w-2xl">
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E93] mb-3 block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111]">
          Here we are. Let us know.
        </h1>
        <p className="text-sm sm:text-base text-[#666] mt-4">
          Whether you have a technical inquiry, wholesale request, or just want to discuss minimalist hardware, our studio team is here.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 pt-10 border-t border-[#E5E5EA]">
        {/* Left Column: Studio info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-[#8E8E93] block mb-2">
              Studio Location
            </span>
            <div className="flex items-start gap-3 text-sm text-[#111]">
              <MapPin className="w-4 h-4 text-[#8E8E93] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Dieter Hardware Studio</p>
                <p className="text-[#666] mt-0.5">Keizersgracht 555</p>
                <p className="text-[#666]">1017 DR Amsterdam, Netherlands</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E5EA] pt-6">
            <span className="text-xs uppercase font-mono tracking-wider text-[#8E8E93] block mb-2">
              Direct Inquiries
            </span>
            <div className="flex items-center gap-3 text-sm text-[#111]">
              <Mail className="w-4 h-4 text-[#8E8E93] flex-shrink-0" />
              <a
                href="mailto:hi@dieterstore.com"
                className="hover:underline text-[#111]"
              >
                hi@dieterstore.com
              </a>
            </div>
          </div>

          <div className="border-t border-[#E5E5EA] pt-6">
            <span className="text-xs uppercase font-mono tracking-wider text-[#8E8E93] block mb-2">
              Hours & Status
            </span>
            <div className="flex items-center gap-3 text-sm text-[#111]">
              <Clock className="w-4 h-4 text-[#8E8E93] flex-shrink-0" />
              <span className="text-[#666]">Mon–Fri: 09:00 – 18:00 CET</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#16A34A]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span>Studio Desk Online</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#F6F6F7] p-8 md:p-10 rounded-2xl">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#16A34A] shadow-sm mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#111]">
                Thank you for your message!
              </h3>
              <p className="text-xs text-[#666] mt-2 max-w-sm">
                We have received your note and will respond within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-medium text-[#111] underline hover:opacity-80"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#111] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white border border-[#E5E5EA] px-4 py-3 rounded-lg text-sm text-[#111] placeholder:text-[#8E8E93] outline-none focus:border-[#111] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#111] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white border border-[#E5E5EA] px-4 py-3 rounded-lg text-sm text-[#111] placeholder:text-[#8E8E93] outline-none focus:border-[#111] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#111] mb-1.5">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-white border border-[#E5E5EA] px-4 py-3 rounded-lg text-sm text-[#111] outline-none focus:border-[#111] transition"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Order Status">Order Status & Shipping</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Press & Wholesale">Press & Wholesale</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#111] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white border border-[#E5E5EA] px-4 py-3 rounded-lg text-sm text-[#111] placeholder:text-[#8E8E93] outline-none focus:border-[#111] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#111] text-white rounded-full text-sm font-medium hover:bg-[#333] transition mt-2 shadow-sm"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
