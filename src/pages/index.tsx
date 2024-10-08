import Head from "next/head";
import { CTA } from "@/components/cta/CTA";
import Features from "@/components/features";
import { FeatureGrid } from "@/components/features/grid/FeatureGrid";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";

import { Video } from "@/components/video/Video";
import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-ffect",
  description:
    "We are happy to introduce our new product : W4P. Discover it now !",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <main className={barlowFont.className}>
        <Hero />
        {/* <Logos /> */}
        <FeatureGrid />
        <Features />
        {/* <BasicFAQ /> */}
        {/* <Carousel /> */}
        {/* <Customers /> */}
        {/* <Stats /> */}
        {/* <Pricing /> */}
        <Video />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
