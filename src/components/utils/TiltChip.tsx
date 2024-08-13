import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const TiltChipLink = ({ children }: { children: string }) => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-zinc-900/20 ">
      <a
        href="#"
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-zinc-900  bg-zinc-900/20 p-0.5 text-sm transition-transform hover:-rotate-2"
      >
        <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
          HEY!
        </span>
        <span className="ml-1.5 mr-1 inline-block">{children}</span>
        <FiArrowUpRight className="mr-2 inline-block" />
      </a>
    </div>
  );
};
