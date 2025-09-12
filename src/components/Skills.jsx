import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaBrain, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiPhp } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Web Development",
      icon: <FaReact className="text-sky-400 text-5xl" />,
    },
    {
      name: "AI / Machine Learning",
      icon: <FaBrain className="text-pink-400 text-5xl" />,
    },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "Databases", icon: <FaDatabase className="text-green-400 text-5xl" />},
    { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" />},
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" />},
    { name: "React.js", icon: <FaReact className="text-sky-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-400 text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-dark text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-black p-6 rounded-lg shadow hover:shadow-lg border border-pink-500"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {skill.icon}
              <p className="mt-4 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
