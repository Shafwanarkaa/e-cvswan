"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

export default function Education() {
  const { lang } = useLanguage();
  const t = translations[lang].education;

  return (
    <section
      id="education"
      className="py-20 bg-[#12231F]"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#83E6B2] text-xl sm:text-2xl font-bold">
              02.
            </span>
            <h2
              id="education-heading"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {t.title}
            </h2>
            <div className="h-px bg-white/10 flex-1 ml-4" aria-hidden="true" />
          </div>
          <p className="text-[#A7B6AF] text-sm mt-2 ml-10">{t.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/8 transition-colors">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#83E6B2]/10 border border-[#83E6B2]/20 flex items-center justify-center">
                <GraduationCap
                  size={22}
                  className="text-[#83E6B2]"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Universitas Bina Sarana Informatika
                  </h3>
                  <span className="text-[#83E6B2] text-sm font-medium shrink-0">
                    {t.period}
                  </span>
                </div>
                <p className="text-[#A7B6AF] text-sm mb-4">{t.degree}</p>
                <p className="text-[#61706A] text-xs mt-3">{t.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
