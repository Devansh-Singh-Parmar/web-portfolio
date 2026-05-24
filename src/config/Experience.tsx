import AWS from "@/components/technologies/AWS";
import BootStrap from "@/components/technologies/BootStrap";
import CSS from "@/components/technologies/CSS";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import Html from "@/components/technologies/Html";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Postman from "@/components/technologies/Postman";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: true,
    company: "McDonalds",
    position: "Yapper",
    location: "Remote",
    image: "/experience/mcdonalds.png",
    description: [
      "I Yapped there lorem",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    startDate: "August 2020",
    endDate: "Present",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
      {
        name: "AWS",
        href: "https://aws.amazon.com/",
        icon: <AWS />,
      },
      {
        name: "Postman",
        href: "https://www.postman.com/",
        icon: <Postman />,
      },
    ],
    website: "#",
    github: "#",
    x: "#",
  },
  {
    isCurrent: false,
    company: "PizzaHut",
    position: "Yapper",
    location: "Remote",
    image: "/experience/pizzahut.png",
    description: [
      "I Yapped there lorem",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    startDate: "August 2020",
    endDate: "Sep 2020",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
    ],
    website: "pizzahut.com",
    github: "#",
    x: "#",
    linkedin: "#",
  },
  {
    isCurrent: false,
    company: "PizzaHut",
    position: "Yapper",
    location: "Remote",
    image: "/experience/pizzahut.png",
    description: [
      "I Yapped there lorem",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    startDate: "August 2020",
    endDate: "Sep 2020",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
    ],
    website: "pizzahut.com",
    github: "#",
    x: "#",
    linkedin: "#",
  },
  {
    isCurrent: false,
    company: "PizzaHut",
    position: "Yapper",
    location: "Remote",
    image: "/experience/pizzahut.png",
    description: [
      "I Yapped there lorem",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    startDate: "August 2020",
    endDate: "Sep 2020",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
    ],
    website: "pizzahut.com",
    github: "#",
    x: "#",
    linkedin: "#",
  },
  {
    isCurrent: false,
    company: "PizzaHut",
    position: "Yapper",
    location: "Remote",
    image: "/experience/pizzahut.png",
    description: [
      "I Yapped there lorem",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    startDate: "August 2020",
    endDate: "Sep 2020",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
    ],
    website: "pizzahut.com",
    github: "#",
    x: "#",
    linkedin: "#",
  },
];
