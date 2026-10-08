export default function TechMarquee() {
  const items = [
    'Shopify Liquid', 'Hydrogen', 'Next.js', 'GraphQL', 'Storefront API', 
    'Shopify Plus', 'Checkout Extensions', 'Shopify Functions', 'GSAP', 
    'Tailwind CSS'
  ];
  
  // Duplicate a few times to ensure a smooth continuous loop without gap
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 bg-primary/5 border-y border-primary/10">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {duplicatedItems.map((t, i) => (
          <span key={i} className="text-xs font-semibold text-primary/60 uppercase tracking-widest">
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  );
}
