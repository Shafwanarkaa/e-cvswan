'use client';

import { Award } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';
import { certifications } from '@/data/profile';

export default function Certifications() {
  const { lang } = useLanguage();
  const t = translations[lang].certifications;

  return (
    <section
      id="certifications"
      className="py-24 bg-[#12231F]"
      aria-labelledby="cert-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#83E6B2] text-xl sm:text-2xl font-bold">
              06.
            </span>
            <h2 id="cert-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
            <div className="h-px bg-white/10 flex-1 ml-4" aria-hidden="true" />
          </div>
          <p className="text-[#A7B6AF] text-sm mt-2 ml-10">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert) => {
            const name = cert.name[lang];
            return (
              <div
                key={cert.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-[#83E6B2]/20 transition-all duration-300 hover:-translate-y-0.5 flex gap-4 items-start"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#83E6B2]/10 border border-[#83E6B2]/20 flex items-center justify-center">
                  <Award size={18} className="text-[#83E6B2]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug mb-1">{name}</p>
                  <p className="text-[#61706A] text-xs">{cert.provider}</p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#83E6B2] text-xs mt-1 inline-block hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded"
                    >
                      Verify →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
