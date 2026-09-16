'use client';
import { useState } from 'react';

const faqs = [
  { q: 'How much does a custom Shopify theme cost?', a: 'Custom themes range from $1,500 to $8,000 depending on complexity, number of sections, and features. I provide detailed quotes after understanding your requirements on a discovery call.' },
  { q: 'How long does a typical Shopify project take?', a: 'A standard custom theme takes 3–5 weeks. A full Shopify Plus build with custom functionality typically runs 6–10 weeks. Timelines are shared upfront in your project proposal.' },
  { q: 'Do you convert Figma designs to Shopify?', a: 'Yes — this is one of my most requested services. I can convert any Figma, Adobe XD, or even a Sketch design into a production-ready Shopify theme with full Online Store 2.0 support.' },
  { q: 'Can you work with my existing Shopify store?', a: 'Absolutely. I can add features, fix bugs, optimize performance, or do a full redesign on any existing Shopify store without disrupting your live sales.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes. I offer monthly retainer packages for stores that need regular updates, new sections, or dedicated developer support.' },
  { q: 'Can you set up Dropshipping & Multichannel?', a: 'Yes, I can fully automate your Shopify store with AliExpress/DSers, or sync your inventory and orders seamlessly with marketplaces like eBay and Etsy.' },
  { q: 'How do we get started?', a: 'Just fill out the contact form below or email me directly. I respond within 24 hours and we\'ll schedule a free 30-minute discovery call.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative py-20 bg-[#080808] overflow-hidden">


      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
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
