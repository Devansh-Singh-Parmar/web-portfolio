import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";

import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";

import ReactIcon from "@/components/technologies/ReactIcon";
import TypeScript from "@/components/technologies/TypeScript";

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  JavaScript: JavaScript,
};

export const heroConfig = {
  name: "Devansh Singh Parmar",
  occupations: ["Full Stack Developer", "XYZ HERE"],
  location: "Earth",
  avatar: "/assets/logo.jpeg",

  skills: [
    {
      name: "TypeScript",
      component: TypeScript,
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  description: {
    template:
      "I <b>build</b> this I build that okay I am a full stack developer with a passion for creating web applications. I have experience with a variety of technologies, including TypeScript, React, Next.js, PostgreSQL, Node.js, and MongoDB. I am always looking to learn new technologies and improve my skills.",
  },
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume.pdf",
      icon: "CV",
      external: true,

    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
      external: false,

    },
  ],
};

export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/devanshpar",
    icon: X,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devanshsingh13/",
    icon: LinkedIn,
  },
  {
    name: "Github",
    href: "https://github.com/Devansh-Singh-Parmar",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:devansh18dp@gmail.com",
    icon: Mail,
  },
];
