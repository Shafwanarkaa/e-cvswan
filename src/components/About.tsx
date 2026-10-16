'use client';

import { useRef, useEffect } from 'react';
import { Brain, TrendingUp, BookOpen, Terminal } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((child, i) => {
            child.style.transitionDelay = `${i * 100}ms`;
            child.classList.add('opacity-100', 'translate-y-0');
            child.classList.remove('opacity-0', 'translate-y-6');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: t.highlight1_title,
      desc: t.highlight1_desc,
    },
    {
      icon: TrendingUp,
      title: t.highlight2_title,
      desc: t.highlight2_desc,
    },
    {
      icon: BookOpen,
      title: t.highlight3_title,
      desc: t.highlight3_desc,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#F5F7F4]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header in Brittany Chiang numbering style */}
        <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#1e6144] text-xl sm:text-2xl font-bold">
              01.
            </span>
            <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-[#172520] tracking-tight">
              {t.title}
            </h2>
            <div className="h-px bg-[#E2EAE7] flex-1 ml-4" aria-hidden="true" />
          </div>
          <p className="text-[#61706A] text-sm mt-2 ml-10">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-5">
            {[t.p1, t.p2, t.p3].map((para, i) => (
              <p
                key={i}
                data-reveal
                className="opacity-0 translate-y-6 transition-all duration-700 text-[#172520]/80 leading-relaxed text-base"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Highlight cards with hover interaction */}
          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                data-reveal
                className="opacity-0 translate-y-6 transition-all duration-700 flex gap-4 bg-white border border-[#E2EAE7] rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#83E6B2] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0B1715] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon size={20} className="text-[#83E6B2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#172520] text-base mb-1 group-hover:text-[#1e6144] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[#61706A] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
