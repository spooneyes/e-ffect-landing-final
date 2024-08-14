import { SignIn } from "@/components/signin/SignIn";
import { Barlow } from "next/font/google";

import Head from "next/head";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Join",
  description: "Join us and get access to the lastest updates",
};

export default function signIn() {
  return (
    <>
      <Head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <main className={barlowFont.className}>
        <SignIn />
      </main>
    </>
  );
}
