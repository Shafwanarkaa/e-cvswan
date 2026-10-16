"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "certifications",
  "contact",
] as const;

export default function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Track active section
      const sections = NAV_ITEMS.map((id) => document.getElementById(id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(NAV_ITEMS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0B1715]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-white font-bold text-lg tracking-tight hover:text-[#83E6B2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded"
            aria-label="Go to top"
          >
            <span className="text-[#83E6B2]">S</span>wan
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded px-1 py-0.5",
                    activeSection === item
                      ? "text-[#83E6B2]"
                      : "text-[#A7B6AF] hover:text-white",
                  )}
                >
                  {t[item]}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {profile.cvAvailable ? (
              <a
                href={profile.cvPath}
                download
                className="hidden md:flex items-center gap-1.5 bg-[#83E6B2] text-[#0B1715] text-sm font-semibold px-3.5 py-1.5 rounded-lg hover:bg-[#6dd4a0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Download CV"
              >
                <Download size={14} />
                CV
              </a>
            ) : null}
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1 hover:text-[#83E6B2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-[#12231F] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-white font-bold text-lg">
                <span className="text-[#83E6B2]">S</span>AP
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#A7B6AF] hover:text-white p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded"
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-col gap-1 p-4 flex-1" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2]",
                      activeSection === item
                        ? "bg-[#83E6B2]/10 text-[#83E6B2]"
                        : "text-[#A7B6AF] hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {t[item]}
                  </button>
                </li>
              ))}
            </ul>
            {profile.cvAvailable && (
              <div className="p-4 border-t border-white/10">
                <a
                  href={profile.cvPath}
                  download
                  className="flex items-center justify-center gap-2 w-full bg-[#83E6B2] text-[#0B1715] font-semibold py-3 rounded-xl hover:bg-[#6dd4a0] transition-colors"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="flex items-center bg-white/10 rounded-lg overflow-hidden text-xs font-semibold"
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-2.5 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#83E6B2]",
          lang === "en"
            ? "bg-[#83E6B2] text-[#0B1715]"
            : "text-[#A7B6AF] hover:text-white",
        )}
        aria-pressed={lang === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("id")}
        className={cn(
          "px-2.5 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#83E6B2]",
          lang === "id"
            ? "bg-[#83E6B2] text-[#0B1715]"
            : "text-[#A7B6AF] hover:text-white",
        )}
        aria-pressed={lang === "id"}
        aria-label="Switch to Indonesian"
      >
        ID
      </button>
    </div>
  );
}
