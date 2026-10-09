import { services } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  // Await the params object before accessing its properties
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | ShopifyDev`,
    description: service.desc,
  };
}

export default async function ServiceDetail({ params }) {
  // Await the params object before accessing its properties
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back button */}
        <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Services
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-5xl mb-8">
            {service.icon}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            {service.desc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-white/10">
          {service.tags.map((tag, i) => (
            <span key={i} className="skill-tag px-4 py-2 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Details & Features */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">About this service</h2>
            <div className="prose prose-invert prose-lg text-gray-400 max-w-none">
              <p className="leading-relaxed">
                {service.details}
              </p>
            </div>
            
            <div className="mt-12">
              <a href="https://wa.me/8801779296092" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                Discuss Your Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <div className="card-glass p-6 rounded-2xl sticky top-32">
              <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Key Features</h3>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
