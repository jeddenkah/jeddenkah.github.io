export interface Experience {
  company: string;
  division?: string;
  location: string;
  role: string;
  period: string;
  description?: string[];
  stack: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
  thesis: {
    title: string;
    stack: string[];
  };
  highlights: string[];
}

export interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  metrics?: { label: string; value: string; colorToken?: string }[];
  accentColor: string;
  iconName?: string;
}

export interface Certification {
  name: string;
  year: string;
  issuer: string;
  category: string;
}

export interface Organization {
  role: string;
  organization: string;
  period: string;
  description: string;
}
