import Link from 'next/link';
import { services } from '@/data/services';

export default function Services() {

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
            <Link href={`/services/${srv.slug}`} key={i} className="block group">
              <div className="card-glass card-hover rounded-2xl p-5 sm:p-7 h-full flex flex-col">
                <div className="text-3xl mb-5">{srv.icon}</div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                  {srv.title}
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
