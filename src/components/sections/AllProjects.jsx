export default function AllProjects() {
  const projects = [
    { title: 'OrganicCo', type: 'Custom Theme', platform: 'Shopify' },
    { title: 'UrbanKicks', type: 'Shopify Plus', platform: 'Shopify Plus' },
    { title: 'GlowSkin Co.', type: 'Migration + Redesign', platform: 'Shopify' },
    { title: 'ToolsCraft', type: 'Headless (Hydrogen)', platform: 'Shopify' },
    { title: 'PetLuxe', type: 'App Integration', platform: 'Shopify' },
    { title: 'CityRoast Coffee', type: 'Subscription Build', platform: 'Shopify' },
  ];

  return (
    <section id="all-projects" className="relative py-20 bg-[#080808] overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">More Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">All Projects</h2>
        </div>

        <div className="space-y-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {projects.map((p, i) => (
            <div key={i} className="group flex items-center justify-between px-7 py-5 bg-[#0a0a0a] hover:bg-primary/5 transition-all cursor-pointer border-b border-white/5 last:border-b-0">
              <div className="flex items-center gap-6">
                <span className="text-2xl font-black text-white/10 font-display w-8">{String(i+1).padStart(2,'0')}</span>
                <div>
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-xs text-gray-600">{p.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden sm:block text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500 border border-white/5">{p.platform}</span>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors -translate-x-1 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
