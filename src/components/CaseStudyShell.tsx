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
      <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-[140px]">
        <div className="flex w-full min-w-0 flex-col wide:flex-row wide:items-start wide:gap-12">
          <TableOfContents accentColor={accentColor} />
          <div data-case-content className="w-full min-w-0 flex-1 pb-12 pt-6 sm:pt-8 md:py-14">
            {children}
          </div>
        </div>
      </div>
      <BackToTop accentColor={accentColor} />
    </div>
  );
};

export default CaseStudyShell;
