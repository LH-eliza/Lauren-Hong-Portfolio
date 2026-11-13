import React from 'react';
import { Github } from 'lucide-react';
import ZoomImage from '../components/ZoomImage';

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
    <h2 className="text-3xl text-[#EA6C3A] font-castoro normal-case">{title}</h2>
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
      : 'grid-cols-1 sm:grid-cols-2 wide:grid-cols-4';

  return (
    <div className="w-full pb-10 md:pb-14">
      <h1 className="mb-4 font-castoro text-[clamp(1.85rem,6.4vw,3rem)] font-medium text-[#5F5F5F] leading-tight normal-case">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 mb-8 font-vietnam max-w-3xl">{subtitle}</p>
      )}

      {metaItems.length > 0 && (
        <div className={`grid ${metaCols} gap-x-6 gap-y-5 sm:gap-x-8 sm:gap-y-6`}>
          {metaItems.map(item => (
            <div key={item.label} className="min-w-0">
              <h3 className="text-sm text-[#5F5F5F] font-vietnam uppercase tracking-wide">{item.label}</h3>
              <p className="font-vietnam text-[#5F5F5F] text-sm leading-relaxed break-words">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {(githubLink || projectLink) && (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EA6C3A] px-6 py-3 font-vietnam text-white transition-colors hover:bg-[#d55c2d] sm:justify-start"
            >
              View Repo
              <Github className="h-5 w-5" />
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EA6C3A] px-6 py-3 font-vietnam text-white transition-colors hover:bg-[#d55c2d] sm:justify-start"
            >
              View Website
            </a>
          )}
        </div>
      )}

      {!hideHero && heroImage && (
        <div className="mt-8">
          <ZoomImage src={heroImage} alt={title || ''} className="rounded-3xl" />
        </div>
      )}
    </div>
  );
};

export { SectionHeader };
export default Header;
