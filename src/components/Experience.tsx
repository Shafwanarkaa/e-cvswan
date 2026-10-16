'use client';

import { Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';

const ROLE_SKILLS: Record<number, string[]> = {
  0: ['Data Ingestion', 'Data Cleansing', 'SLA Reporting', 'Interactive Dashboard', 'Cross-Validation'],
  1: ['Team Coordination', 'Time Management', 'Operational Execution', 'Detail-Oriented'],
  2: ['Google Sheets', 'Real-Time Verification', 'Data Entry & Quality', 'Field Operations'],
};

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section
      id="experience"
      className="py-24 bg-[#F5F7F4]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#1e6144] text-xl sm:text-2xl font-bold">
              03.
            </span>
            <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold text-[#172520] tracking-tight">
              {t.title}
            </h2>
            <div className="h-px bg-[#E2EAE7] flex-1 ml-4" aria-hidden="true" />
          </div>
          <p className="text-[#61706A] text-sm mt-2 ml-10">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line with gradient */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#83E6B2] via-[#E2EAE7] to-[#E2EAE7]"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {t.items.map((item, idx) => {
                // Animasi radar hijau kedip aktif di pengalaman paling terbaru (PT Rayspeed Asia / idx 0)
                const isCurrent = idx === 0;
                const skills = ROLE_SKILLS[idx] ?? [];

                return (
                  <div key={idx} className="relative flex gap-6 group">
                    {/* Timeline dot with live pulsing radar ring if active */}
                    <div className="relative shrink-0 w-12 h-12 rounded-full bg-[#0B1715] border-4 border-[#F5F7F4] flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                      {isCurrent && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#83E6B2] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#83E6B2]"></span>
                        </span>
                      )}
                      <Briefcase size={16} className="text-[#83E6B2]" aria-hidden="true" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white border border-[#E2EAE7] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#83E6B2] hover:-translate-y-1 transition-all duration-300 mb-2">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-bold text-[#172520] text-lg">{item.role}</h3>
                          <p className="text-sm text-[#61706A] mt-0.5">
                            <span className="font-semibold text-[#1e6144]">
                              {item.type}
                            </span>
                            {' · '}
                            <span className="font-medium text-[#172520]">{item.org}</span>
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#134e35] bg-[#EBF7F1] border border-[#83E6B2]/50 rounded-full px-3 py-1 shrink-0">
                          {item.period}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="mt-4 space-y-2.5" role="list">
                        {item.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex gap-2.5 text-sm text-[#172520]/80 leading-relaxed"
                          >
                            <span
                              className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#2d7a57]"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      {skills.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-[#E2EAE7] flex flex-wrap gap-1.5">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-[#F5F7F4] border border-[#E2EAE7] text-[#2d7a57] font-medium px-2.5 py-1 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
