import React from "react";
import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import { CornerBlur } from "@/components/utils/CornerBlur";
import { FaCirclePlus } from "react-icons/fa6";

export const MiniCard2 = ({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>COMPOnents</CalloutChip>
        <p className="mb-1.5 text-2xl">Focus into the product</p>
        <p className="text-zinc-400">
          The W4P features a stunning anodized aluminum unibody, with
          laser-engraved graphics that never fade.
        </p>

        <div className="absolute -bottom-2 left-2 right-2 z-10 flex h-44 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <img src="/model1.png" alt="Model 1" className="h-full" />

          <FaCirclePlus
            onClick={() => setOpen(true)}
            className="absolute bottom-4 left-4  cursor-pointer text-[#1F9AF1]"
            size={22}
          />
        </div>

        <CornerBlur />
      </Card>
    </div>
  );
};
