import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Features = () => {
  return (
    <>
      <div className="flex h-48 flex-col items-center justify-center ">
        <span className="text-2xl font-semibold uppercase text-white md:text-4xl">
          Create Connect Discover
        </span>
      </div>
      <SwapColumnFeatures />
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section id="features2" className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className=" relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span
            style={{
              backgroundColor: featureInView.color,
            }}
            className="rounded-full px-2 py-1.5 text-base font-medium text-black"
          >
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-xl text-slate-600 md:text-2xl">
            {featureInView.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div
      className="relative h-96 w-full rounded-2xl "
      //   style={{
      //     backgroundImage: `url(/model/background.png)`,
      //     backgroundSize: "cover",
      //     backgroundBlendMode: "overlay",
      //     backgroundColor: "rgba(0, 0, 0, 0.8)",
      //   }}
    >
      <img
        src={featureInView.imgSrc}
        alt=""
        className="flex w-full gap-1.5 rounded-t-xl  p-3"
      />
      {/* <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <featureInView.Icon />
      </span> */}
    </div>
  );
};

export default Features;

type FeatureType = {
  id: number;
  callout: string;
  color: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
  imgSrc: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Play",
    color: "#93FDAA",
    title: "It's simple",
    description:
      "Explore a vast range of effects and amp simulations, guided by our intelligent AI assistant that tailors your sound to perfection. Experience the power of intuitive design and innovative technology, and let your creativity soar!",
    contentPosition: "r",
    Icon: FiEye,
    imgSrc: "/model/feature1.png",
  },
  {
    id: 2,
    callout: "Educative",
    color: "#73B2FD",
    title: "Learn your favorite songs & Create your Tabs!",
    description:
      "Play along with the original guitar effects, and ones you've never seen before.",
    contentPosition: "l",
    Icon: FiSearch,
    imgSrc: "/model/feature2.png",
  },
  {
    id: 3,
    callout: "Community",
    color: "#BD84F6",
    title: "Share & Discover",
    description:
      "Embedded plateform, allows you to access the most popular presets, pedalboards & tabs.",
    contentPosition: "r",
    Icon: FiPlay,
    imgSrc: "/model/feature3.png",
  },
];
