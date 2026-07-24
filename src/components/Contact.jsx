import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-3">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Feel free to connect with me for collaborations, internships, or
          exciting opportunities.
        </p>

        <form
          action="mailto:ompimple@outlook.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-300"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition duration-300"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;