'use client';

import React from 'react';

const socials = [
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/lauren-hong/' },
  { label: 'GITHUB', href: 'https://github.com/LH-eliza' },
  { label: 'BEHANCE', href: 'https://www.behance.net/laurenhong1' },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-transparent">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 py-8 md:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-vietnam text-[11px] sm:text-xs tracking-[0.08em] uppercase text-black">
          {socials.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {social.label} ↗
            </a>
          ))}
        </div>

        <p className="font-vietnam text-xs sm:text-sm text-black/70">
          Site developed &amp; designed by Lauren Hong
        </p>
      </div>
    </footer>
  );
};

export default Footer;
