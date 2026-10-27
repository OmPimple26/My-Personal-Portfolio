import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Eventora",
    demo: "https://eventora-frontend-alpha.vercel.app/",
    github: "https://github.com/OmPimple26/Eventora---Event-Booking-Platform",
    tech: ["MERN", "React", "Node.js", "Express", "MongoDB"],
    desc: "Full-stack event management platform with JWT authentication, role-based access, email OTP verification, event management, and an admin dashboard.",
    featured: true,
  },
  {
    title: "VeriCode",
    demo: "",
    github:
      "https://github.com/OmPimple26/VeriCode--AI-Powered-Code-Quality-Analyzer-and-Refactoring-Suggestion-Tool",
    tech: ["React", "Node.js", "MongoDB", "Python", "AI"],
    desc: "AI-powered code analyzer designed to identify bugs and code smells and provide refactoring suggestions.",
    featured: true,
  },
  {
    title: "Luna AI",
    demo: "https://marketplace.visualstudio.com/items?itemName=prathmesh9304.luna-ai-chat",
    github: "https://github.com/OmPimple26/Luna-AI-Chat-VS-Code-Extension",
    tech: ["VS Code Extension", "React", "AI", "LLM Integration"],
    desc: "AI-powered VS Code chat extension with code analysis, refactoring suggestions, chat history, and multi-model support.",
    featured: true,
  },
  {
    title: "Email Writer SB",
    demo: "https://email-writer-sb-frontend.vercel.app/",
    github: "https://github.com/OmPimple26/Email-Writer-SB",
    tech: ["Spring Boot", "React", "Gemini AI", "REST APIs"],
    desc: "AI email assistant that generates professional email replies using a Spring Boot backend, React frontend, and browser extension.",
    featured: true,
  },
  {
    title: "Real-Time Collaborative Code Editor",
    demo: "http://docker-aws-yt-alb-1709947757.ap-northeast-1.elb.amazonaws.com/",
    github: "https://github.com/OmPimple26/Real-Time-Collaborative-Platform",
    tech: ["React", "Node.js", "WebSockets", "Docker", "AWS ECS"],
    desc: "Collaborative coding platform with Monaco Editor, WebSocket synchronization, Yjs integration, and container-based deployment.",
    featured: true,
  },
  {
    title: "Quiz & Question Microservices App",
    demo: "",
    github:
      "https://github.com/OmPimple26/Spring-Boot-Microservices-Quiz-and-Question-App",
    tech: ["Spring Boot", "Spring Cloud", "Eureka", "API Gateway"],
    desc: "Microservices-based quiz platform using service discovery, centralized configuration, and an API Gateway.",
    featured: true,
  },
  {
    title: "Password Manager",
    demo: "https://password-manager-frontend-lovat.vercel.app/",
    github: "https://github.com/OmPimple26/Password-Manager",
    tech: ["React", "Node.js", "Express", "MongoDB", "Encryption"],
    desc: "Secure password management application that allows users to store, organize, and manage passwords with authentication and data protection.",
  },
  {
    title: "Placement Predictor Platform",
    demo: "https://placement-predictor-frontend.vercel.app/",
    github:
      "https://github.com/OmPimple26/Placement-Predictor-WebApp-Using-Machine-Learning",
    tech: ["Python", "Flask", "React", "Machine Learning"],
    desc: "Machine learning placement prediction platform with a React frontend and Flask REST APIs.",
  },
  {
    title: "Multiple Disease Predictor",
    demo: "https://multiple-disease-predictor-project.streamlit.app/",
    github: "https://github.com/OmPimple26/Multiple-Disease-Predictor",
    tech: ["Python", "Machine Learning", "Streamlit"],
    desc: "Machine learning application that predicts selected health outcomes through a web interface.",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      whileHover={{ y: -5 }}
      className="flex h-full flex-col rounded-2xl border border-slate-700/70 bg-[#111C30] p-6 shadow-lg transition-colors hover:border-cyan-400/60"
    >
      {project.featured && (
        <span className="mb-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          Featured
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-md bg-[#0B1120] px-2.5 py-1 text-xs text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
        {project.desc}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {project.title === "Luna AI" ? "Marketplace ↗" : "Live Demo ↗"}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Source Code ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#080D18] px-6 py-24 text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Projects<span className="text-cyan-400">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            A selection of applications and tools I have built while exploring
            backend development, full-stack engineering, and AI.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
          >
            {showAll ? "Show Featured Projects" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
