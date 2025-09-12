import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      link: "#",
      desc: "My personal portfolio built with React + Tailwind.",
      img: "",
      className: "",
    },
    {
      title: "Multiple Disease Predictor",
      link: "https://multiple-disease-predictor-project.streamlit.app/",
      desc: "AI-powered health prediction system.",
      img: "",
    },
    {
      title: "Placement Predictor App",
      link: "https://placement-predictor-frontend.vercel.app/",
      desc: "A machine learning-powered app that predicts student placement outcomes based on academic and skill data.",
      img: "",
    },
    {
      title: "Pet Adoption Portal",
      link: "https://petadoptionportal.infinityfreeapp.com/",
      desc: "A responsive travel booking website.",
      img: "",
    },
    {
      title: "Travel Agency Website",
      link: "https://ompimple26.github.io/TravelAgencyWebsite1.github.io/",
      desc: "A responsive travel booking website.",
      img: "",
    },
    {
      title: "Todo List App",
      link: "https://todo-list-app-using-react-tailwind.netlify.app/",
      desc: "A React + Tailwind CSS productivity app.",
      img: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="relative bg-dark p-6 rounded-lg shadow border border-pink-500 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              style={{
                backgroundImage: `url(${p.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
