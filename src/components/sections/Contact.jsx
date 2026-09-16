export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[#060606] overflow-hidden">

      
      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(149,191,71,0.07)_0%,transparent_65%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left — copy */}
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Let&apos;s Connect</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
              Ready to Build
              <br/>
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Whether you need a brand new Shopify store, a performance overhaul, or a custom app — I&apos;m here. Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              <a href="mailto:official.devboshunia@gmail.com" className="flex items-center gap-4 group card-glass rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">official.devboshunia@gmail.com</p>
                </div>
              </a>
              <a href="tel:01568617780" className="flex items-center gap-4 group card-glass rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">Phone</p>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">01568617780</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="card-glass rounded-3xl p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-medium">Email Address</label>
                <input type="email" placeholder="john@brand.com" className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-medium">Project Type</label>
                <select className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select a service...</option>
                  <option>Custom Theme Development</option>
                  <option>Performance Optimization</option>
                  <option>Store Migration</option>
                  <option>Dropshipping / Multichannel</option>
                  <option>Headless / Hydrogen</option>
                  <option>App Integration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-medium">Tell Me About Your Project</label>
                <textarea rows="4" placeholder="Share your goals, timeline, and any details..." className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-sm py-4">
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
