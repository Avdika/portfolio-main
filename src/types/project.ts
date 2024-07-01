export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  imageFolder?: string;
  links: { name: string; url: string }[];
}
