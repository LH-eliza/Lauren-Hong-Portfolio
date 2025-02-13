import React from 'react';

interface TextLinkButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const TextLinkButton: React.FC<TextLinkButtonProps> = ({ text, href = '#', className = '' }) => {
  return (
    <a
      href={href}
      className={`
        inline-flex items-center gap-2
        text-[#1A4FAC] text-2xl font-serif
        hover:opacity-80 transition-opacity
        underline underline-offset-4
        ${className}
      `}
    >
      {text}
    </a>
  );
};

export default TextLinkButton;
