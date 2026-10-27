import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden bg-[#0B1120] px-6 pb-16 pt-28 text-center text-slate-100"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <img
          src="/self_image.jpeg"
          alt="Om Pimple"
          fetchPriority="high"
          className="mx-auto mb-8 h-36 w-36 rounded-full border-2 border-cyan-400 object-cover shadow-[0_0_35px_rgba(34,211,238,0.15)] md:h-44 md:w-44"
        />
      </motion.div>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative z-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.25em]"
      >
        Software Developer · Open to Opportunities
      </motion.p>

      <motion.h1
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative z-10 mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
      >
        Hi, I&apos;m Om Pimple
        <span className="mt-3 block text-cyan-400">
          Java &amp; Full Stack Developer
        </span>
      </motion.h1>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
      >
        Computer Engineering graduate with hands-on experience in Java, Spring
        Boot, MERN Stack, ML and AI-powered applications. Interested in
        building useful, maintainable software solutions.
      </motion.p>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 mt-9 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
        >
          Explore Projects
        </a>
        <a
          href="/Om_Pimple_Resume.pdf"
          download
          className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/OmPimple26"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          GitHub ↗
        </a>
      </motion.div>
    </section>
  );
}
