export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];

  github?: string;
  live: string;
  details: boolean;
  projectsDetailsPageSlug: string;
  isWorking: boolean;
}

export interface ProjectsCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  timeline: string;
  role: string;
  team?: string;
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished: boolean;
}

export interface ProjectsCaseStudy {
  slug: string;
  frontmatter: ProjectsCaseStudyFrontmatter;
  content: string;
}

export interface ProjectsCaseStudyPreview {
  slug: string;
  frontmatter: ProjectsCaseStudyFrontmatter;
}
