'use client';

import { BarChart3, PieChart, Wrench, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';
import { skillCategories } from '@/data/profile';

const CATEGORY_CONFIG: Record<
  string,
  {
    icon: typeof BarChart3;
    tagClass: string;
  }
> = {
  analytics: {
    icon: BarChart3,
    tagClass:
      'bg-emerald-50/80 border border-emerald-200/80 text-emerald-900 hover:bg-emerald-100/80 hover:border-emerald-300',
  },
  bi: {
    icon: PieChart,
    tagClass:
      'bg-teal-50/80 border border-teal-200/80 text-teal-900 hover:bg-teal-100/80 hover:border-teal-300',
  },
  tools: {
    icon: Wrench,
    tagClass:
      'bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300',
  },
  soft: {
    icon: Sparkles,
    tagClass:
      'bg-green-50/80 border border-green-200/80 text-green-900 hover:bg-green-100/80 hover:border-green-300',
  },
  language: {
    icon: Globe,
    tagClass:
      'bg-[#EBF7F1] border border-[#83E6B2] text-[#0d402b] font-medium hover:bg-[#d8f2e4]',
  },
};

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  const getCategoryLabel = (id: string): string => {
    const map = t.categories as Record<string, string>;
    return map[id] ?? id;
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#F5F7F4]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#1e6144] text-xl sm:text-2xl font-bold">
              05.
            </span>
            <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-[#172520] tracking-tight">
              {t.title}
            </h2>
            <div className="h-px bg-[#E2EAE7] flex-1 ml-4" aria-hidden="true" />
          </div>
          <p className="text-[#61706A] text-sm mt-2 ml-10">
            {t.subtitle}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const config = CATEGORY_CONFIG[cat.id] ?? CATEGORY_CONFIG.tools;
            const Icon = config.icon;

            return (
              <div
                key={cat.id}
                className="bg-white border border-[#E2EAE7] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#83E6B2] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E2EAE7]">
                    <div className="w-9 h-9 rounded-xl bg-[#0B1715] flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-[#83E6B2]" aria-hidden="true" />
                    </div>
                    <h3 className="text-[#172520] font-bold text-sm uppercase tracking-wider">
                      {getCategoryLabel(cat.id)}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const label = typeof skill === 'string' ? skill : skill[lang];
                      return (
                        <span
                          key={label}
                          className={`text-sm rounded-lg px-3 py-1.5 font-medium transition-colors ${config.tagClass}`}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
