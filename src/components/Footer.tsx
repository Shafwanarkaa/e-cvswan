'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#060f0d] border-t border-white/5 py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
        <p className="text-[#61706A] text-sm">
          © {year} {t.built}. {t.rights}
        </p>
        <p className="text-[#61706A] text-xs">
          Built with{' '}
          <span className="text-[#83E6B2]">Next.js</span>
          {' '}·{' '}
          <span className="text-[#83E6B2]">TypeScript</span>
          {' '}·{' '}
          <span className="text-[#83E6B2]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
