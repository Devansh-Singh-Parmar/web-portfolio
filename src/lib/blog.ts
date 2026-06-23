import { BlogFronmatter, BlogPost, BlogPostPreview } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogDirectory = path.join(process.cwd(), "src/data/blog");

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as BlogFronmatter;

    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`Invalid Frontmatter in ${slug}.mdx`);
    }
    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPostPreview[] {
  const slugs = getBlogPostSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getBlogPostBySlug(slug);
      if (!post) return null;

      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
      };
    })
    .filter((post): post is BlogPostPreview => post !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });

  return posts;
}
