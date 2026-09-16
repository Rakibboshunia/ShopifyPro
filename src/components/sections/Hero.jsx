import Image from 'next/image';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'Stores Launched' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '3x', label: 'Avg. Revenue Growth' },
    { value: '5★', label: 'Upwork Rating' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(149,191,71,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(149,191,71,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(149,191,71,0.1)_0%,transparent_65%)] animate-pulse-glow pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Available for New Projects
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5">
              I Build Shopify Stores
              <br/>
              <span className="gradient-text">That Actually Convert</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Premium, performance-first Shopify development — from custom themes and Liquid to Hydrogen. Every pixel crafted to turn visitors into customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#featured-projects" className="btn-primary">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Start a Project
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#0e0e0e] p-4 flex flex-col items-center gap-1 hover:bg-primary/5 transition-colors">
                  <span className="text-2xl font-black text-primary">{stat.value}</span>
                  <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(149,191,71,0.15)_0%,transparent_70%)] blur-2xl"></div>
            
            <div className="relative w-full max-w-lg animate-float">
              <Image
                src="/shopify-marketing-banner.webp"
                alt="Shopify Expert — Premium Store Development"
                width={560}
                height={500}
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(149,191,71,0.25)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
