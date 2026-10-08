
export default function Contact() {
  return (
    <section id="contact" className="relative py-12 bg-[#060606] overflow-hidden">


      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(149,191,71,0.07)_0%,transparent_65%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Let&apos;s Connect</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Whether you need a brand new Shopify store, a performance overhaul, or a custom app — I&apos;m here. Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              <a href="mailto:official.devboshunia@gmail.com" className="flex items-center gap-4 group card-glass rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">official.devboshunia@gmail.com</p>
                </div>
              </a>
              <a href="tel:01568617780" className="flex items-center gap-4 group card-glass rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">Phone</p>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">01779296092</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — WhatsApp CTA */}
          <div className="card-glass rounded-3xl p-8 flex flex-col justify-center items-center text-center h-full min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-6 glow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Fastest Way to Reach Me</h3>
            <p className="text-gray-400 text-sm mb-8 max-w-sm">
              Skip the forms and emails. Send me a message directly on WhatsApp and let&apos;s start discussing your project right away!
            </p>
            <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-primary w-full max-w-xs justify-center py-4 bg-[#25D366] text-white hover:bg-[#20b858]">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
