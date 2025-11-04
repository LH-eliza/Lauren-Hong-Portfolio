import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

interface TableOfContentsProps {
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ className = '' }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    // Load collapsed state from localStorage, default to false (expanded)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('toc-collapsed');
      return saved === 'true';
    }
    return false;
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Function to find and process headings
    const findAndProcessHeadings = () => {
      // Find all h2 headings in the document (main sections only)
      const headingElements = Array.from(document.querySelectorAll('h2')) as HTMLElement[];

      if (headingElements.length === 0) {
        return;
      }

      const headingData: Heading[] = headingElements.map(element => {
        // Generate ID from text if not already present
        let id = element.id;
        if (!id) {
          id =
            element.textContent
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '') || '';
          element.id = id;
        }

        return {
          id,
          text: element.textContent || '',
          level: parseInt(element.tagName.charAt(1)),
          element,
        };
      });

      setHeadings(headingData);

      // Set up Intersection Observer to track active section
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0, 0.1, 0.5, 1],
      };

      // Clean up previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(entries => {
        // Find the entry with the highest intersection ratio that's intersecting
        let maxRatio = 0;
        let activeEntry: IntersectionObserverEntry | null = null;

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });

        if (activeEntry) {
          setActiveId(activeEntry.target.id);
        }
      }, observerOptions);

      // Observe all headings
      headingElements.forEach(heading => {
        if (observerRef.current) {
          observerRef.current.observe(heading);
        }
      });

      // Set initial active heading based on scroll position
      const updateActiveHeading = () => {
        const scrollPosition = window.scrollY + 150;

        for (let i = headingElements.length - 1; i >= 0; i--) {
          const heading = headingElements[i];
          const headingTop = heading.getBoundingClientRect().top + window.scrollY;

          if (headingTop <= scrollPosition) {
            setActiveId(heading.id);
            break;
          }
        }
      };

      updateActiveHeading();
    };

    // Initial attempt
    findAndProcessHeadings();

    // Retry after a short delay to catch dynamically loaded content
    const timeoutId = setTimeout(() => {
      findAndProcessHeadings();
    }, 500);

    // Also listen for scroll to update active heading
    const handleScroll = () => {
      const headingElements = Array.from(document.querySelectorAll('h2')) as HTMLElement[];

      if (headingElements.length === 0) return;

      const scrollPosition = window.scrollY + 150;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const heading = headingElements[i];
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;

        if (headingTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Auto-collapse after clicking a heading
      setIsCollapsed(true);
      localStorage.setItem('toc-collapsed', 'true');
    }
  };

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('toc-collapsed', String(newState));
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block ${className}`}
      style={{ maxWidth: isCollapsed ? 'auto' : '280px' }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {isCollapsed ? (
          <button
            onClick={toggleCollapse}
            className="p-3 hover:bg-gray-50 transition-colors flex items-center justify-center"
            aria-label="Expand table of contents"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        ) : (
          <div className="p-4 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2">
                Contents
              </div>
              <button
                onClick={toggleCollapse}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Collapse table of contents"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <nav className="space-y-1">
              {headings.map(heading => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left px-2 py-1.5 rounded text-sm transition-colors truncate font-medium ${
                    activeId === heading.id
                      ? 'bg-[#EA6C3A]/10 text-[#EA6C3A]'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  title={heading.text}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;
