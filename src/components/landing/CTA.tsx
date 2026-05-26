"use client";

import { ctaConfig } from "@/config/CTA";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import Container from "../common/Container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface CallToActionProps {
  profileImage?: string;
  profileAlt?: string;
  linkText?: string;
  calLink?: string;
  preText?: string;
}

export default function CTA({
  profileImage = ctaConfig.profileImage,
  profileAlt = ctaConfig.profileAlt,
  linkText = ctaConfig.linkText,
  calLink = ctaConfig.calLink,
  preText = ctaConfig.preText,
}: CallToActionProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const [showCalPopup, setShowCalPopup] = useState(false);

  useEffect(() => {
    const cal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi("on", {
            action: "bookingSuccessful",
            callback: () => {
              setShowCalPopup(false);
            },
          });
        }
      } catch (error) {
        console.error("Failed to intialize Cal API:", error);
      }
    };
    cal();
  }, []);

  const handleButtonClick = () => {
    if (isMobile()) {
      triggerHaptic("medium");
    }
    setShowCalPopup(true);
  };
  return (
    <>
      <Container className="mt-20 rounded-md border border-dashed border-black/20 py-8 dark:border-white/10">
        <div className="mt-6 w-full flex-col px-6 pb-8 sm:fkex sm:flex sm:items-center sm:justify-between sm:px-12">
          <p className="mb-4 text-center text-base opacity-50 sm:mb-3 md:text-xl">
            {" "}
            {preText}{" "}
          </p>
          <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
            <div
              className="group inline-flex cursor-pointer items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all dark:border-white/30 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)]"
              onClick={handleButtonClick}
            >
              <div className="relative z-20 flex items-center gap-2 trnasition-all duration-300 group-hover:gap-8">
                <div className="h-5 w-5 flex-shrink-0overflow-hidden rounded-full">
                  <Image alt={profileAlt} src={profileImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
