import { SignIn } from "@/components/signin/SignIn";
import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Join us",
  description: "Join us and get access to the lastest updates",
};

export default function signIn() {
  return (
    <main className={barlowFont.className}>
      <SignIn />
    </main>
  );
}
