import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { LongCard } from "./LongCard";
import { SimpleGrid } from "./SimpleGrid";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";

export const Content = ({
  setOpen,
  setOpen2,
}: {
  setOpen: (open: boolean) => void;
  setOpen2: (open: boolean) => void;
}) => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            Play Smarter
            <br />
            <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Not Harder
            </span>
          </SectionHeading>
          <SectionSubheading>
            What makes W4P the best platform for learning and sharing?
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid setOpen={setOpen} setOpen2={setOpen2} />
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-blue-400/50 to-blue-800/0 md:my-20" />
        <SimpleGrid />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = ({
  setOpen,
  setOpen2,
}: {
  setOpen: (open: boolean) => void;
  setOpen2: (open: boolean) => void;
}) => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 setOpen={setOpen} />
      <MiniCard2 setOpen={setOpen2} />
      <LongCard />
    </div>
  </div>
);
