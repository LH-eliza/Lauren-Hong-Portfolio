import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[75vh] w-full pt-40 font-chewie relative">
      <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-bounce rotate-180 pl-2">
        <p className="text-gray-600 [writing-mode:vertical-lr] rotate-180">Scroll</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L12 20M12 20L18 14M12 20L6 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full px-4 md:px-8">
        <div className="flex-1 space-y-8">
          <h1 className="text-[#E67E5E] text-2xl md:text-6xl font-medium">Hello there!</h1>
          <h2 className="text-[#436A21] text-2xl md:text-5xl">My name is Lauren Hong...</h2>
          <p className="text-gray-600 text-lg md:text-2xl max-w-3xl">
            A software developer and product designer passionate about building digital experiences
            for everyone.
          </p>
        </div>

        {/* SVG Illustration */}
        <div className="w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292 294"
            fill="none"
            className="w-full h-full"
          >
            <rect x="37" width="184" height="260" rx="30" fill="#FAC03A" />
            <path
              d="M95 58C99.092 60.3335 101.61 60.2971 106.5 58"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M150 157C150 117.788 181.788 86 221 86C260.212 86 292 117.788 292 157V257.148C292 258.723 290.723 260 289.148 260H152.852C151.277 260 150 258.723 150 257.148V157Z"
              fill="#EA6C3A"
            />
            <path
              d="M196 138H208V144C208 147.314 205.314 150 202 150C198.686 150 196 147.314 196 144V138Z"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M58.9589 180.027C62.8553 173.628 72.1447 173.628 76.0411 180.027L116.701 246.799C120.758 253.463 115.962 262 108.159 262H26.8406C19.0384 262 14.2417 253.463 18.2995 246.799L58.9589 180.027Z"
              fill="#E33840"
            />
            <rect x="135" y="203" width="100" height="57" rx="10" fill="#37429B" />
            <rect x="135" y="203" width="92" height="57" rx="10" fill="#3A8FC2" />
            <circle cx="82" cy="56" r="2" fill="black" />
            <circle cx="117" cy="56" r="2" fill="black" />
            <circle cx="55" cy="229" r="2" fill="black" />
            <circle cx="75" cy="229" r="2" fill="black" />
            <circle cx="184" cy="137" r="2" fill="black" />
            <circle cx="219" cy="137" r="2" fill="black" />
            <circle cx="64.5" cy="235.5" r="4.5" stroke="black" strokeWidth="2" />
            <path
              d="M166.5 202V202C166.5 198.41 169.41 195.5 173 195.5H189C192.59 195.5 195.5 198.41 195.5 202V202"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
