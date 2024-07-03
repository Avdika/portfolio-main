export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  imageInfo: {
    folderPath: string;
    count: number;
  };
  links: {
    name: string;
    url: string;
  }[];
}
