import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <meta
        name="description"
        content="We are happy to introduce our new product : W4P. Discover it now !"
      />

      <title>E-ffect | W4P</title>
      <body className=" bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
