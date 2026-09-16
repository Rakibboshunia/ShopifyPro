export default function FeaturedProjects() {
  const projects = [
    {
      label: 'Shopify · Retail Store',
      title: 'Pure M Store',
      desc: 'A complete Shopify build for a modern retail brand. Focus was on clean aesthetics, mobile responsiveness, and an optimized checkout flow.',
      metrics: [
        { val: 'Live', label: 'Status' },
        { val: 'Responsive', label: 'Design' },
        { val: 'Custom', label: 'Theme' },
      ],
      color: 'from-primary/20 to-transparent',
      url: 'https://puremstore.com/',
    },
    {
      label: 'Shopify · E-commerce',
      title: 'Amaf Shop',
      desc: 'A versatile Shopify setup designed for rapid product discovery and high conversion. Configured for scaling inventory and seamless user experience.',
      metrics: [
        { val: 'Fast', label: 'Performance' },
        { val: 'Optimized', label: 'UX' },
        { val: 'Integrated', label: 'Apps' },
      ],
      color: 'from-blue-500/15 to-transparent',
      url: 'https://amaf-shop-2.myshopify.com/',
    },
  ];

  return (
    <section id="featured-projects" className="relative py-20 bg-[#060606] overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <a href="#all-projects" className="btn-ghost self-start md:self-auto text-sm">
            View all projects →
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/5 bg-[#0e0e0e] hover:border-primary/20 transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative grid md:grid-cols-2 gap-0">
                {/* Text side */}
                <div className="p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-4 block">{p.label}</span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                  <div className="mt-8">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                      Visit Store
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  </div>
                </div>

                {/* Metrics side */}
                <div className="flex flex-col justify-center p-10 lg:p-14 md:border-l border-white/5 gap-6">
                  {p.metrics.map((m, j) => (
                    <div key={j} className="flex items-center gap-6">
                      <span className="text-4xl font-black text-primary font-display">{m.val}</span>
                      <span className="text-sm text-gray-500 font-medium">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
