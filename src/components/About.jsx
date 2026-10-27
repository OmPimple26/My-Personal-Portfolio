import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Java & Spring Boot",
  "Full Stack Development",
  "REST API Development",
  "AI & Machine Learning",
  "Database Design",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#0B1120] px-6 py-24 text-slate-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get to know me
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          About Me<span className="text-cyan-400">.</span>
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-cyan-400">Om Pimple</span>, a
          Computer Engineering graduate and software developer interested in
          building reliable modern web applications.
        </p>

        <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
          I have practical experience developing REST APIs using Java, Spring
          Boot, Spring Data JPA, and MySQL. I also build full-stack applications
          with React, Node.js, and MongoDB, and explore AI-powered developer
          tools and machine learning projects.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
