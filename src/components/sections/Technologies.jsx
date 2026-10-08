export default function Technologies() {
  const techGroups = [
    {
      category: 'Shopify Core',
      items: ['Shopify Liquid', 'Dawn / OS 2.0', 'Shopify CLI', 'Metafields', 'Shopify Functions', 'Checkout Extensions'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Hydrogen', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'GraphQL', 'Storefront API', 'Admin API', 'REST APIs', 'Webhooks'],
    },
    {
      category: 'Tools & Workflow',
      items: ['Figma', 'Git', 'DSers / Oberlo', 'eBay / Etsy Sync', 'Shopify Partners', 'Klaviyo'],
    },
  ];

  return (
    <section id="technologies" className="relative py-12 bg-[#060606] overflow-hidden">




      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="mb-10">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Tech Stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
            Technologies I Master
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techGroups.map((group, i) => (
            <div key={i} className="card-glass rounded-2xl p-7">
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-5">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j} className="text-sm px-4 py-2 rounded-xl bg-white/4 border border-white/8 text-gray-300 hover:border-primary/50 hover:text-primary transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
