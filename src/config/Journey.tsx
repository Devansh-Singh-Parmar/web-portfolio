import Calender from "@/components/svgs/Calendar";
import { CertificateIcon } from "@phosphor-icons/react";
import React from "react";

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: "My Journey",
    description: "Overview of learning and career journey",
    icon: Calender,
    href: "/journey",
  },
  {
    name: "Certificates & Achievements",
    description: "A curated list of certificated and achievements",
    icon: CertificateIcon,
    href: "/journey/certificates",
  },
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;
