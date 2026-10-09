export default function Testimonials() {
  const baseTestimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder · LuxeWear',
      avatar: 'SM',
      quote: 'Genuinely one of the best investments we made. Our Shopify store went from an embarrassment to a conversion machine. 48% CVR lift in the first month.',
      platform: 'Upwork',
      rating: 5,
    },
    {
      name: 'James Okonkwo',
      role: 'CEO · VitalRoot',
      avatar: 'JO',
      quote: 'The Hydrogen build was flawless. Lightning-fast, pixel-perfect, and the custom subscription system has been running without a single issue for 8 months.',
      platform: 'Direct Client',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Head of E-Com · OrganicCo',
      avatar: 'PS',
      quote: 'Our WooCommerce to Shopify migration was seamless. Zero downtime, zero data issues, and we actually gained SEO authority during the transition.',
      platform: 'Toptal',
      rating: 5,
    },
  ];

  // Duplicate the array ONCE to create a perfect 50% translation infinite loop
  const testimonials = [...baseTestimonials, ...baseTestimonials];

  return (
    <section id="testimonials" className="relative py-12 bg-[#080808] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(149,191,71,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-10 text-center px-6">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Social Proof</p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
            What Clients Say
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex gap-6 py-4 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
            {testimonials.map((t, i) => (
              <div key={i} className="w-[350px] md:w-[400px] card-glass rounded-2xl p-7 flex flex-col whitespace-normal">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 border border-white/5 px-2 py-1 rounded-md ml-2 shrink-0">{t.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
