import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-pink-400 flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full bg-gray-900 p-8 rounded-2xl border border-pink-500 shadow-lg"
      >
        {/* <h2 className="text-3xl font-bold mb-6 text-center text-pink-500"> */}
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-500">
          Contact Me
        </h2>
        <form
          action="mailto:ompimple@outlook.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg bg-gray-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>
          <button
            type="submit"
            // className="bg-pink-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300"
            className="bg-purple-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;