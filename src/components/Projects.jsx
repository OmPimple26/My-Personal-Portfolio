import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "VeriCode",
      link: "https://marketplace.visualstudio.com/items?itemName=prathmesh9304.luna-ai-chat",
      tech: "VS Code Extension • TypeScript • React • AI",
      desc: "AI-powered VS Code extension that provides intelligent code analysis, refactoring suggestions, saves chat history, and multi-LLM support to enhance developer productivity.",
    },
    {
      title: "VeriCode",
      link: "https://github.com/OmPimple26/VeriCode--AI-Powered-Code-Quality-Analyzer-and-Refactoring-Suggestion-Tool",
      tech: "MongoDB • React.js • Express.js • Node.js • Python • AI",
      desc: "AI-powered code analyzer that detects bugs, code smells, and provides intelligent refactoring suggestions.",
    },
    {
      title: "Email Writer SB",
      link: "https://email-writer-sb-frontend.vercel.app/",
      tech: "Spring Boot • React.js • Gemini AI • REST APIs • Chrome Extension",
      desc: "AI email assistant that generates professional replies using Gemini AI with Spring Boot, React, and Chrome Extension.",
    },
    {
      title: "Real-Time Collaborative Code Editor",
      link: "http://docker-aws-yt-alb-1709947757.ap-northeast-1.elb.amazonaws.com/",
      tech: "React.js • Node.js • WebSockets • Docker • AWS ECS",
      desc: "Real-time collaborative coding platform with Monaco Editor, WebSocket-based synchronization, Yjs integration, and scalable Docker deployment on AWS ECS.",
    },
    {
      title: "Quiz & Question Microservices App",
      link: "https://github.com/OmPimple26/Spring-Boot-Microservices-Quiz-and-Question-App",
      tech: "Spring Boot • Spring Cloud • Eureka • API Gateway • Microservices",
      desc: "Microservices-based quiz platform with Spring Cloud Config, Eureka Server, and API Gateway.",
    },
    {
      title: "Portfolio Website",
      link: "https://ompimplepersonalportfolio.netlify.app/",
      tech: "React.js • Tailwind CSS • Framer Motion",
      desc: "Modern responsive personal portfolio website featuring smooth animations, project showcase, skills section, and recruiter-friendly design.",
    },
    {
      title: "Placement Predictor Platform",
      link: "https://placement-predictor-frontend.vercel.app/",
      tech: "Python • Flask • React.js • Machine Learning",
      desc: "ML-powered placement prediction platform using Logistic Regression, Random Forest, and other models with optimized React frontend and Flask REST APIs.",
    },
    {
      title: "Multiple Disease Predictor",
      link: "https://multiple-disease-predictor-project.streamlit.app/",
      tech: "Python • Machine Learning • Streamlit",
      desc: "Healthcare prediction platform leveraging machine learning algorithms to predict multiple diseases through an easy-to-use web interface.",
    },
    {
      title: "AI-Powered Component Generator",
      link: "https://github.com/OmPimple26/AI-Powered-Component-Generator",
      tech: "React.js • Tailwind CSS • Vite • Gemini AI • Monaco Editor",
      desc: "AI-powered tool that generates responsive UI components from text prompts with live preview and code export.",
    },
    {
      title: "Pet Adoption Portal",
      link: "https://petadoptionportal.infinityfreeapp.com/",
      tech: "PHP • MySQL • Bootstrap",
      desc: "Full-stack pet adoption platform featuring responsive UI, pet listings, database integration, and adoption management functionality.",
    },
    {
      title: "Travel Agency Website",
      link: "https://ompimple26.github.io/TravelAgencyWebsite1.github.io/",
      tech: "HTML • CSS • JavaScript",
      desc: "Responsive travel booking website with modern UI design, destination showcase, and interactive user experience.",
    },
    {
      title: "Todo List App",
      link: "https://todo-list-app-using-react-tailwind.netlify.app/",
      tech: "React.js • Tailwind CSS",
      desc: "Responsive task management application with intuitive user interface, task tracking, and modern React-based architecture.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-500 mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] border border-gray-800 rounded-3xl p-7 shadow-xl hover:border-purple-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-purple-400 text-sm mb-4">{project.tech}</p>

              <p className="text-gray-400 leading-7 mb-6">{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 hover:bg-purple-600 px-5 py-2 rounded-full transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
