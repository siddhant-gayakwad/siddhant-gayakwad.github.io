export interface PersonalInfo {
  name: string;
  tagline: string;
  title: string;
  intro: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  headshotUrl: string;
  availability: string;
  awsProfileUrl?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  isExploring?: boolean;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'kubernetes' | 'cicd' | 'cloud' | 'monitoring' | 'all';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  architectureDetails: string[];
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  type: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
  highlights?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expires?: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeImageUrl?: string;
  category?: 'certification' | 'badge' | 'quest';
  status: 'achieved' | 'exploring';
  badgeType: 'aws' | 'gcp' | 'k8s' | 'linux';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface LinkedInPost {
  id: string;
  title: string;
  category: string;
  date: string;
  caption: string;
  image: string;
  badge: string;
  linkedinUrl: string;
}
