export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Custom Theme Development',
      desc: 'Pixel-perfect Shopify themes built from scratch or converted from your Figma/XD designs. Fast, responsive, and brand-perfect.',
      tags: ['Liquid', 'Shopify CLI', 'Figma'],
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      desc: 'Sub-2s load times, 90+ PageSpeed scores. We optimize every asset, script, and render path so your store never loses a sale to speed.',
      tags: ['Core Web Vitals', 'Lighthouse', 'GTMetrix'],
    },
    {
      icon: '🔌',
      title: 'App & API Integration',
      desc: 'Custom Shopify apps, third-party integrations (ERP, CRM, fulfillment), and Storefront/Admin API implementations.',
      tags: ['Shopify APIs', 'Node.js', 'GraphQL'],
    },
    {
      icon: '📦',
      title: 'Dropshipping & Multichannel',
      desc: 'Complete automated dropshipping setups. Seamlessly integrate your Shopify store with eBay, Etsy, AliExpress, and other marketplaces.',
      tags: ['Dropshipping', 'eBay', 'Etsy'],
    },
    {
      icon: '🔄',
      title: 'Store Migration',
      desc: 'Migrate from WooCommerce, Magento, BigCommerce, or any platform to Shopify with zero downtime and zero data loss.',
      tags: ['Data Migration', 'SEO Preservation', 'Testing'],
    },
    {
      icon: '💼',
      title: 'Shopify Plus',
      desc: 'Enterprise-grade Shopify Plus solutions — multi-store setups, B2B wholesale, custom checkout scripts, and Launchpad automation.',
      tags: ['Shopify Plus', 'Checkout Extensions', 'Scripts'],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-[#080808] overflow-hidden">

      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(149,191,71,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">What I Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
            Services Built for
            <br/>
            <span className="gradient-text">Shopify Excellence</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((srv, i) => (
            <div
              key={i}
              className="card-glass card-hover rounded-2xl p-7 group cursor-default"
            >
              <div className="text-3xl mb-5">{srv.icon}</div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{srv.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{srv.desc}</p>
              <div className="flex flex-wrap gap-2">
                {srv.tags.map((tag, j) => (
                  <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    {tag}
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
