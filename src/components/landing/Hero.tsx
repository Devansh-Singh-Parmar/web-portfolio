import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import Container from "../common/Container";
import Skill from "../common/Skill";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";
import { Button } from "../ui/button";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, occupations, location, avatar, skills, description, buttons } =
    heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };
  return (
    <Container className="mx-auto max-w-5xl">
      <Image
        src={avatar}
        alt=""
        width={100}
        height={100}
        className="size-24 shrink-0 rounded-full bg-blue-300 dark:bg-yellow-300"
      />
      <div className="mt-8 flex max-w-2xl flex-col gap-4 sm:gap-5">
        <h1 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {name}
        </h1>

        <p className="text-base leading-relaxed text-pretty text-neutral-500 sm:text-lg dark:text-neutral-400">
          <span className="block sm:inline">{occupations.join("")}</span>
          <span className="hidden sm:inline" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <span className="mt-0.5 block sm:mt-0 sm:inline">{location}</span>
        </p>

        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-neutral-500 whitespace-pre-wrap md:text-lg dark:text-neutral-400">
          {renderDescription()}
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
              className={cn(
                "w-full justify-center sm:w-auto",
                button.variant === "outline" && "inset-shadow-indigo-500",
                button.variant === "default" && "inset-shadow-indigo-500",
              )}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            title={link.name}
            className="text-secondary flex items-center gap-2"
          >
            <span className="size-6">{link.icon && <link.icon />}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
