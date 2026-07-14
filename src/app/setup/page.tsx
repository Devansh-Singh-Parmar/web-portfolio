import Container from "@/components/common/Container";
import Code from "@/components/svgs/Code";
import { Separator } from "@/components/ui/separator";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { editor, extensions, themeAndFont } from "@/config/Setup";
import { ArrowUpRight, Palette, Puzzle } from "lucide-react";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import React from "react";

export const metadata: Metadata = {
  ...getMetadata("/setup"),
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
};

export default function SetupPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            VS Code / Cursor Setup
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            The editor, extensions, and tweaks I use daily.
          </p>
        </div>
        <Separator />

        {/* Editor Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Editor</h2>
          <div className="flex flex-col flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
                <Code className="size-4" />
              </div>
              <h3 className="text-secondary ml-4 flex items-center gap-1 text-sm">
                <Link target="_blank" href={editor.href}>
                  {editor.name}
                </Link>
                <ArrowUpRight className="size-4" />
              </h3>
            </div>
          </div>
        </div>

        {/* Extensions Section */}
        <div className="space-y-4 pt-10">
          <div className="flex items-center gap-4">
            <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
              <Puzzle className="size-4" />
            </div>
            <h2 className="text-2xl font-semibold">Extensions</h2>
          </div>
          <div className="mt-8 flex flex-col flex-wrap gap-4">
            {extensions.map((extension, index) => (
              <div key={extension.name} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 px-2 py-1 text-[#736F70] dark:border-white/10">
                    <span className="text-secondary text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-secondary ml-4 flex items-center gap-1 text-sm">
                    <Link target="_blank" href={extension.href}>
                      {extension.name}
                    </Link>
                    <ArrowUpRight className="size-4" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theme & Font Section */}
        <div className="space-y-4 pt-10">
          <div className="flex items-center gap-4">
            <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
              <Palette className="size-4" />
            </div>
            <h2 className="text-2xl font-semibold">Theme &amp; Font</h2>
          </div>
          <div className="mt-8 flex flex-col flex-wrap gap-4">
            {themeAndFont.map((item, index) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 px-2 py-1 text-[#736F70] dark:border-white/10">
                    <span className="text-secondary text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-secondary ml-4 flex items-center gap-1 text-sm">
                    <Link target="_blank" href={item.href}>
                      {item.name}
                    </Link>
                    <ArrowUpRight className="size-4" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
