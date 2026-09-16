export default function Footer() {
  const links = {
    Navigation: ['Services', 'Projects', 'Workflow', 'About', 'FAQ'],
    Services: ['Custom Theme Dev', 'Performance', 'Store Migration', 'Hydrogen', 'Shopify Plus'],
    Connect: ['Upwork Profile', 'LinkedIn', 'GitHub', 'Twitter / X', 'Email Me'],
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-black text-sm">S</div>
              <span className="text-white font-bold text-lg tracking-tight">Shopify<span className="text-primary">Dev</span></span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-4">
              Crafting premium, high-converting Shopify experiences for ambitious brands worldwide.
            </p>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-medium">Available for projects</span>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <p>&copy; {new Date().getFullYear()} ShopifyDev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
