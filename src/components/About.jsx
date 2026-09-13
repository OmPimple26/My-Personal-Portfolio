import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#0d0d0d] to-black text-white px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-orange-500">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-9">
          Hi, I'm{" "}
          <span className="text-orange-400 font-semibold">Om Pimple</span>, a
          passionate Full Stack Developer and Machine Learning enthusiast
          pursuing B.Tech in Computer Engineering at{" "}
          <span className="text-orange-400">
            Dr. Babasaheb Ambedkar Technological University, Lonere
          </span>
          .
        </p>

        <p className="text-gray-400 mt-6 text-lg leading-8">
          I enjoy building scalable web applications using React.js, Spring
          Boot, Java, MySQL, MongoDB, and REST APIs. I am also interested in
          AI/ML, backend engineering, cloud technologies, and microservices
          architecture.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            "Full Stack Development",
            "Spring Boot",
            "Machine Learning",
            "REST APIs",
            "Microservices"
          ].map((item, index) => (
            <span
              key={index}
              className="px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500 text-orange-300 text-sm hover:bg-orange-500 hover:text-white transition duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;