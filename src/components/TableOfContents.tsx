'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  className?: string;
  accentColor?: string;
}

const caseStudyHeadings = () =>
  Array.from(document.querySelectorAll('[data-case-content] h2')).filter(
    element => !element.closest('[data-toc-exclude]')
  ) as HTMLElement[];

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const toc = document.querySelector('[data-mobile-toc]');
  const tocVisible = toc instanceof HTMLElement && getComputedStyle(toc).display !== 'none';
  const tocHeight = tocVisible ? toc.getBoundingClientRect().height : 0;
  const offset = 88 + tocHeight;
  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const TableOfContents: React.FC<TableOfContentsProps> = ({
  className = '',
  accentColor = '#EA6C3A',
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const findAndProcessHeadings = () => {
      const headingElements = caseStudyHeadings();
      if (headingElements.length === 0) return;

      const headingData: Heading[] = headingElements.map(element => {
        let id = element.id;
        if (!id) {
          id =
            element.textContent
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '') || '';
          element.id = id;
        }
        return { id, text: element.textContent || '' };
      });

      setHeadings(headingData);

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        entries => {
          let maxRatio = 0;
          let activeEntry: IntersectionObserverEntry | null = null;
          for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              activeEntry = entry;
            }
          }
          if (activeEntry?.target && (activeEntry.target as HTMLElement).id) {
            setActiveId((activeEntry.target as HTMLElement).id);
          }
        },
        { root: null, rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.1, 0.5, 1] }
      );

      headingElements.forEach(heading => observerRef.current?.observe(heading));
    };

    findAndProcessHeadings();
    const timeoutId = setTimeout(findAndProcessHeadings, 500);

    const handleScroll = () => {
      const headingElements = caseStudyHeadings();
      const scrollPosition = window.scrollY + 150;
      for (let i = headingElements.length - 1; i >= 0; i -= 1) {
        const heading = headingElements[i];
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;
        if (headingTop <= scrollPosition && heading.id) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const root = mobileScrollRef.current;
    if (!root || !activeId) return;
    const chip = root.querySelector<HTMLElement>(`[data-toc-id="${CSS.escape(activeId)}"]`);
    if (!chip) return;
    const left = chip.offsetLeft - root.clientWidth / 2 + chip.clientWidth / 2;
    root.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [activeId]);

  return (
    <>
      {headings.length > 0 && (
        <nav
          data-mobile-toc
          aria-label="Contents"
          className="sticky top-20 z-40 -mx-4 border-b border-[rgb(229,229,229)] bg-white/95 backdrop-blur-sm wide:hidden sm:-mx-6 md:-mx-10 lg:-mx-[140px]"
        >
          <div
            ref={mobileScrollRef}
            className="flex gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 md:px-10 lg:px-[140px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {headings.map(heading => {
              const active = activeId === heading.id;
              return (
                <button
                  key={heading.id}
                  type="button"
                  data-toc-id={heading.id}
                  onClick={() => scrollToId(heading.id)}
                  title={heading.text}
                  className={`max-w-[11.5rem] shrink-0 truncate rounded-full border px-3 py-2 text-sm font-vietnam ${
                    active ? 'font-medium' : 'border-[rgb(229,229,229)] text-black/70'
                  }`}
                  style={
                    active
                      ? {
                          backgroundColor: `${accentColor}18`,
                          color: accentColor,
                          borderColor: `${accentColor}55`,
                        }
                      : undefined
                  }
                >
                  {heading.text}
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Desktop left rail */}
      <aside
        className={`hidden wide:flex flex-col shrink-0 sticky top-20 h-[calc(100vh-5rem)] border-r border-[rgb(229,229,229)] bg-white transition-[width] duration-300 z-30 ${
          isCollapsed ? 'w-14' : 'w-60'
        } ${className}`}
      >
        <div className="flex items-center justify-between gap-2 py-4 pr-3 border-b border-[rgb(229,229,229)]">
          {!isCollapsed && (
            <p className="text-[11px] font-vietnam font-semibold uppercase tracking-[0.14em] text-black/45">
              Contents
            </p>
          )}
          <button
            type="button"
            onClick={() => setIsCollapsed(prev => !prev)}
            className="ml-auto p-1.5 rounded-md hover:bg-black/[0.04] transition-colors"
            aria-label={isCollapsed ? 'Open contents' : 'Collapse contents'}
            title={isCollapsed ? 'Open contents' : 'Collapse contents'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-black/60" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-black/60" />
            )}
          </button>
        </div>

        {!isCollapsed && (
          <div className="flex-1 overflow-y-auto pr-3 py-4">
            <nav className="space-y-1">
              {headings.map(heading => {
                const active = activeId === heading.id;
                return (
                  <button
                    key={heading.id}
                    type="button"
                    onClick={() => scrollToId(heading.id)}
                    className={`block w-full text-left px-2.5 py-2 rounded-lg text-sm font-vietnam transition-colors truncate ${
                      active ? 'font-medium' : 'text-black/65 hover:bg-black/[0.03] hover:text-black'
                    }`}
                    style={
                      active
                        ? { backgroundColor: `${accentColor}14`, color: accentColor }
                        : undefined
                    }
                    title={heading.text}
                  >
                    {heading.text}
                  </button>
                );
              })}
            </nav>
          </div>
        )}

      </aside>
    </>
  );
};

export default TableOfContents;
