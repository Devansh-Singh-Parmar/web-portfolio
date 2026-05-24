import { about } from "./About";
import { heroConfig } from "./Hero";

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}

export const siteConfig = {
  name: heroConfig.name,
  title: "Portfolio",
  description: "A modern portfolio website built with React and TypeScript.",
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  ogImage: "/meta/opengraph-image.png",
  author: {
    name: about.name,
    twitter: "@devanshpar",
    github: "Devansh-Singh-Parmar",
    linkedin: "devanshsingh13",
    email: "devansh18dp@gmail.com",
  },
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "react",
    "typescript",
    "nextjs",
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  "/": {
    title: `${heroConfig.name} · ${heroConfig.occupations.join(",")}`,
    description: `${about.description} Explore my projects, skills, and experience in tech :).`,
    keywords: [
      "portfolio",
      "developer",
      "full-stack",
      "react",
      "typescript",
      "nextjs",
    ],
    ogImage: "/meta/hero.png",
    twitterCard: "summary_large_image",
  },
  "/contact": {
    title: "Contact",
    description: "Get in touch with me!",
    keywords: ["contact", "hire", "collaboration", "developer"],
    ogImage: "/assests/logo.jpeg",
    twitterCard: "summary",
  },
  "/work-experience": {
    title: "Work Experience",
    description:
      "Explore my professional journey and experience in the tech industry.",
    keywords: ["work experience", "professional journey", "tech industry"],
    ogImage: "/meta/work.png",
    twitterCard: "summary_large_image",
  },

  "/projects": {
    title: "Projects",
    description: "Explore my projects and contributions in the tech world.",
    keywords: ["projects", "contributions", "tech world"],
    ogImage: "/meta/projects.png",
    twitterCard: "summary_large_image",
  },

  "/blog": {
    title: "Blog",
    description:
      "Read my latest thoughts and insights on technology and development.",
    keywords: ["blog", "technology", "development", "insights"],
    ogImage: "/meta/blog.png",
    twitterCard: "summary_large_image",
  },
  "/resume": {
    title: "Resume",
    description:
      "View and download my resume to learn more about my skills and experience.",
    keywords: ["resume", "CV", "skills", "experience"],
    ogImage: "/meta/resume.png",
    twitterCard: "summary",
  },
  "/gears": {
    title: "Gears",
    description: "Explore the tools and technologies I use in my projects.",
    keywords: ["gears", "tools", "technologies", "projects"],
    ogImage: "/meta/gears.png",
    twitterCard: "summary_large_image",
  },
  "/setup": {
    title: "Setup",
    description:
      "Learn about the tools and technologies I use in my development setup.",
    keywords: [
      "setup",
      "development",
      "tools",
      "technologies",
      "vscode",
      "terminal",
      "dotfiles",
    ],
    ogImage: "/meta/setup.png",
    twitterCard: "summary_large_image",
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata["/"];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);
  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(","),
    authors: [{ name: siteConfig.author.name }],
    creators: siteConfig.author.name,
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
