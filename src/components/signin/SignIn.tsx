"use client";
import React, { useState } from "react";
import { CornerGrid } from "../utils/CornerGrid";
import { NavLogo } from "../navbar/NavLogo";
import Link from "next/link";
import { BubbleButton } from "../buttons/BubbleButton";
import { SiGithub, SiX } from "react-icons/si";
import { SplashButton } from "../buttons/SplashButton";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const SignIn = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 overflow-y-scroll bg-zinc-950 py-20">
      <BubbleButton
        onClick={() => {
          router.push("/");
        }}
        className="absolute left-4 top-6 text-sm"
      >
        <FiArrowLeft />
        Go back
      </BubbleButton>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative z-10 mx-auto w-full max-w-xl p-4"
      >
        <Heading />

        {/* <SocialOptions /> */}
        {/* <Or /> */}
        <Email />

        {/* <Terms /> */}
      </motion.div>

      {/* <CornerGrid /> */}
    </div>
  );
};

const Heading = () => (
  <div>
    <NavLogo />
    <div className="mb-9 mt-6 space-y-1.5">
      <h1 className="text-2xl font-semibold">Join the waitlist</h1>
      {/* <p className="text-zinc-400">
        Don't have an account?{" "}
        <Link href="#" className="text-blue-400">
          Create one.
        </Link>
      </p> */}
    </div>
  </div>
);

const SocialOptions = () => (
  <div>
    <div className="mb-3 flex gap-3">
      <BubbleButton className="flex w-full justify-center py-3">
        <SiX />
      </BubbleButton>
      <BubbleButton className="flex w-full justify-center py-3">
        <SiGithub />
      </BubbleButton>
    </div>
    <BubbleButton className="flex w-full justify-center py-3">
      Sign in with SSO
    </BubbleButton>
  </div>
);

const Or = () => {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-[1px] w-full bg-zinc-700" />
      <span className="text-zinc-400">OR</span>
      <div className="h-[1px] w-full bg-zinc-700" />
    </div>
  );
};

const Email = () => {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);
  const [totalCounts, setTotalCounts] = useState<number>(400);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={requiredSchema}
      onSubmit={async (values, { resetForm }) => {
        setButtonDisabled(true);
        try {
          const response = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values?.email,
            }),
          });
          const datas = await response.json();
          if (datas.status >= 400) {
            setStatus(datas.status);
            setMessage(
              "Error joining the newsletter. You can directly contact me at github@ebraj."
            );
            setTimeout(() => {
              setMessage("");
              setButtonDisabled(false);
            }, 2000);
            return;
          }

          setStatus(201);
          setMessage("Thank you for subscribing.");
          setShowConfetti(true);
          setRun(true);
          setTimeout(() => {
            setTotalCounts(0);
            setMessage("");
            resetForm();
            setButtonDisabled(false);
          }, 4000);
          setTotalCounts(400);
        } catch (error) {
          setStatus(500);
          setMessage(
            "Error joining the newsletter. You can directly contact me at emily@e-ffect.fr."
          );
          setTimeout(() => {
            setMessage("");
            setButtonDisabled(false);
          }, 2000);
        }
      }}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="email-input" className="mb-1.5 block text-zinc-400">
            Email
          </label>

          <Field
            type="email"
            name="email"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </div>
        {/* <div className="mb-6">
        <div className="mb-1.5 flex items-end justify-between">
          <label htmlFor="password-input" className="block text-zinc-400">
            Password
          </label>
          <Link href="#" className="text-sm text-blue-400">
            Forgot?
          </Link>
        </div>
        <input
          id="password-input"
          type="password"
          placeholder="••••••••••••"
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700"
        />
      </div> */}
        <SplashButton
          disabled={buttonDisabled}
          type="submit"
          className="w-full"
        >
          {submitting ? "Joining" : "Join us"}
        </SplashButton>
        {message && (
          <p
            className={`${
              status !== 201 ? "text-red-500" : "text-zinc-200"
            } pt-4 font-bold `}
          >
            {message}
          </p>
        )}
      </Form>
    </Formik>
  );
};

const Terms = () => (
  <p className="mt-9 text-xs text-zinc-400">
    By joining in, you agree to our{" "}
    <Link href="#" className="text-blue-400">
      Terms & Conditions
    </Link>{" "}
    and{" "}
    <Link href="#" className="text-blue-400">
      Privacy Policy.
    </Link>
  </p>
);
