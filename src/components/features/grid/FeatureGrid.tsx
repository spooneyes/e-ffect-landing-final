import React, { useEffect } from "react";
import { Content } from "./Content";
import { DragCloseDrawer } from "@/components/modal/DragCloseDrawer";
import { AiContent } from "./ModalContent/AiContent";

export const FeatureGrid = () => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    console.log("draw changed", open);
  }, [open]);

  return (
    <div id="features" className="relative overflow-hidden">
      <Content isOpen={open} setOpen={setOpen} />

      {open && (
        <>
          <DragCloseDrawer open={open} setOpen={setOpen}>
            <AiContent />
          </DragCloseDrawer>
        </>
      )}

      {/* <CornerBlur /> */}
      {/* <CornerGrid /> */}
    </div>
  );
};
