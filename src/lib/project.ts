import { projects } from "@/config/Projects";
import {
  ProjectCaseStudy,
  ProjectCaseStudyFrontmatter,
  ProjectCaseStudyPreview,
} from "@/types/project";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "src/data/projects");

export function getProjectCaseStudySlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectCaseStudyBySlug(
  slug: string,
): ProjectCaseStudy | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as ProjectCaseStudyFrontmatter;
    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }
    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading project case study for slug: ${slug}`, error);
    return null;
  }
}

export function getAllProjectCaseStudies(): ProjectCaseStudyPreview[] {
  const slugs = getProjectCaseStudyBySlug();

  const caseStudies = slugs
    .map((slug) => {
      const caseStudy = getProjectCaseStudyBySlug(slug);
      if (!caseStudy) return null;
      return {
        slug: caseStudy.slug,
        frontmatter: caseStudy.frontmatter,
      };
    })
    .filter((caseStudy): caseStudy is ProjectCaseStudyPreview => caseStudy !== null);
    .sort((a,b)=>{
        if(a.frontmatter.featured && !b.frontmatter.featured) return -1;
        if(!a.frontmatter.featured && b.frontmatter.featured) return 1;
        return a.frontmatter.title.localeCompare(b.frontmatter.title)
    })
    return caseStudies
}

export function getPublishedProjectCaseStudies():ProjectCaseStudyPreview[]{
    const allCaseStudies = getAllProjectCaseStudies();
    return allCaseStudies.filter(caseStudy => caseStudy.frontmatter.isPublished)
}

export function getProjectCaseStudiesByTechnology(technology: string):ProjectCaseStudyPreview[]{
    const publishedCaseStudies = getPublishedProjectCaseStudies();
    return publishedCaseStudies.filter((caseStudy) => caseStudy.frontmatter.technologies.some((tech)=>tech.toLowerCase()===technology.toLowerCase()))
}
export function getAllTechnologies():string[]{
    const publishedCaseStudies = getPublishedProjectCaseStudies();
    const technologiesSet = new Set<string>();

    publishedCaseStudies.forEach((caseStudy)=>{
        caseStudy.frontmatter.technologies.forEach((tech)=>{
            technologiesSet.add(tech.toLowerCase())
        })
    })
    return Array.from(technologiesSet).sort()
}