'use client';
import { useEffect, useRef } from 'react';

export default function Workflow() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-step').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: '01',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Discovery & Brief',
      desc: 'We kick off with a deep-dive call. I learn about your brand, goals, target audience, and competitors to build a solid, clear project brief.',
      duration: '1–2 days',
    },
    {
      num: '02',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Strategy & Design',
      desc: 'UX planning, wireframes, and design system setup. Every layout decision is backed by CRO best practices — designed to convert visitors into buyers.',
      duration: '3–5 days',
    },
    {
      num: '03',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Development',
      desc: 'Clean, documented Shopify Liquid or Hydrogen code. Components are built mobile-first with speed baked in from day one — no shortcuts, no bloat.',
      duration: '7–14 days',
    },
    {
      num: '04',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'QA & Testing',
      desc: 'Cross-browser and device testing, accessibility review, and full Lighthouse performance audit. Nothing ships until it\'s perfect.',
      duration: '2–3 days',
    },
    {
      num: '05',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Launch & Handoff',
      desc: 'Go-live support, a Shopify training session for your team, and full documentation. You walk away owning your store — completely.',
      duration: '1 day',
    },
  ];

  return (
    <>
      <style>{`
        .reveal-step {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal-step.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        .step-card {
          background: #0c0c0c;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 24px 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          position: relative;
          transition: border-color 0.35s, background 0.35s;
        }
        .step-card:hover {
          border-color: rgba(149,191,71,0.25);
          background: rgba(149,191,71,0.03);
        }
        .step-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(149,191,71,0.08);
          border: 1px solid rgba(149,191,71,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #95BF47;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .step-card:hover .step-icon {
          background: #95BF47;
          border-color: #95BF47;
          color: #000;
        }
        .step-num {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: rgba(149,191,71,0.5);
          margin-bottom: 4px;
        }
        .duration-badge {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          flex-shrink: 0;
          height: fit-content;
        }
        .connector {
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, rgba(149,191,71,0.3), rgba(149,191,71,0.05));
          margin: 0 auto;
        }
      `}</style>

      <section
        id="workflow"
        ref={sectionRef}
        className="relative py-20 bg-[#080808] overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(149,191,71,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="mb-12 reveal-step">
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Process</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
                  How I <span className="gradient-text">Work</span>
                </h2>
                <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
                  A clear, proven process designed to deliver on time, on brief, and above expectations — every time.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Avg. delivery: <strong className="text-white ml-1">14–25 days</strong>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="step-card reveal-step">
                  {/* Icon */}
                  <div className="step-icon">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 min-w-0">
                    <div>
                      <p className="step-num">{step.num}</p>
                      <h3 className="font-bold text-base text-white mb-1.5">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    <span className="duration-badge self-start">{step.duration}</span>
                  </div>
                </div>

                {/* Connector between cards */}
                {i < steps.length - 1 && (
                  <div className="connector reveal-step" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 reveal-step">
            <div className="card-glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-lg mb-1">Ready to get started?</h3>
                <p className="text-gray-500 text-sm">Let&apos;s build something great together.</p>
              </div>
              <a
                href="https://wa.me/8801779296092"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Start a Project
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
