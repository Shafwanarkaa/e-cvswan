"use client";

import { useState } from "react";
import { Mail, Copy, CheckCheck } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";
import { profile } from "@/data/profile";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = profile.email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const links = [
    {
      id: "email-link",
      label: t.email_label,
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      id: "linkedin-link",
      label: t.linkedin_label,
      value: "linkedin.com/in/shafwanarka",
      href: profile.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
    {
      id: "github-link",
      label: t.github_label,
      value: "github.com/shafwanarkaa",
      href: profile.github,
      icon: GithubIcon,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#0B1715]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section header */}
        <div className="mb-4">
          <p className="font-mono text-[#83E6B2] text-sm font-semibold tracking-wider mb-2">
            07. {t.subtitle}
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {t.title}
          </h2>
        </div>

        <p className="text-[#A7B6AF] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          {t.description}
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {links.map(({ id, label, value, href, icon: Icon, external }) => (
            <a
              key={id}
              id={id}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#83E6B2]/30 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#83E6B2]/10 border border-[#83E6B2]/20 flex items-center justify-center group-hover:bg-[#83E6B2]/20 transition-colors">
                <Icon size={20} className="text-[#83E6B2]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[#A7B6AF] text-xs font-medium uppercase tracking-wide mb-1">
                  {label}
                </p>
                <p className="text-white text-sm font-medium truncate max-w-[180px]">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Copy email button */}
        <button
          onClick={handleCopyEmail}
          id="copy-email-btn"
          className="inline-flex items-center gap-2 bg-[#83E6B2] text-[#0B1715] font-semibold px-6 py-3 rounded-xl hover:bg-[#6dd4a0] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#83E6B2]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1715]"
          aria-live="polite"
        >
          {copied ? (
            <>
              <CheckCheck size={16} aria-hidden="true" />
              {t.copied}
            </>
          ) : (
            <>
              <Copy size={16} aria-hidden="true" />
              {t.copy_email}
            </>
          )}
        </button>

        <p className="text-[#61706A] text-sm mt-8">{t.closing}</p>
      </div>
    </section>
  );
}
