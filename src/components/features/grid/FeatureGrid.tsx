import React, { useEffect } from "react";
import { Content } from "./Content";
import { DragCloseDrawer } from "@/components/modal/DragCloseDrawer";
import { AiContent } from "./ModalContent/AiContent";
import { BouncyCardsFeatures } from "./ModalContent/ProductContent";

export const FeatureGrid = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div id="features" className="relative overflow-hidden">
      <Content setOpen={setOpen} setOpen2={setOpen2} />

      {open && (
        <>
          <DragCloseDrawer open={open} setOpen={setOpen}>
            <AiContent />
          </DragCloseDrawer>
        </>
      )}
      {open2 && (
        <>
          <DragCloseDrawer open={open2} setOpen={setOpen2}>
            <BouncyCardsFeatures />
          </DragCloseDrawer>
        </>
      )}

      {/* <CornerBlur /> */}
      {/* <CornerGrid /> */}
    </div>
  );
};
