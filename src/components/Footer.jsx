import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 py-10 text-center text-gray-400">
      <h2 className="text-2xl font-bold text-purple-500">Om Pimple</h2>

      <p className="mt-3 text-gray-500">
        Full Stack Developer | Spring Boot Developer | Machine Learning Explorer
      </p>

      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/Ompimple26"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/om-pimple-0042822b3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Om Pimple. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;