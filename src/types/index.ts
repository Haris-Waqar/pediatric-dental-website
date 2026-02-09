export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface ActionCard {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  hours: {
    days: string;
    time: string;
  }[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  address: ContactInfo;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}
