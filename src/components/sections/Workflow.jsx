export default function Workflow() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Brief',
      desc: 'We kick off with a deep-dive call. I learn about your brand, goals, audience, and competitors to build a solid project brief.',
      duration: '1–2 days',
    },
    {
      num: '02',
      title: 'Strategy & Design',
      desc: 'UX planning, wireframes, and design system setup. Every layout decision is backed by conversion rate optimization best practices.',
      duration: '3–5 days',
    },
    {
      num: '03',
      title: 'Development',
      desc: 'Clean, documented Shopify Liquid or Hydrogen code. Components built mobile-first, with speed baked in from day one.',
      duration: '7–14 days',
    },
    {
      num: '04',
      title: 'QA & Testing',
      desc: 'Cross-browser testing, device testing, accessibility review, and performance audits. Nothing ships with issues.',
      duration: '2–3 days',
    },
    {
      num: '05',
      title: 'Launch & Handoff',
      desc: 'Go-live support, Shopify training session, and full documentation. You own your store — fully.',
      duration: '1 day',
    },
  ];

  return (
    <section id="workflow" className="relative py-20 bg-[#080808] overflow-hidden">


      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">How I Work</h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[3.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block"></div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="group relative flex gap-8 items-start card-glass rounded-2xl p-7 card-hover">
                {/* Step number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <span className="text-primary group-hover:text-black font-black text-sm font-display transition-colors">{step.num}</span>
                </div>
                
                <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs text-gray-600 font-medium border border-white/5 px-3 py-1.5 rounded-full bg-white/3 self-start">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
