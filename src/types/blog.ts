export interface BlogFronmatter {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  isPublished: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFronmatter;
  content: string;
}

export interface BlogPostPreview {
  slug: string;
  frontmatter: BlogFronmatter;
}
