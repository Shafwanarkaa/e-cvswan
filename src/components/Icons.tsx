import React from 'react';

export function GithubIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function NotionIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.327L17.842 2.11c-.42-.326-1.073-.7-2.38-.606L2.92 2.436c-.466.047-.56.327-.373.513l1.912 1.259zm-.466 2.893v13.626c0 .84.42 1.12 1.353 1.073l14.288-.84c.933-.046 1.166-.653 1.166-1.353V6.307c0-.653-.28-.98-1.026-.933l-14.754.886c-.7.047-1.027.327-1.027.84zm13.355 1.54c.093.42 0 .84-.42.886l-.886.14c-.373.047-.466.233-.466.56v8.494c0 .327-.14.513-.466.56l-1.073.093c-.42.047-.653-.14-.84-.513l-4.48-6.907v6.627c0 .42-.187.653-.653.7l-1.026.046c-.42.047-.607-.233-.607-.653V9.61c0-.42.187-.653.607-.7l1.353-.093c.466-.047.793.187 1.026.56l4.294 6.627v-6.3c0-.42.233-.653.653-.7l1.353-.093c.42-.047.56.233.633.653z" />
    </svg>
  );
}
