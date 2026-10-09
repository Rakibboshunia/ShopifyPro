'use client';
import { useEffect, useRef } from 'react';

export default function FeaturedProjects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      index: '01',
      category: 'Shopify · Retail Store',
      title: 'Pure M Store',
      challenge: 'Brand needed a full Shopify build with a premium feel, mobile-first UX, and a frictionless checkout to reduce drop-off.',
      solution: 'Delivered a custom Liquid theme from Figma, optimized Core Web Vitals, and implemented a streamlined 1-page checkout flow.',
      metrics: [
        { val: '94', unit: '/100', label: 'PageSpeed Score' },
        { val: '2.1', unit: 's', label: 'Load Time' },
        { val: '100%', unit: '', label: 'Mobile Ready' },
      ],
      tags: ['Custom Theme', 'Liquid', 'Checkout UX', 'Figma to Code'],
      accentColor: '#95BF47',
      accentRgb: '149,191,71',
      url: 'https://puremstore.com/',
    },
    {
      index: '02',
      category: 'Shopify · E-commerce',
      title: 'Amaf Shop',
      challenge: 'Client required rapid product discovery, scalable inventory management, and seamless third-party app integration for growth.',
      solution: 'Built a performance-tuned Shopify store with advanced collection filtering, integrated DSers for dropshipping, and custom metafields.',
      metrics: [
        { val: '3×', unit: '', label: 'Faster Navigation' },
        { val: '40+', unit: '', label: 'Products Live' },
        { val: 'A+', unit: '', label: 'UX Rating' },
      ],
      tags: ['App Integration', 'Dropshipping', 'Performance', 'Metafields'],
      accentColor: '#60a5fa',
      accentRgb: '96,165,250',
      url: 'https://amaf-shop-2.myshopify.com/',
    },
  ];

  return (
    <>
      <style>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-card.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .case-card {
          background: #0c0c0c;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          transition: border-color 0.4s ease;
          position: relative;
        }
        .case-card:hover {
          border-color: rgba(var(--card-accent), 0.25);
        }
        .case-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(var(--card-accent), 0.6), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .case-card:hover::before {
          opacity: 1;
        }
        .metric-box {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 20px 18px;
          text-align: center;
          flex: 1;
          transition: background 0.3s, border-color 0.3s;
        }
        .case-card:hover .metric-box {
          border-color: rgba(var(--card-accent), 0.2);
          background: rgba(var(--card-accent), 0.04);
        }
        .index-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
        }
        .tag-chip {
          font-size: 11px;
          padding: 5px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.03);
        }
        .visit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          border: 1px solid rgba(var(--card-accent), 0.35);
          color: rgba(var(--card-accent-full));
          background: rgba(var(--card-accent), 0.08);
        }
        .visit-btn:hover {
          background: rgba(var(--card-accent), 0.18);
          border-color: rgba(var(--card-accent), 0.6);
          transform: translateY(-2px);
        }
        .divider-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin: 20px 0 12px;
        }
        .divider-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }
      `}</style>

      <section
        id="featured-projects"
        ref={sectionRef}
        className="relative py-20 bg-[#060606] overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(149,191,71,0.04)_0%,transparent_65%)] blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal-card">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Portfolio</p>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
                Featured{' '}
                <span className="gradient-text">Case Studies</span>
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
                Real projects, real outcomes. Each store built to solve a specific business challenge.
              </p>
            </div>
            <a href="#all-projects" className="btn-ghost self-start md:self-auto text-sm whitespace-nowrap">
              View all projects →
            </a>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="case-card reveal-card"
                style={{ '--card-accent': p.accentRgb, '--card-accent-full': p.accentColor }}
              >
                <div className="grid lg:grid-cols-[1fr_340px] gap-0">

                  {/* LEFT — Main content */}
                  <div className="p-8 lg:p-10">

                    {/* Top row */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="index-badge">{p.index}</span>
                      <span className="text-xs text-gray-600 tracking-widest uppercase font-semibold">{p.category}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display text-3xl lg:text-4xl font-black mb-6 tracking-tight"
                      style={{ color: p.accentColor }}
                    >
                      {p.title}
                    </h3>

                    {/* Challenge / Solution */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="divider-label">Challenge</div>
                        <p className="text-gray-400 text-sm leading-relaxed">{p.challenge}</p>
                      </div>
                      <div>
                        <div className="divider-label">What I Did</div>
                        <p className="text-gray-400 text-sm leading-relaxed">{p.solution}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tags.map((tag, j) => (
                        <span key={j} className="tag-chip">{tag}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-btn"
                      style={{ color: p.accentColor }}
                    >
                      View Live Store
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>

                  {/* RIGHT — Metrics panel */}
                  <div
                    className="flex flex-col justify-center gap-3 p-8 lg:p-10 lg:border-l"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: p.accentColor, opacity: 0.7 }}>
                      Outcomes
                    </p>
                    {p.metrics.map((m, j) => (
                      <div key={j} className="metric-box">
                        <div className="flex items-baseline justify-center gap-0.5 mb-1">
                          <span className="text-3xl font-black font-display" style={{ color: p.accentColor }}>
                            {m.val}
                          </span>
                          {m.unit && (
                            <span className="text-sm font-bold" style={{ color: p.accentColor, opacity: 0.6 }}>
                              {m.unit}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 font-medium">{m.label}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
