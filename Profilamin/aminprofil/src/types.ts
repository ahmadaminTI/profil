export type TabType = 'overview' | 'matrix' | 'projects' | 'contact';

export interface LanguageSkill {
  id: string;
  name: string;
  percentage: number;
  badge: string;
  badgeType: 'prod' | 'mastery' | 'optimal' | 'safety' | 'systems' | 'enterprise' | 'mobile' | 'apple' | 'modern' | 'auto' | 'data' | 'cross';
  category: 'systems' | 'web' | 'data' | 'devops';
  gradient: string;
  glowColor: string;
  frameworks: string[];
  extraBadge?: string;
}

export interface ProjectItem {
  id: string;
  path: string;
  title: string;
  stars?: string;
  statusBadge: string;
  statusType: 'production' | 'stores' | 'enterprise' | 'cli';
  description: string;
  image?: string;
  altText?: string;
  telemetryLeft: {
    icon: string;
    text: string;
  };
  telemetryRight: string;
  coverageLabel: string;
  coveragePercentage: number;
  coverageGradient: string;
  stackTags: {
    name: string;
    level?: string;
    color?: string;
  }[];
  categories: string[];
  terminalSnippet?: {
    command: string;
    result: string;
  };
}

export interface SocialLink {
  label: string;
  handle: string;
  icon: string;
  url: string;
  isAction?: boolean;
}
