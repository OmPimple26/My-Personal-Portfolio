import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-dark text-center px-4 text-white"
    >
      <motion.img
        src="/self1.png"
        alt="Profile"
        className="rounded-full w-40 h-40 mb-4 shadow-lg border-4 border-primary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-primary">Om Pimple</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-300 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a passionate student learning Full Stack Web Development and Machine Learning who loves
        building innovative web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a
          href="https://github.com/Ompimple26"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/om-pimple-0042822b3"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="/Om_Pimple_Resume.pdf"
          download
          className="bg-primary text-white px-6 py-2 rounded-full shadow hover:bg-pink-700"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}

export default Hero