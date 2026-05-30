import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-center px-6 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl pointer-events-none"></div>

      {/* Profile Image */}
      <motion.img
        src="/self1.png"
        alt="Profile"
        className="rounded-full w-44 h-44 mb-6 shadow-2xl border-4 border-pink-500 object-cover z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-pink-500">Om Pimple</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-gray-300 max-w-2xl text-lg leading-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer | Spring Boot Developer | Machine Learning Explorer
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="https://github.com/Ompimple26"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 border border-gray-700 hover:border-pink-500 px-6 py-3 rounded-full transition duration-300"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/om-pimple-0042822b3"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition duration-300"
        >
          LinkedIn
        </a>

        <a
          href="/Om_Pimple_Resume.pdf"
          download
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full transition duration-300 shadow-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;