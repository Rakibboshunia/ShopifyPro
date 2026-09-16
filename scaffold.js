const fs = require('fs');
const path = require('path');

const components = {
  'Services.jsx': `
export default function Services() {
  const services = [
    { title: 'Shopify Theme Development', desc: 'Custom pixel-perfect theme development and optimization for high-performing, unique Shopify stores.' },
    { title: 'Custom App Integration', desc: 'Developing and integrating custom private apps to extend your Shopify store functionality.' },
    { title: 'Store Migration to Shopify', desc: 'Seamlessly migrate your existing store from other platforms to Shopify with zero data loss.' },
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">{srv.title}</h3>
              <p className="text-gray-400 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'FeaturedProjects.jsx': `
export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="h-64 bg-gray-800 w-full animate-pulse flex items-center justify-center">
                <span className="text-gray-500">Project Image Placeholder</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Premium Shopify Plus Brand</h3>
                <p className="text-gray-400 mb-6">A complete overhaul of a Shopify Plus store, increasing conversion rates by 45%.</p>
                <button className="text-primary font-semibold hover:text-white transition-colors">View Case Study &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'AllProjects.jsx': `
export default function AllProjects() {
  return (
    <section id="all-projects" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Want to see more?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Explore my full archive of Shopify builds, ranging from small boutiques to enterprise-level Shopify Plus platforms.</p>
        <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-primary text-white rounded-lg font-semibold transition-all hover:bg-primary/10">
          View All Projects
        </button>
      </div>
    </section>
  );
}`,
  'WhatICanDo.jsx': `
export default function WhatICanDo() {
  return (
    <section id="what-i-can-do" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">What I Can Do <span className="text-primary">For You</span></h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><span className="text-primary text-xl">✓</span> Pixel-perfect Figma to Shopify Theme conversions</li>
              <li className="flex items-center gap-3"><span className="text-primary text-xl">✓</span> Headless Shopify architectures (Hydrogen)</li>
              <li className="flex items-center gap-3"><span className="text-primary text-xl">✓</span> Page speed and Core Web Vitals optimization</li>
              <li className="flex items-center gap-3"><span className="text-primary text-xl">✓</span> Shopify App integrations and custom functionality</li>
            </ul>
          </div>
          <div className="flex-1 w-full h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-black border border-white/10 flex items-center justify-center">
            <span className="text-gray-500 font-mono text-sm">&lt;Visual Showcase&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  'Workflow.jsx': `
export default function Workflow() {
  const steps = ['Discovery', 'Strategy & Design', 'Development', 'Testing & Launch'];
  return (
    <section id="workflow" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">My <span className="text-primary">Workflow</span></h2>
        <div className="flex flex-col md:flex-row gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 p-6 rounded-xl bg-white/5 border border-white/10 relative z-10">
              <span className="text-4xl font-black text-white/10 absolute top-4 right-4">0{i+1}</span>
              <h3 className="text-xl font-bold mb-2 relative z-10">{step}</h3>
              <p className="text-gray-500 relative z-10">Streamlined process ensuring on-time delivery and maximum ROI.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'Technologies.jsx': `
export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Powered by Modern Tech</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Shopify Liquid', 'React.js', 'Next.js', 'Hydrogen', 'Tailwind CSS', 'GraphQL', 'Storefront API', 'Node.js'].map((tech, i) => (
            <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'Testimonials.jsx': `
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Client <span className="text-primary">Results</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex text-primary mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6">"An absolute lifesaver. Delivered a high-converting Shopify store ahead of schedule and the code quality was impeccable."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-gray-500">Founder, E-Com Brand</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'AboutMe.jsx': `
export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">About <span className="text-primary">Me</span></h2>
        <p className="text-xl text-gray-400 leading-relaxed mb-8">
          I am a passionate Shopify developer with a deep understanding of both design and code. 
          With years of exclusive experience in the Shopify ecosystem, I don't just build websites; 
          I build scalable digital businesses that convert visitors into loyal customers.
        </p>
      </div>
    </section>
  );
}`,
  'FAQ.jsx': `
export default function FAQ() {
  const faqs = [
    { q: 'Do you work with custom designs?', a: 'Yes, I can convert any Figma, XD, or Sketch design into a fully functional Shopify theme.' },
    { q: 'What is your typical turnaround time?', a: 'Depending on the project scope, a standard custom Shopify store takes between 2 to 4 weeks.' },
  ];
  return (
    <section id="faq" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked <span className="text-primary">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'Contact.jsx': `
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(149,191,71,0.1)_0%,transparent_70%)] rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Build Something <span className="text-primary">Great</span></h2>
        <p className="text-xl text-gray-400 mb-12">Available for freelance Shopify opportunities. Let's discuss your next project.</p>
        
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
          </div>
          <textarea placeholder="Tell me about your project" rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
          <button className="w-full py-4 bg-primary text-black rounded-lg font-bold text-lg hover:bg-primaryHover transition-colors shadow-[0_4px_20px_rgba(149,191,71,0.4)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}`
};

const dir = path.join(__dirname, 'src', 'components', 'sections');

for (const [file, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(dir, file), content.trim());
}
console.log('All components successfully scaffolded for Shopify only.');
