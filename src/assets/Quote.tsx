import React from 'react';

interface QuoteBlockProps {
  text: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ text }) => {
  return (
    <div className="w-full pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          <div className="w-1.5 bg-gray-600 flex-shrink-0" />
          <p className="text-2xl text-gray-700 font-medium font-libre">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default QuoteBlock;
