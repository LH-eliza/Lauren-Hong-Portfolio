import React from 'react';
import { Github } from 'lucide-react';

interface CaseStudyProps {
  title?: string;
  subtitle?: string;
  metadata?: {
    period?: string;
    timeline?: string;
    role?: string;
    collaborator?: string;
    team?: string;
    scope?: string;
    tools?: string;
    context?: string;
    platform?: string;
    status?: string;
  };
  /** Ordered custom rows. When provided, replaces default metadata layout. */
  metaRows?: { label: string; value: string }[];
  githubLink?: string;
  projectLink?: string;
  heroImage?: string;
  hideHero?: boolean;
}

const defaultProps: CaseStudyProps = {
  title: 'Case Study',
  subtitle: '',
  metadata: {},
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="md:col-span-1">
    <h2 className="text-3xl text-[#EA6C3A] font-chewie">{title}</h2>
  </div>
);

const isSoloTeam = (team?: string) => {
  if (!team) return true;
  const normalized = team.trim().toLowerCase();
  return normalized === 'solo' || normalized.startsWith('solo ');
};

const Header: React.FC<CaseStudyProps> = props => {
  const { title, subtitle, metadata, metaRows, githubLink, projectLink, heroImage, hideHero } = {
    ...defaultProps,
    ...props,
  };

  const meta = metadata || {};
  const timeline = meta.timeline || meta.period;
  const showTeam = Boolean(meta.team) && !isSoloTeam(meta.team);

  let metaItems: { label: string; value: string }[] = metaRows ? [...metaRows] : [];
  if (!metaRows) {
    if (meta.context) metaItems.push({ label: 'Context', value: meta.context });
    if (meta.platform) metaItems.push({ label: 'Platform', value: meta.platform });
    if (meta.collaborator) metaItems.push({ label: 'Collaborator', value: meta.collaborator });
    else if (meta.role) metaItems.push({ label: 'Role', value: meta.role });
    if (showTeam && meta.team) metaItems.push({ label: 'Team', value: meta.team });
    if (timeline) metaItems.push({ label: 'Timeline', value: timeline });
    if (meta.scope) metaItems.push({ label: 'Scope', value: meta.scope });
    if (meta.status) metaItems.push({ label: 'Status', value: meta.status });
    if (meta.tools) metaItems.push({ label: 'Tools', value: meta.tools });
  }

  const metaCols =
    metaItems.length <= 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : metaItems.length === 3
        ? 'grid-cols-1 sm:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="w-full pb-10 md:pb-14">
      <h1 className="text-4xl md:text-5xl mb-4 font-castoro text-[#5F5F5F] leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 mb-8 font-vietnam max-w-3xl">{subtitle}</p>
      )}

      {metaItems.length > 0 && (
        <div className={`grid ${metaCols} gap-x-8 gap-y-6 mb-8`}>
          {metaItems.map(item => (
            <div key={item.label}>
              <h3 className="text-sm text-[#5F5F5F] mb-2 font-castoro">{item.label}</h3>
              <p className="font-vietnam text-[#5F5F5F] text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EA6C3A] text-white px-6 py-3 rounded-lg hover:bg-[#d55c2d] transition-colors mb-16 font-chewie inline-flex items-center gap-2"
        >
          View Repo
          <Github className="w-5 h-5" />
        </a>
      )}

      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EA6C3A] text-white px-6 py-3 rounded-lg hover:bg-[#d55c2d] transition-colors ml-6 mb-16 font-chewie inline-flex items-center gap-2"
        >
          View Website
        </a>
      )}

      {!hideHero && heroImage && (
        <div className={githubLink || projectLink ? '' : 'mt-2'}>
          <img src={heroImage} alt={title} className="w-full rounded-3xl" />
        </div>
      )}
    </div>
  );
};

export { SectionHeader };
export default Header;
