'use client';

import { useState } from 'react';
import { ArrowRight, Database, BarChart3, PieChart, MapPin, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';
import { GithubIcon, NotionIcon } from '@/components/Icons';
import ProjectDetails from './ProjectDetails';
import {
  BIPipelineMockup,
  DSSMockup,
  RetailAnalyticsMockup,
  ClusteringMockup,
} from './ProjectMockups';
import type { Project } from '@/data/projects';

const MOCKUPS = [
  BIPipelineMockup,
  DSSMockup,
  RetailAnalyticsMockup,
  ClusteringMockup,
];

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-[#0B1715] relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[300px] bg-[#83E6B2]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header in Brittany Chiang numbering style */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#83E6B2] text-xl sm:text-2xl font-bold">
              03.
            </span>
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
            <div className="h-px bg-white/10 flex-1 ml-4" aria-hidden="true" />
          </div>
          <p className="text-[#A7B6AF] text-sm mt-2 ml-10">
            {t.subtitle}
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const MockupComponent = MOCKUPS[idx % MOCKUPS.length];
            const title = project.title[lang];
            const shortDesc = project.shortDesc[lang];

            return (
              <article
                key={project.id}
                className="group relative bg-[#12231F] border border-white/10 rounded-2xl overflow-hidden hover:border-[#83E6B2]/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#83E6B2]/10 flex flex-col"
              >
                {/* Visual Preview Graphic Container with Duotone Color Shift on Hover */}
                <div className="relative overflow-hidden border-b border-white/10 bg-[#091311]">
                  {project.image ? (
                    <div className="w-full h-48 sm:h-52 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover object-top transform transition-all duration-500 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                  ) : (
                    <div className="transform transition-all duration-500 ease-out group-hover:scale-[1.03]">
                      <MockupComponent />
                    </div>
                  )}

                  {/* Brittany Chiang signature duotone tint overlay */}
                  <div
                    className="absolute inset-0 bg-[#83E6B2]/20 mix-blend-multiply opacity-70 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Grayscale hover removal overlay */}
                  <div
                    className="absolute inset-0 bg-transparent backdrop-grayscale group-hover:backdrop-grayscale-0 transition-all duration-500 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Period + Featured Label */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#83E6B2] font-semibold tracking-wider uppercase">
                      Featured Project
                    </span>
                    <span className="font-mono text-xs text-[#61706A]">
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-[#83E6B2] transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A7B6AF] text-sm leading-relaxed mb-6 flex-1">
                    {shortDesc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#83E6B2] bg-[#83E6B2]/10 border border-[#83E6B2]/20 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card actions: View Details + Direct Links */}
                  <div className="flex items-center justify-between gap-2 mt-auto pt-2">
                    <button
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-2 text-white font-mono text-sm font-semibold group-hover:text-[#83E6B2] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83E6B2] rounded px-1 py-0.5"
                      aria-label={`${t.view_details}: ${title}`}
                    >
                      <span>{t.view_details}</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1 text-[#83E6B2]"
                        aria-hidden="true"
                      />
                    </button>

                    {/* Quick external links on card */}
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A7B6AF] hover:text-[#83E6B2] transition-colors p-1.5 hover:bg-white/5 rounded-md"
                          title="GitHub"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.notionUrl && (
                        <a
                          href={project.notionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A7B6AF] hover:text-[#83E6B2] transition-colors p-1.5 hover:bg-white/5 rounded-md"
                          title="Notion Documentation"
                          aria-label="Notion Documentation"
                        >
                          <NotionIcon size={16} />
                        </a>
                      )}
                      {Array.isArray(project.demoUrl) ? (
                        project.demoUrl.map((url, i) => (
                          <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#A7B6AF] hover:text-[#83E6B2] transition-colors p-1.5 hover:bg-white/5 rounded-md flex items-center gap-0.5 font-mono text-xs"
                            title={`Live Demo ${i + 1}`}
                            aria-label={`Live Demo ${i + 1}`}
                          >
                            <ExternalLink size={15} />
                            {project.demoUrl && Array.isArray(project.demoUrl) && project.demoUrl.length > 1 && (
                              <span className="text-[10px] leading-none">{i + 1}</span>
                            )}
                          </a>
                        ))
                      ) : (
                        project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#A7B6AF] hover:text-[#83E6B2] transition-colors p-1.5 hover:bg-white/5 rounded-md"
                            title="Live Demo"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project detail modal */}
      {selected && (
        <ProjectDetails project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
