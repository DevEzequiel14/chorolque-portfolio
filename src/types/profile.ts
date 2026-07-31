export interface Strength {
  title: string;
  description: string;
}

export interface Experience {
  charge: string;
  company: string;
  description: string;
  date: string;
}

export interface Education {
  career: string;
  university: string;
  description: string;
  technologies: string;
  year: string;
}

export interface ProfileInfo {
  name: string;
  description: string;
  about: string;
  email: string;
  history: string;
  actually: string;
  strengths: Strength[];
  experiences: Experience[];
  education: Education;
}
