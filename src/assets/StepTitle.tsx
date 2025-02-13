import React from 'react';

interface StepTitleProps {
  step: number;
  title: string;
}

const StepTitle: React.FC<StepTitleProps> = ({ step, title }) => {
  return (
    <h2 className="text-4xl text-blue-700 font-serif flex flex-col">
      <span className="text-lg mb-1">Step {step} -</span>
      <span>{title}</span>
    </h2>
  );
};

export default StepTitle;