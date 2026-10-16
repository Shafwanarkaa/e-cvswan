'use client';

import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';
import { profile } from '@/data/profile';

export default function SocialSidebars() {
  return (
    <>
      {/* Left Sidebar: Social Links */}
      <div
        className="hidden lg:flex fixed bottom-0 left-8 z-40 flex-col items-center gap-6"
        aria-label="Social links sidebar"
      >
        <ul className="flex flex-col items-center gap-5 m-0 p-0 list-none">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-[#A7B6AF] hover:text-[#83E6B2] hover:-translate-y-1 transition-all duration-200 block p-1"
            >
              <GithubIcon size={20} />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#A7B6AF] hover:text-[#83E6B2] hover:-translate-y-1 transition-all duration-200 block p-1"
            >
              <LinkedinIcon size={20} />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[#A7B6AF] hover:text-[#83E6B2] hover:-translate-y-1 transition-all duration-200 block p-1"
            >
              <Mail size={20} />
            </a>
          </li>
        </ul>
        {/* Vertical line extending downward */}
        <div className="w-px h-28 bg-[#83E6B2]/30" aria-hidden="true" />
      </div>

      {/* Right Sidebar: Vertical Email */}
      <div
        className="hidden lg:flex fixed bottom-0 right-8 z-40 flex-col items-center gap-6"
        aria-label="Email sidebar"
      >
        <a
          href={`mailto:${profile.email}`}
          className="text-[#A7B6AF] hover:text-[#83E6B2] hover:-translate-y-1 transition-all duration-200 text-xs tracking-widest font-mono [writing-mode:vertical-rl] py-2"
        >
          {profile.email}
        </a>
        {/* Vertical line extending downward */}
        <div className="w-px h-28 bg-[#83E6B2]/30" aria-hidden="true" />
      </div>
    </>
  );
}
