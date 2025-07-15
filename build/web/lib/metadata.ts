import metadata from '../metadata.json';

export interface NavigationItem {
  link: string;
  title: string;
  target?: "_blank";
}

export interface FooterLink {
  title: string;
  link: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SiteMetadata {
  site: {
    name: string;
    description: string;
    logo: string;
    copyright: string;
  };
  navigation: {
    main: NavigationItem[];
    auth: NavigationItem[];
  };
  footer: {
    links: FooterLink[];
    social: SocialLink[];
  };
  challenge: {
    title: string;
    description: string;
    skills: string[];
    points: number;
  };
  cta: {
    label: string;
    link: string;
  };
}

export function getMetadata(): SiteMetadata {
  return metadata as SiteMetadata;
}

export function getNavigationItems(): NavigationItem[] {
  return getMetadata().navigation.main;
}

export function getAuthItems(): NavigationItem[] {
  return getMetadata().navigation.auth;
}

export function getFooterLinks(): NavigationItem[] {
  return getNavigationItems();
}

export function getSocialLinks(): SocialLink[] {
  return getMetadata().footer.social;
}

export function getSiteInfo() {
  return getMetadata().site;
}

export function getCTA() {
  return getMetadata().cta;
} 