'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-about').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const facts = [
    { val: '5+', label: 'Years Experience' },
    { val: '50+', label: 'Stores Delivered' },
    { val: '$2M+', label: 'Revenue Generated' },
  ];

  const skills = [
    'Custom Theme Dev',
    'Liquid Templating',
    'Figma → Shopify',
    'App Integration',
    'Speed Optimization',
    'Dropshipping Setup',
    'Shopify Plus / B2B',
    'SEO & CRO',
  ];

  return (
    <>
      <style>{`
        .reveal-about {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal-about.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(149,191,71,0.2);
          color: rgba(149,191,71,0.85);
          background: rgba(149,191,71,0.06);
          transition: background 0.25s, border-color 0.25s;
        }
        .skill-tag:hover {
          background: rgba(149,191,71,0.14);
          border-color: rgba(149,191,71,0.45);
        }
        .skill-tag::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #95BF47;
          flex-shrink: 0;
        }
        .photo-frame {
          position: relative;
        }
        .photo-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(149,191,71,0.5), transparent 60%);
          z-index: 0;
        }
        .photo-inner {
          position: relative;
          z-index: 1;
          border-radius: 26px;
          overflow: hidden;
          background: #111;
        }
        .fact-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 16px 12px;
          text-align: center;
          transition: border-color 0.3s, background 0.3s;
        }
        .fact-card:hover {
          border-color: rgba(149,191,71,0.3);
          background: rgba(149,191,71,0.04);
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="relative py-20 bg-[#060606] overflow-hidden"
      >
        {/* Ambient orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(149,191,71,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(149,191,71,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT — Photo */}
            <div className="reveal-about flex justify-center md:justify-start">
              <div className="relative w-full max-w-[360px]">
                {/* Decorative rotate background */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/20 to-transparent -rotate-3 scale-[1.04] pointer-events-none" />

                <div className="photo-frame">
                  <div className="photo-inner aspect-[4/5]">
                    <Image
                      src="/Boshunia.png"
                      alt="Md Al Rakeb Rasel Boshunia — Shopify Expert Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating available badge */}
                <div className="absolute -bottom-5 -right-5 card-glass rounded-2xl px-5 py-4 glow-sm z-10">
                  <p className="text-xs text-gray-500 mb-1">Currently</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                    <span className="text-sm font-bold text-white whitespace-nowrap">Open to Projects</span>
                  </div>
                </div>

                {/* Floating experience badge */}
                <div className="absolute -top-4 -left-4 card-glass rounded-2xl px-4 py-3 z-10">
                  <p className="text-2xl font-black text-primary font-display leading-none">5+</p>
                  <p className="text-xs text-gray-500 mt-0.5">Years in Shopify</p>
                </div>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div>
              <div className="reveal-about">
                <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">About Me</p>
                <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-2">
                  Md Al Rakeb Rasel
                </h2>
                <h3 className="font-display text-xl font-bold mb-6">
                  <span className="gradient-text">Boshunia</span>
                  <span className="text-gray-600 font-normal text-base ml-3">— Shopify Expert Developer</span>
                </h3>
              </div>

              <div className="reveal-about space-y-4 text-gray-400 text-sm leading-relaxed mb-6">
                <p>
                  With <strong className="text-white">5+ years</strong> deep inside the Shopify ecosystem, I&apos;ve gone far beyond writing code — I understand what makes an e-commerce store actually <em className="text-primary not-italic">convert</em>. From pixel-perfect Liquid themes to complex B2B builds, I bring both technical depth and business thinking to every project.
                </p>
                <p>
                  I don&apos;t just deliver files — I deliver <strong className="text-white">outcomes</strong>. Whether you&apos;re launching your first store or scaling an enterprise brand, I&apos;m focused on one thing: growing your revenue through great Shopify development.
                </p>
              </div>

              {/* Skills */}
              <div className="reveal-about mb-8">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-600 mb-3">Core Skills</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Facts */}
              <div className="reveal-about grid grid-cols-3 gap-3 mb-8">
                {facts.map((f, i) => (
                  <div key={i} className="fact-card">
                    <p className="text-2xl font-black text-primary font-display">{f.val}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{f.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="reveal-about flex flex-wrap gap-4">
                <a
                  href="https://wa.me/8801779296092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hire Me
                </a>
                <a href="#" className="btn-ghost">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
