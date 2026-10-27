import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaBrain,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiSpringboot,
  SiSwagger,
  SiPostman,
  SiTailwindcss,
  SiHibernate,
  SiDocker,
  SiApachemaven,
  SiPostgresql,
} from "react-icons/si";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-red-400" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300" },
      { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-400" },
      { name: "Hibernate", icon: <SiHibernate />, color: "text-yellow-400" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "text-slate-200" },
      {
        name: "Swagger / OpenAPI",
        icon: <SiSwagger />,
        color: "text-green-400",
      },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-sky-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-400" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "text-sky-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "GitHub", icon: <FaGithub />, color: "text-slate-100" },
      { name: "Maven", icon: <SiApachemaven />, color: "text-red-400" },
      { name: "Docker", icon: <SiDocker />, color: "text-sky-400" },
      { name: "Machine Learning", icon: <FaBrain />, color: "text-pink-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#0B1120] px-6 py-24 text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What I Work With
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Skills<span className="text-cyan-400">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Technologies I have used across backend, frontend, database, and AI
            projects.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
            >
              <h3 className="mb-5 text-xl font-semibold">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-700/70 bg-[#111C30] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/60"
                  >
                    <span className={`text-4xl ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <p className="mt-3 text-sm font-medium text-slate-200">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
