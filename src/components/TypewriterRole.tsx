'use client';

import { useState, useEffect } from 'react';

interface TypewriterRoleProps {
  roles: string[];
}

export default function TypewriterRole({ roles }: TypewriterRoleProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setRoleIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [roles]);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const currentFullText = roles[roleIndex % roles.length];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <div className="text-lg sm:text-2xl font-mono font-semibold tracking-tight leading-relaxed min-h-[1.5em] flex items-center justify-start text-[#83E6B2]">
      <span>{displayText}</span>
      <span
        className="inline-block w-[3px] h-[1em] bg-[#83E6B2] ml-1.5 rounded-full animate-pulse shadow-sm shadow-[#83E6B2]"
        aria-hidden="true"
      />
    </div>
  );
}
