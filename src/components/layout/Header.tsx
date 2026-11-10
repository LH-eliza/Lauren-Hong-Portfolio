'use client';

import React, { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'work', match: (path: string) => path === '/' },
  { href: '/about', label: 'about me', match: (path: string) => path.startsWith('/about') },
  {
    href: '/playground',
    label: 'my playground',
    match: (path: string) => path.startsWith('/playground'),
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14">
        <nav className="flex justify-between items-center h-20">
          <a href="/" className="block w-10 h-10 rounded-full overflow-hidden shrink-0">
            <img src="/logo.png" alt="Lauren Hong" className="w-full h-full object-cover" />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-8 font-vietnam text-[15px] text-black">
            {navLinks.map(link => {
              const isActive = link.match(pathname);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-opacity hover:opacity-60 ${
                    isActive ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100`}
          >
            <div className="flex flex-col w-full font-vietnam">
              {navLinks.map(link => {
                const isActive = link.match(pathname);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-6 py-4 text-black border-b border-gray-50 ${
                      isActive ? 'font-semibold' : 'font-normal'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
