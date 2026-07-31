import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  type: string;
  slug: string;
  image: ImageMetadata;
  company: string;
  rol: string;
  technologies: string[];
  timeline: string;
  description: string;
  context: string;
  link: string;
  github: string;
}
