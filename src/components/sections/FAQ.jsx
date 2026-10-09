'use client';
import { useState } from 'react';

const faqs = [
  { q: 'Will my store be fully mobile-friendly and fast?', a: 'Absolutely! I build mobile-first, highly responsive stores optimized for speed. Every project undergoes rigorous testing to ensure sub-2 second load times and top scores on Google PageSpeed Insights.' },
  { q: 'Can you redesign my existing Shopify store without losing sales?', a: 'Yes, I can develop a new theme in the background while your current store remains fully operational. Once everything is perfect and approved, we seamlessly publish the new theme with zero downtime.' },
  { q: 'What do I need to provide before we start the project?', a: 'Usually, I need your brand assets (logo, colors, fonts), a general idea of your required features, and your product details. If you have a Figma or XD design, you can share that as well.' },
  { q: 'Do you help with adding products and installing apps?', a: 'Yes! I assist with initial product uploads, organizing collections, and integrating necessary third-party apps (like reviews, email marketing, or dropshipping tools) to make sure your store is ready to sell.' },
  { q: 'Do you provide support after the store is launched?', a: 'Of course. I offer 15 to 30 days of free post-launch support to fix any bugs or issues. For ongoing updates or new features, I also offer monthly maintenance packages.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative py-16 md:py-20 bg-[#080808] overflow-hidden">


      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-primary/30 bg-primary/5' : 'border-white/5 bg-[#0e0e0e] hover:border-white/10'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${open === i ? 'border-primary bg-primary text-black rotate-45' : 'border-white/10 text-gray-500'}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
                </span>
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
