'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';

type Category = 'All' | 'Product Design' | 'Leadership' | 'Other';

interface WorkItem {
  title: string;
  imageUrl?: string;
  videoUrl?: string;
  lottieUrl?: string;
  gradientClass?: string;
  link: string;
  tags: string[];
  category: Exclude<Category, 'All'>;
  external?: boolean;
  status?: 'Shipped' | 'Concept';
}

const filters: Category[] = ['All', 'Product Design', 'Leadership', 'Other'];

const categoryOrder: Record<Exclude<Category, 'All'>, number> = {
  'Product Design': 0,
  Other: 1,
  Leadership: 2,
};

const works: WorkItem[] = [
  {
    title: 'Giatec Ecosystem Portal — From three products to one operational story',
    videoUrl: '/images/Giatec/thumb.mp4',
    imageUrl: '/images/Giatec/thumb.jpg',
    link: '/giatec',
    tags: ['Product Design', 'Design System', 'B2B Entreprise'],
    category: 'Product Design',
    status: 'Concept',
  },
  {
    title: 'Refreshing the Hackathon Application Experience',
    videoUrl: '/images/Application/thumb.mp4',
    imageUrl: '/images/Application/app.png',
    link: '/uotta-app',
    tags: ['Product Design', 'Hackathon'],
    category: 'Product Design',
    status: 'Shipped',
  },
  {
    title: 'Making Life More Accessible Through Software-Hardware Interaction',
    videoUrl: '/images/Bionics/thumb.mp4',
    imageUrl: '/images/Bionics/bionics.svg',
    link: '/bionics',
    tags: ['Product Design', 'Accessibility', 'Healthcare'],
    category: 'Product Design',
    status: 'Shipped',
  },
  {
    title: 'Sports Medicine Illustrations',
    imageUrl: '/images/Personal/Sports.png',
    link: 'https://www.behance.net/gallery/220510147/Sports-Logo-University-of-Ottawa',
    tags: ['Illustration'],
    category: 'Other',
    external: true,
  },
  {
    title: 'MOVE STUDIO — Dance Class Booking Site',
    lottieUrl: '/images/SchoolProjects/move-studio.json',
    gradientClass: 'gradient-move-studio',
    link: 'https://move-studio.vercel.app/',
    tags: ['School', 'Web'],
    category: 'Other',
    external: true,
  },
  {
    title: 'InnovArt — Design Resources for Designers',
    lottieUrl: '/images/SchoolProjects/innovart.json',
    gradientClass: 'gradient-innovart',
    link: 'https://innovart.vercel.app/',
    tags: ['School', 'Web'],
    category: 'Other',
    external: true,
  },
  {
    title: 'uOttaHack 7',
    imageUrl: '/images/Personal/Thumbo7.png',
    link: 'https://2025.uottahack.ca/',
    tags: ['Leadership', 'Branding'],
    category: 'Leadership',
    external: true,
  },
  {
    title: 'uOttaHack 6',
    imageUrl: '/images/Personal/Thumb06.png',
    link: 'https://2024.uottahack.ca/',
    tags: ['Leadership', 'Branding'],
    category: 'Leadership',
    external: true,
  },
  {
    title: 'uOttaHack 5',
    imageUrl: '/images/Personal/Thumb05.png',
    link: 'https://2023.uottahack.ca/',
    tags: ['Leadership', 'Branding'],
    category: 'Leadership',
    external: true,
  },
];

const easeIn = [0.42, 0, 1, 1] as const;

const LottieThumb = ({ url, title, gradientClass }: { url: string; title: string; gradientClass?: string }) => {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (data) {
    return <Lottie animationData={data} loop autoplay className="w-full h-auto" />;
  }

  return (
    <div
      className={`w-full aspect-[16/9] flex items-center justify-center ${gradientClass ? `${gradientClass} animated-gradient` : 'bg-[#E8E8E8]'}`}
    >
      <span className="font-vietnam text-sm text-white px-4 text-center">{title}</span>
    </div>
  );
};

const VideoThumb = ({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.playbackRate = 0.75;
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      autoPlay
      playsInline
      loop
      preload="auto"
      aria-label={title}
      className="w-full h-auto block pointer-events-none transition-transform duration-500 ease-in group-hover:scale-[1.02]"
    />
  );
};

const WorkCard = ({ item, index }: { item: WorkItem; index: number }) => {
  const isCaseStudy = item.category === 'Product Design' && !item.external;
  const showTitle = isCaseStudy || Boolean(item.lottieUrl);

  return (
    <motion.a
      key={item.title}
      href={item.link}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      data-cursor={isCaseStudy ? 'case-study' : undefined}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.55, ease: easeIn, delay: index * 0.05 }}
      className="break-inside-avoid block group relative overflow-hidden rounded-[10px] bg-[#E8E8E8] border border-[rgb(229,229,229)]"
      onMouseEnter={e => {
        const video = e.currentTarget.querySelector('video');
        if (!video) return;
        video.muted = true;
        video.playbackRate = 0.75;
        video.play().catch(() => {});
      }}
    >
      <div className="relative w-full overflow-hidden">
        {item.videoUrl ? (
          <VideoThumb src={item.videoUrl} poster={item.imageUrl} title={item.title} />
        ) : item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto block transition-transform duration-500 ease-in group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : item.lottieUrl ? (
          <LottieThumb
            url={item.lottieUrl}
            title={item.title}
            gradientClass={item.gradientClass}
          />
        ) : null}

        {isCaseStudy && item.status && (
          <span className="absolute top-3 right-3 z-10 font-vietnam text-[11px] uppercase tracking-[0.14em] text-black/55 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
            {item.status}
          </span>
        )}

        {item.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 opacity-0 translate-y-1 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="bg-white/90 backdrop-blur-sm text-[11px] font-vietnam text-black px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {showTitle && (
        <div className="bg-white px-4 py-3.5">
          <h3 className="font-vietnam text-sm text-black leading-snug">{item.title}</h3>
        </div>
      )}
    </motion.a>
  );
};

const WorkGrid: React.FC = () => {
  const [active, setActive] = useState<Category>('All');

  const { caseStudies, rest } = useMemo(() => {
    if (active === 'All') {
      return {
        caseStudies: works.filter(item => item.category === 'Product Design'),
        rest: [...works]
          .filter(item => item.category !== 'Product Design')
          .sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category]),
      };
    }

    const items = works.filter(item => item.category === active);
    if (active === 'Product Design') {
      return { caseStudies: items, rest: [] as WorkItem[] };
    }
    return { caseStudies: [] as WorkItem[], rest: items };
  }, [active]);

  return (
    <section className="w-full pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeIn, delay: 0.25 }}
        className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 md:mb-10 font-vietnam text-sm text-black/70"
      >
        {filters.map(filter => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`pb-1 transition-colors border-b-2 ${
              active === filter
                ? 'text-black font-medium border-black'
                : 'border-transparent hover:text-black'
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <div className="space-y-5 md:space-y-6">
        {caseStudies.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {caseStudies.map((item, index) => (
                <WorkCard key={item.title} item={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {rest.length > 0 && (
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {rest.map((item, index) => (
                <WorkCard key={item.title} item={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;
