export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  location: string;
  email: string;
  phone: string;
}

export interface Skill {
  name: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
}

export interface Link {
  id: string;
  name: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  summary: string;
  links: Link[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  awards: Award[];
}