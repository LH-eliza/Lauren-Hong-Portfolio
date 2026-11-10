'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  className?: string;
  accentColor?: string;
  solutionId?: string;
}

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const offset = 100;
  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const TableOfContents: React.FC<TableOfContentsProps> = ({
  className = '',
  accentColor = '#EA6C3A',
  solutionId = 'solution',
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasSolution, setHasSolution] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const findAndProcessHeadings = () => {
      const headingElements = Array.from(
        document.querySelectorAll('[data-case-content] h2')
      ) as HTMLElement[];

      const fallback =
        headingElements.length > 0
          ? headingElements
          : (Array.from(document.querySelectorAll('h2')) as HTMLElement[]);

      if (fallback.length === 0) return;

      const headingData: Heading[] = fallback.map(element => {
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
      setHasSolution(Boolean(document.getElementById(solutionId)));

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

      fallback.forEach(heading => observerRef.current?.observe(heading));
    };

    findAndProcessHeadings();
    const timeoutId = setTimeout(findAndProcessHeadings, 500);

    const handleScroll = () => {
      const headingElements = Array.from(
        document.querySelectorAll('[data-case-content] h2, h2')
      ) as HTMLElement[];
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
  }, [solutionId]);

  return (
    <>
      {/* Desktop left rail */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 sticky top-20 h-[calc(100vh-5rem)] border-r border-[rgb(229,229,229)] bg-white transition-[width] duration-300 z-30 ${
          isCollapsed ? 'w-14' : 'w-64'
        } ${className}`}
      >
        <div className="flex items-center justify-between gap-2 px-3 py-4 border-b border-[rgb(229,229,229)]">
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
          <div className="flex-1 overflow-y-auto px-3 py-4">
            {hasSolution && (
              <button
                type="button"
                onClick={() => scrollToId(solutionId)}
                className="w-full mb-4 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-vietnam font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accentColor }}
              >
                <SkipForward className="w-4 h-4" />
                Skip to solution
              </button>
            )}

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

        {isCollapsed && (
          <div className="flex flex-col items-center gap-3 py-4">
            {hasSolution && (
              <button
                type="button"
                onClick={() => scrollToId(solutionId)}
                className="p-2 rounded-lg text-white"
                style={{ backgroundColor: accentColor }}
                aria-label="Skip to solution"
                title="Skip to solution"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </aside>

      {/* Mobile skip control */}
      {hasSolution && (
        <div className="lg:hidden sticky top-20 z-20 bg-white/95 backdrop-blur border-b border-[rgb(229,229,229)] px-4 py-2">
          <button
            type="button"
            onClick={() => scrollToId(solutionId)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-vietnam font-medium text-white"
            style={{ backgroundColor: accentColor }}
          >
            <SkipForward className="w-4 h-4" />
            Skip to solution
          </button>
        </div>
      )}
    </>
  );
};

export default TableOfContents;
