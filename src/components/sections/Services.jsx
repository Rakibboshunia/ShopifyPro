'use client';
import { useState, useEffect } from 'react';
import { services } from '@/data/services';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeService]);

  return (
    <section id="services" className="relative py-16 md:py-20 bg-[#080808] overflow-hidden">
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(149,191,71,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">What I Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Services Built for
            <br/>
            <span className="gradient-text">Shopify Excellence</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((srv, i) => (
            <button
              key={i}
              onClick={() => setActiveService(srv)}
              className="block group text-left outline-none"
            >
              <div className="card-glass card-hover rounded-2xl p-5 sm:p-7 h-full flex flex-col">
                <div className="text-3xl mb-5">{srv.icon}</div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                  {srv.title}
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{srv.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {srv.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveService(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl z-10 animate-[float_0.3s_ease-out]">
            {/* Close Button */}
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-6 sm:p-10">
              {/* Header */}
              <div className="flex items-center gap-5 mb-8 border-b border-white/5 pb-8 pr-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl shrink-0">
                  {activeService.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mb-2">{activeService.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeService.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Overview</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {activeService.details}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {activeService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5">
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Need this service?</h4>
                  <p className="text-gray-400 text-sm">Let&apos;s discuss how we can implement this for your store.</p>
                </div>
                <a href="https://wa.me/8801779296092" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap w-full sm:w-auto justify-center">
                  Discuss on WhatsApp
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
