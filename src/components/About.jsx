import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark text-white px-6">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm a 21-year-old 4th year Computer Engineering student studying at Dr. Babasaheb Ambedkar Technological University, Lonere with experience in Web Development and
          Machine Learning. I love turning ideas into reality and learning new
          technologies every day.
        </p>
      </motion.div>
    </section>
  )
}

export default About