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
  description: string;
  thumbnail: string;
  stack: string[];
  github?: string;
  demo?: string;
  url?: string;
}
