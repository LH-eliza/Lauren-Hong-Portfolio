import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div>
            <a href="/" className="text-2xl font-light">
              LH
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="/work"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </a>
            <a
              href="/resume"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
