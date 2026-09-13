import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 py-10 px-6 text-center text-gray-400">

      {/* Name */}
      <h2 className="text-2xl md:text-3xl font-bold text-orange-500 tracking-wide">
        Om Pimple
      </h2>

      {/* Tagline */}
      <p className="mt-3 text-sm md:text-base text-gray-500">
        Full Stack Developer | Spring Boot Developer | Machine Learning Explorer
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-5 mt-7">

        <a
          href="https://github.com/Ompimple26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-11 h-11 flex items-center justify-center rounded-full
                     bg-gray-900 border border-gray-800 text-xl
                     hover:text-white hover:border-green-500
                     hover:bg-green-500/10
                     hover:-translate-y-1
                     transition-all duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/om-pimple-0042822b3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-11 h-11 flex items-center justify-center rounded-full
                     bg-gray-900 border border-gray-800 text-xl
                     hover:text-blue-500 hover:border-blue-500
                     hover:bg-blue-500/10
                     hover:-translate-y-1
                     transition-all duration-300"
        >
          <FaLinkedin />
        </a>

      </div>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-gray-800 mt-6 pt-4">

        <p className="text-xs md:text-sm text-gray-600">
          © {new Date().getFullYear()} Om Pimple. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;