'use client';

import React from 'react';
import TableOfContents from './TableOfContents';
import BackToTop from './BackToTop';

interface CaseStudyShellProps {
  children: React.ReactNode;
  accentColor?: string;
  solutionId?: string;
}

const CaseStudyShell: React.FC<CaseStudyShellProps> = ({
  children,
  accentColor = '#EA6C3A',
  solutionId = 'solution',
}) => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-start">
        <TableOfContents accentColor={accentColor} solutionId={solutionId} />
        <div data-case-content className="flex-1 min-w-0 px-5 sm:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
          {children}
        </div>
      </div>
      <BackToTop accentColor={accentColor} />
    </div>
  );
};

export default CaseStudyShell;
