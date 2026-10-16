"use client";

import { useEffect, useRef, useCallback } from "react";
import { X, ExternalLink, CheckCircle2, FileText } from "lucide-react";
import { GithubIcon, NotionIcon } from "@/components/Icons";
import { Project } from "@/data/projects";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetails({
  project,
  onClose,
}: ProjectDetailsProps) {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Trap focus inside modal
  useEffect(() => {
    closeButtonRef.current?.focus();
    const previouslyFocused = document.activeElement as HTMLElement;
    return () => previouslyFocused?.focus();
  }, []);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a, [tabindex="0"]',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const title = project.title[lang];
  const objective = project.objective[lang];
  const methodology = project.methodology[lang];
  const findings = project.findings[lang];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog content */}
      <div
        ref={dialogRef}
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-[#0B1715] rounded-t-2xl p-6 sm:p-8 sticky top-0 z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.domain.split("·").map((d) => (
                  <span
                    key={d}
                    className="text-[10px] font-semibold uppercase tracking-wider bg-[#83E6B2]/10 border border-[#83E6B2]/20 text-[#83E6B2] px-2 py-0.5 rounded-full"
                  >
                    {d.trim()}
                  </span>
                ))}
              </div>
              <h2
                id="project-modal-title"
                className="text-white font-bold text-xl leading-snug"
              >
                {title}
              </h2>
              <p className="text-[#A7B6AF] text-sm mt-1">{project.period}</p>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="shrink-0 text-[#A7B6AF] hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2]"
              aria-label={t.close}
            >
              <X size={20} />
            </button>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Project Image Preview */}
          {project.image && (
            <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {/* Objective */}
          <div>
            <h3 className="text-[#172520] font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <span
                className="w-4 h-0.5 bg-[#83E6B2] block"
                aria-hidden="true"
                style={{ background: "#2d7a57" }}
              />
              {t.objective}
            </h3>
            <p className="text-[#172520]/75 text-sm leading-relaxed">
              {objective}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-[#172520] font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <span
                className="w-4 h-0.5 bg-[#83E6B2] block"
                aria-hidden="true"
                style={{ background: "#2d7a57" }}
              />
              {t.methodology}
            </h3>
            <p className="text-[#172520]/75 text-sm leading-relaxed">
              {methodology}
            </p>
          </div>

          {/* Key findings */}
          <div>
            <h3 className="text-[#172520] font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <span
                className="w-4 h-0.5 bg-[#83E6B2] block"
                aria-hidden="true"
                style={{ background: "#2d7a57" }}
              />
              {t.findings}
            </h3>
            <ul className="space-y-2.5" role="list">
              {findings.map((f: string, i: number) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-[#172520]/75 leading-relaxed"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 mt-0.5 text-green-600"
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {(project.githubUrl || project.notionUrl || project.demoUrl) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-[#E2EAE7]">
              {project.notionUrl && (
                <a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-colors",
                    "border-[#0B1715] text-[#0B1715] hover:bg-[#0B1715] hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1715]",
                  )}
                >
                  <NotionIcon size={16} />
                  Notion Docs
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-colors",
                    "border-[#0B1715] text-[#0B1715] hover:bg-[#0B1715] hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1715]",
                  )}
                >
                  {project.githubUrl.includes("notion.") ? (
                    <>
                      <NotionIcon size={16} />
                      Notion Docs
                    </>
                  ) : (
                    <>
                      <GithubIcon size={15} />
                      {t.github}
                    </>
                  )}
                </a>
              )}
              {Array.isArray(project.demoUrl)
                ? project.demoUrl.map((url, i) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                        "bg-[#83E6B2] text-[#0B1715] hover:bg-[#6dd4a0]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1715]",
                      )}
                    >
                      <ExternalLink size={15} />
                      {project.demoUrl &&
                      Array.isArray(project.demoUrl) &&
                      project.demoUrl.length > 1
                        ? `${t.live_demo} ${i + 1}`
                        : t.live_demo}
                    </a>
                  ))
                : project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                        "bg-[#83E6B2] text-[#0B1715] hover:bg-[#6dd4a0]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1715]",
                      )}
                    >
                      <ExternalLink size={15} />
                      {t.live_demo}
                    </a>
                  )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
