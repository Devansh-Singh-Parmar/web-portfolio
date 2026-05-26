"use client";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { ArrowUp } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function BackToTop() {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (isMobile()) {
      triggerHaptic("light");
    }
  };
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={handleClick}
          className="fixed right-10 bottom-4 z-50 bg-white hover:cursor-pointer md:right-20 dark:bg-black"
        >
          <ArrowUp className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Back to Top</p>
      </TooltipContent>
    </Tooltip>
  );
}
