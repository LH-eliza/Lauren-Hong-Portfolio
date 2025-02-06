import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-[#E67E5E] text-4xl mb-4">Hello there!</h1>
          <h2 className="text-[#636B46] text-3xl mb-4">
            My name is Lauren Hong...
          </h2>
          <p className="text-gray-600 max-w-xl">
            A software developer and product designer passionate about building
            digital experiences for everyone.
          </p>
        </div>

        {/* Illustration */}
        <div className="w-40 h-40 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292 294"
            fill="none"
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
            <rect
              x="135"
              y="203"
              width="100"
              height="57"
              rx="10"
              fill="#37429B"
            />
            <rect
              x="135"
              y="203"
              width="92"
              height="57"
              rx="10"
              fill="#3A8FC2"
            />
            <circle cx="82" cy="56" r="2" fill="black" />
            <circle cx="117" cy="56" r="2" fill="black" />
            <circle cx="55" cy="229" r="2" fill="black" />
            <circle cx="75" cy="229" r="2" fill="black" />
            <circle cx="184" cy="137" r="2" fill="black" />
            <circle cx="219" cy="137" r="2" fill="black" />
            <circle
              cx="64.5"
              cy="235.5"
              r="4.5"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M166.5 202V202C166.5 198.41 169.41 195.5 173 195.5H189C192.59 195.5 195.5 198.41 195.5 202V202"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-[#636B46] text-2xl mb-4">
          A little bit more about me
        </h3>
        <p className="text-gray-600">
          I'm based in Ottawa, Ontario attending the University of Ottawa for{" "}
          <span className="font-medium">Software Engineering.</span> I love to
          create, explore, learn, and help others out. Here are some interesting
          projects that I've been working on.
        </p>
        <a
          href="/about"
          className="inline-block mt-4 text-[#E67E5E] hover:text-[#d66c4d] transition-colors"
        >
          Learn more about me →
        </a>
      </div>
    </section>
  );
};

export default Hero;
