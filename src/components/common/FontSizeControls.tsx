"use client";

import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { Minus, Plus, Settings } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function FontSizeControls() {
  const [fontSize, setFontSize] = useState<number>(16);

  const { triggerHaptic, isMobile } = useHapticFeedback();
  useEffect(() => {
    const savedFontSize = localStorage.getItem("blog-font-size");
    if (savedFontSize) {
      const size = parseInt(savedFontSize, 10);
      setFontSize(size);
      applyFontSize(size);
    }
  }, []);

  const applyFontSize = (size: number) => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(
        "--blog-font-size",
        `${size}px`,
      );
    }
  };

  const updateFontSize = (newSize: number) => {
    const clampedSize = Math.max(12, Math.min(24, newSize));
    setFontSize(clampedSize);
    applyFontSize(clampedSize);
    localStorage.setItem("blog-font-size", clampedSize.toString());
  };
  const handleIncrease = () => {
    if (isMobile()) {
      triggerHaptic("light");
    }
    updateFontSize(fontSize + 2);
  };
  const handleDecrease = () => {
    if (isMobile()) {
      triggerHaptic("light");
    }
    updateFontSize(fontSize - 2);
  };
  const handleReset = () => {
    if (isMobile()) {
      triggerHaptic("medium");
    }
    updateFontSize(16);
  };
  return (
    <>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-background/95 border-border hover:bg-accent fixed bottom-4 left-4 z-50 h-12 w-12 rounded-full border shadow-lg backdrop-blur-sm"
              aria-label="Open font size controls"
            >
              <Settings size={20} />
            </Button>
          </DrawerTrigger>
        </Drawer>
      </div>
    </>
  );
}
