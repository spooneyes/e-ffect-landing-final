import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="What makes the W4P guitar pedal special?" defaultOpen>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="What makes the W4P guitar pedal special?">
          <p>
            Learning Mode lets you load tabs and play along with the original
            effects, recreating the Guitar Hero experience in real life. You can
            also create tabs directly on the pedal, perfect for beginners and
            advanced players alike.
          </p>
        </Question>
        <Question title="How can I create and share my own guitar tabs and presets?">
          <p>
            Create tabs by manually editing them or just play to record, and our
            algorithm will instantly create your tab! Share your creations with
            the community through the pedal or mobile app, which acts as a
            social hub for tracking activities and showcasing your work.
          </p>
        </Question>
        <Question title="What are the key specifications and technical details of the W4P pedal?">
          <p>
            The W4P is packed with effects like overdrive, fuzz, distortion,
            boost, and reverb. It also features amp simulations for blues, rock,
            and jazz styles. Our algorithm can recreate the original guitar
            effects and amps of any song and make them yours. Plus, our AI
            assistant helps you discover new sounds and create the perfect
            pedalboard. Just tell it what inspires you, and it will make it
            happen. Built for performance and ease of use, the W4P is your
            ultimate guitar companion.
          </p>
        </Question>
        <Question title="When will backers receive their W4P pedal?">
          <p>
            We are currently in development. Once we complete our Kickstarter
            funding goals, production will begin. We aim to deliver the W4P
            pedal within a year to a year and a half. Reward tiers include early
            bird discounts, exclusive community access, personalized presets,
            and more. Full details are on the Kickstarter page.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-400"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;
