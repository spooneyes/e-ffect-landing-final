import React from "react";
import { IoInfinite } from "react-icons/io5";

import { IconType } from "react-icons";
import { BiSolidGuitarAmp } from "react-icons/bi";
import { BsMusicNoteList } from "react-icons/bs";
import { GiSoundWaves, GiGuitar } from "react-icons/gi";
import { SiAlwaysdata } from "react-icons/si";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={GiSoundWaves}
      title="Effects"
      subtitle="Original Effects, Infinite Possibilities: Craft Your Sound!"
    />
    <Item
      Icon={BiSolidGuitarAmp}
      title="Amps"
      subtitle="Discover a wide range of amps to create your unique sound."
    />
    <Item
      Icon={IoInfinite}
      title="Looper"
      subtitle="Focuses on mastering the art of looping to create dynamic music."
    />
    <Item
      Icon={BsMusicNoteList}
      title="Tabs creation"
      subtitle="Highlights the quick conversion from musical ideas to written tabs."
    />
    <Item
      Icon={SiAlwaysdata}
      title="Live metrics"
      subtitle="Using data to refine and perfect performances."
    />
    <Item
      Icon={GiGuitar}
      title="Challenges"
      subtitle="Encourage the fun and competitive aspect of sharing and challenging friends with musical creations"
    />
  </div>
);

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-blue-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
