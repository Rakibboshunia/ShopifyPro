export default function WhatICanDo() {
  const capabilities = [
    { title: 'Figma → Shopify', desc: 'Any design, pixel-perfect in Liquid.' },
    { title: 'Dropshipping & Marketplaces', desc: 'Automated setups, eBay & Etsy sync.' },
    { title: 'Speed Optimization', desc: '90+ PageSpeed on every build.' },
    { title: 'Checkout Extensions', desc: 'Custom checkout UI components.' },
    { title: 'Shopify Functions', desc: 'Custom discount & shipping logic.' },
    { title: 'Multi-region & B2B', desc: 'Global markets and wholesale.' },
  ];

  return (
    <section id="what-i-can-do" className="relative py-20 bg-[#060606] overflow-hidden">

      
      {/* Decorative orb */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(149,191,71,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
              What I Bring
              <br/>
              <span className="gradient-text">To Every Project</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              I don't just write code — I understand e-commerce. From UX decisions that reduce cart abandonment to technical optimizations that boost your Google rankings, I bring both craft and strategy.
            </p>
            <a href="#contact" className="btn-primary">Start a Conversation</a>
          </div>

          {/* Right — capability grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="group card-glass rounded-xl p-5 card-hover">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full border border-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <svg className="w-3 h-3 text-primary group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-1">{cap.title}</h4>
                    <p className="text-xs text-gray-600">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
