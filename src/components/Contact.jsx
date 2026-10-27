import React, { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "ompimple04@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#0B1120] px-6 py-24 text-slate-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-700/70 bg-[#111C30] p-7 shadow-2xl md:p-12"
      >
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Let&apos;s connect
        </p>
        <h2 className="mt-3 text-center text-4xl font-bold md:text-5xl">
          Contact Me<span className="text-cyan-400">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center leading-7 text-slate-400">
          I&apos;m open to suitable software development opportunities,
          collaborations, and conversations about technology.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio inquiry")}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
          >
            Email Me
          </a>

          {/* <button
            type="button"
            onClick={copyEmail}
            className="w-full rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
          >
            {copied ? "Email Copied!" : "Copy Email Address"}
          </button> */}

          <a
            href="https://www.linkedin.com/in/om-pimple-0042822b3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl border border-slate-600 px-6 py-3 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/OmPimple26"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl border border-slate-600 px-6 py-3 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
          >
            GitHub ↗
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">{EMAIL}</p>
      </motion.div>
    </section>
  );
}
