export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Custom Shopify Development',
      desc: 'End-to-end bespoke Shopify store creation tailored to your unique brand requirements and business goals.',
      tags: ['Shopify CLI', 'React', 'Hydrogen'],
    },
    {
      icon: '🎨',
      title: 'Liquid & Theme Customization',
      desc: 'Pixel-perfect modifications to existing themes or building completely new ones from Figma/XD designs.',
      tags: ['Liquid', 'CSS/JS', 'Figma'],
    },
    {
      icon: '🔌',
      title: 'Shopify API & App Integration',
      desc: 'Connecting third-party services, ERPs, CRMs, and building custom Shopify apps for extended functionality.',
      tags: ['GraphQL', 'REST API', 'Node.js'],
    },
    {
      icon: '📈',
      title: 'CRO & Store Optimization',
      desc: 'Analyzing user behavior, optimizing the purchase funnel, and implementing A/B tests to improve conversion rates and maximize sales.',
      tags: ['A/B Testing', 'Analytics', 'UX/UI'],
    },
    {
      icon: '⚡',
      title: 'SEO & Speed Optimization',
      desc: 'Achieving sub-2s load times and optimizing on-page SEO to drive organic traffic and ensure your store never loses a sale to speed.',
      tags: ['Core Web Vitals', 'Lighthouse', 'SEO'],
    },
    {
      icon: '⚙️',
      title: 'Automation & Custom Features',
      desc: 'Automating business processes, implementing custom checkout scripts, and developing tailored features for your store.',
      tags: ['Flow', 'Scripts', 'Webhooks'],
    },
    {
      icon: '📦',
      title: 'Dropshipping & Product Research',
      desc: 'Setting up complete automated dropshipping channels and researching high-converting, winning products for your niche.',
      tags: ['DSers', 'AliExpress', 'Research'],
    },
    {
      icon: '🚚',
      title: 'Supplier Sourcing & Fulfillment',
      desc: 'Connecting with reliable suppliers, negotiating terms, and optimizing order fulfillment processes for smooth operations.',
      tags: ['Logistics', 'Supply Chain', '3PL'],
    },
  ];

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
            <div
              key={i}
              className="card-glass card-hover rounded-2xl p-5 sm:p-7 group cursor-default"
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
