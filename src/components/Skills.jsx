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

const Skills = () => {
  const skills = [
    // Programming Languages
    { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },

    // AI & Machine Learning
    {
      name: "Machine Learning",
      icon: <FaBrain className="text-pink-500 text-5xl" />,
    },

    // Backend
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-500 text-5xl" />,
    },
    {
      name: "Hibernate",
      icon: <SiHibernate className="text-yellow-500 text-5xl" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300 text-5xl" />,
    },

    // Frontend
    { name: "React.js", icon: <FaReact className="text-sky-400 text-5xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600 text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },

    // Databases
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-500 text-5xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-5xl" />,
    },

    // API & Testing
    {
      name: "Swagger",
      icon: <SiSwagger className="text-green-400 text-5xl" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-5xl" />,
    },

    // DevOps & Build Tools
    { name: "Docker", icon: <SiDocker className="text-blue-400 text-5xl" /> },
    {
      name: "Maven",
      icon: <SiApachemaven className="text-red-400 text-5xl" />,
    },

    // Version Control
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d] text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-orange-500">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#111] border border-gray-800 hover:border-orange-500 rounded-3xl p-6 flex flex-col items-center shadow-xl transition duration-300"
            >
              {skill.icon}

              <p className="mt-4 font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
