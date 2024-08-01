"use client";

import { TextGenerateEffect } from "./typewriter";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Elevate",
    },
    {
      text: "your",
    },
    {
      text: "music",
    },
    {
      text: "with",
    },
    {
      text: "a",
    },
    {
      text: "touch",
    },
    {
      text: "using",
    },
    {
      text: "W4P.",
      className: "text-[#ffaa40]",
    },
  ];
  return (
    <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
