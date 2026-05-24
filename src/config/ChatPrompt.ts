import { about } from "./About";
import { experiences } from "./Experience";
import { heroConfig, socialLinks } from "./Hero";

function generateSystemPrompt(): string {
  const skillName = heroConfig.skills.map((skill) => skill.name).join(", ");
  const socialLinksText = socialLinks
    .map((link) => `${link.name}: ${link.href}`)
    .join("\n- ");
  const experienceText = experiences.map(
    (exp) =>
      `${exp.position} at ${exp.company} (${exp.startDate}-${exp.endDate})`,
  );
  .join('\n- ')
//   lemme add projects and achievements here later
}
