export default function AboutMe() {
  const facts = [
    { val: '5+', label: 'Years in Shopify' },
    { val: '50+', label: 'Stores Delivered' },
    { val: '$2M+', label: 'Client Revenue Generated' },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#060606] overflow-hidden">


      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Avatar block */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent -rotate-2 scale-105"></div>
              <div className="relative rounded-3xl overflow-hidden bg-[#111] border border-white/8 aspect-[4/5] flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 card-glass rounded-2xl px-5 py-4 glow-sm">
                <p className="text-xs text-gray-500 mb-1">Available for work</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-sm font-bold">Open to Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
              A Shopify Developer
              <br/>
              <span className="gradient-text">Who Thinks in Sales</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed mb-8">
              <p>I&apos;ve spent the last 5+ years diving deep into the Shopify ecosystem — writing Liquid, building apps, and obsessing over the details that separate a high-converting store from an average one.</p>
              <p>I believe great e-commerce development is where business strategy meets great design meets clean code. I don&apos;t just deliver files; I deliver outcomes.</p>
            </div>

            {/* Facts */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {facts.map((f, i) => (
                <div key={i} className="card-glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-primary font-display">{f.val}</p>
                  <p className="text-xs text-gray-600 mt-1">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="btn-primary">Hire Me</a>
              <a href="#" className="btn-ghost">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
