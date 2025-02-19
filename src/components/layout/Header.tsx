import React, { useState } from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className="w-full h-full"
  >
    <circle cx="30" cy="30" r="30" fill="#E67E5E" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fill="white"
      fontSize="20"
      dy=".3em"
      className="font-bruskest"
    >
      LH
    </text>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="w-12 h-12">
            <a href="/">
              <Logo />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-chewie">
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/works" className="text-gray-700 hover:text-gray-900">
              Work
            </a>
            <a
              href="https://drive.google.com/file/d/15YuRvO0faA__bnlZDMHcs0yFEkEBfqJM/view?usp=sharing"
              className="text-gray-700 hover:text-gray-900"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/lauren-hong/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200`}
          >
            <div className="flex flex-col w-full font-chewie">
              <a
                href="/about"
                className="px-4 py-4 text-gray-700 hover:text-gray-900 border-b border-gray-100"
              >
                About
              </a>
              <a
                href="/works"
                className="px-4 py-4 text-gray-700 hover:text-gray-900 border-b border-gray-100"
              >
                Work
              </a>
              <a
                href="https://drive.google.com/file/d/15YuRvO0faA__bnlZDMHcs0yFEkEBfqJM/view?usp=sharing"
                className="px-4 py-4 text-gray-700 hover:text-gray-900 border-b border-gray-100"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/lauren-hong/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 text-gray-700 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
