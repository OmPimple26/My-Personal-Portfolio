import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#080D18] px-6 py-10 text-center text-slate-400">
      <a
        href="#home"
        className="text-2xl font-bold tracking-wide text-slate-100"
      >
        Om Pimple<span className="text-cyan-400">.</span>
      </a>
      <p className="mt-3 text-sm text-slate-500">
        Java &amp; Spring Boot Developer | Full Stack Developer
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/OmPimple26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-[#111C30] text-xl transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/om-pimple-0042822b3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-[#111C30] text-xl transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="mx-auto mt-7 max-w-xl border-t border-slate-800 pt-5">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Om Pimple. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
