'use client';

import { useEffect, useState } from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';
import { profile } from '@/data/profile';
import TypewriterRole from '@/components/TypewriterRole';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToResume = () => {
    const el = document.getElementById('resume');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-[#0B1715] overflow-hidden px-4 sm:px-8 lg:px-16 pt-24 pb-16"
      aria-label="Hero section"
    >
      {/* Background subtle dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(131,230,178,0.3) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-[#83E6B2]/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Introduction & CTAs */}
        <div
          className={`lg:col-span-7 space-y-6 text-left transition-all duration-700 ease-out transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Status pill (Hazel style) */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-[#83E6B2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#83E6B2] animate-pulse" />
            <span>{t.status_available}</span>
          </div>

          {/* Big Name Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-white hover:text-[#83E6B2] transition-colors">
              {profile.name}
            </span>
            .
          </h1>

          {/* Animated Typewriter Role (Hazel style) */}
          <div className="text-xl sm:text-2xl font-mono text-[#83E6B2] font-semibold">
            <TypewriterRole roles={t.target_roles as unknown as string[]} />
          </div>

          {/* Bio Description */}
          <p className="text-[#A7B6AF] text-sm sm:text-base leading-relaxed max-w-xl">
            {t.description}
          </p>

          {/* Action Buttons (Download CV + Get in Touch) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleScrollToResume}
              className="inline-flex items-center gap-2 bg-[#83E6B2] text-[#0B1715] hover:bg-[#6dd4a0] font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#83E6B2]/20 cursor-pointer text-sm"
            >
              <Download size={16} />
              <span>{t.cta_secondary}</span>
            </button>

            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#83E6B2]/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <Mail size={16} className="text-[#83E6B2]" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 pt-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#83E6B2] hover:text-[#83E6B2] text-[#A7B6AF] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#83E6B2] hover:text-[#83E6B2] text-[#A7B6AF] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#83E6B2] hover:text-[#83E6B2] text-[#A7B6AF] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Code Snippet Card + Profile Photo Widget (Hazel signature style) */}
        <div
          className={`lg:col-span-5 flex justify-center transition-all duration-700 ease-out transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-full max-w-sm sm:max-w-md bg-[#091311] border border-white/15 rounded-3xl p-4 sm:p-5 shadow-2xl shadow-black/60 relative group hover:border-[#83E6B2]/40 transition-all duration-300">
            {/* Top: Code Editor Window mockup */}
            <div className="bg-[#050c0b] rounded-2xl p-4 border border-white/10 mb-4 font-mono text-xs">
              {/* Window dots + title */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                <span className="text-[11px] text-white/40 ml-2">query.sql</span>
              </div>

              {/* SQL Code */}
              <div className="space-y-1 text-[12px] leading-relaxed select-none">
                <p>
                  <span className="text-[#83E6B2] font-bold">SELECT</span>{' '}
                  <span className="text-white">user_name</span>
                </p>
                <p>
                  <span className="text-[#83E6B2] font-bold">FROM</span>{' '}
                  <span className="text-white">users</span>
                </p>
                <p>
                  <span className="text-[#83E6B2] font-bold">WHERE</span>{' '}
                  <span className="text-white">role = </span>
                  <span className="text-teal-300">&apos;data_analyst&apos;</span>
                </p>
                <p>
                  <span className="text-[#83E6B2] font-bold">LIMIT</span>{' '}
                  <span className="text-yellow-400">1</span>;
                </p>
              </div>
            </div>

            {/* Bottom: Framed Profile Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12231F] h-72 sm:h-80">
              <img
                src={profile.profileImagePath}
                alt={profile.name}
                className="w-full h-full object-cover object-[50%_22%] scale-[1.85] origin-[50%_22%] filter brightness-95 group-hover:scale-[1.95] transition-transform duration-500"
              />

              {/* Open to Work floating pill on bottom of photo */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0B1715]/85 backdrop-blur-md border border-white/15 rounded-xl py-2 px-3 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#83E6B2] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#83E6B2]" />
                </span>
                <span className="text-xs font-semibold text-white tracking-wide">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="mt-12 flex flex-col items-center gap-1 text-[#61706A] hover:text-[#83E6B2] transition-colors mx-auto group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded p-2"
        aria-label={t.scroll}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#61706A] group-hover:text-[#83E6B2] transition-colors">
          {t.scroll}
        </span>
        <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
