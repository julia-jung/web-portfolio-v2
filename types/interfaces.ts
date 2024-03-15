export interface Experience {
  id: number;
  start: string;
  end: string;
  duration: string;
  company: string;
  location: string;
  link: string;
  role: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  name: string;
  github?: string;
  demo?: string;
  stack: string[];
}