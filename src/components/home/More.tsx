import React from 'react';

const More: React.FC = () => {
  return (
    <section>
      <div className="space-y-8 px-4 md:px-8 font-chewie">
        <h3 className="text-[#436A21] text-3xl md:text-4xl text-center">
          A little bit more about me
        </h3>
        <p className="text-gray-600 text-lg md:text-2xl text-center max-w-3xl mx-auto">
          I'm based in Ottawa, Ontario attending the University of Ottawa for{' '}
          <span className="font-medium">Software Engineering.</span> I love to create, explore,
          learn, and help others out. Here are some interesting projects that I've been working on.
        </p>
        <div className="flex justify-center">
          <a
            href="/about"
            className="text-lg md:text-xl text-[#E67E5E] hover:text-[#d66c4d] transition-colors"
          >
            Learn more about me →
          </a>
        </div>
      </div>

      <div className="mb-5">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 431 288"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M230 79C230 35.3695 265.37 0 309 0C352.63 0 388 35.3695 388 79V186C388 197.046 379.046 206 368 206H250C238.954 206 230 197.046 230 186V79Z"
              fill="#EA6C3A"
            />
            <path
              d="M421 205.5C426.523 205.5 431.062 201.007 430.395 195.524C429.492 188.117 427.587 180.851 424.72 173.929C420.574 163.919 414.497 154.825 406.836 147.164C399.175 139.503 390.081 133.426 380.071 129.28C373.149 126.413 365.883 124.508 358.476 123.605C352.993 122.938 348.5 127.477 348.5 133V195.5C348.5 201.023 352.977 205.5 358.5 205.5H421Z"
              fill="#3A8FC2"
            />
            <circle cx="175" cy="56" r="50" fill="#E33840" />
            <rect x="100" y="106" width="182" height="100" rx="20" fill="#FAC03A" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81 97V153H20C8.95431 153 0 161.954 0 173V186C0 197.046 8.95431 206 20 206H101H109H114C125.046 206 134 197.046 134 186V97C134 85.9543 125.046 77 114 77H101C89.9543 77 81 85.9543 81 97Z"
              fill="#436A21"
            />
          </svg>
        </div>
        <p className="text-center text-gray-600 font-chewie">view design works</p>
        <div className="flex justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
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
      </div>
    </section>
  );
};
export default More;
