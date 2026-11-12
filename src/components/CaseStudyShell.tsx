'use client';

import React from 'react';
import TableOfContents from './TableOfContents';
import BackToTop from './BackToTop';

interface CaseStudyShellProps {
  children: React.ReactNode;
  accentColor?: string;
}

const CaseStudyShell: React.FC<CaseStudyShellProps> = ({
  children,
  accentColor = '#EA6C3A',
}) => {
  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-[140px]">
        <div className="w-full flex items-start gap-8 lg:gap-12">
          <TableOfContents accentColor={accentColor} />
          <div data-case-content className="flex-1 min-w-0 py-10 md:py-14">
            {children}
          </div>
        </div>
      </div>
      <BackToTop accentColor={accentColor} />
    </div>
  );
};

export default CaseStudyShell;
