import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "SiliconMount Tech Services",
    role: "Software Developer Intern",
    specialization: "Java & Spring Boot",
    duration: "Dec 2025 – May 2026",
    type: "Internship",
    description:
      "Contributed to backend development for the MyBOQ Community platform using Java and Spring Boot.",
    responsibilities: [
      "Developed and maintained 15+ RESTful APIs for community platform features.",
      "Used Spring Boot, Spring Data JPA, Hibernate, and MySQL for backend development.",
      "Worked with layered architecture and DTO mapping to organize API requests and responses.",
      "Documented and tested API endpoints using Swagger UI.",
      "Used Git and GitHub for version control and collaborative development.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "MySQL",
      "Swagger / OpenAPI",
      "Git",
      "GitHub",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-[#0B1120] px-6 py-24 text-slate-100"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Professional Journey
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Experience<span className="text-cyan-400">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Practical experience building backend applications, developing REST
            APIs, and working with Java technologies.
          </p>
        </motion.div>

        <div className="relative border-l border-cyan-400/40 pl-6 md:ml-4 md:pl-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl border border-slate-700/70 bg-[#111C30] p-6 shadow-xl md:p-8"
            >
              <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-[#0B1120] bg-cyan-400 md:-left-[49px]" />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {experience.type}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{experience.role}</h3>
                  <p className="mt-1 font-medium text-cyan-400">
                    {experience.company}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {experience.specialization}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-medium text-slate-300">
                  {experience.duration}
                </p>
              </div>

              <p className="mt-6 leading-7 text-slate-300">
                {experience.description}
              </p>

              {/* <h4 className="mb-3 mt-7 font-semibold text-slate-100">
                Key Contributions
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-400"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul> */}

              <div className="mt-7 border-t border-slate-700 pt-5">
                <h4 className="mb-3 text-sm font-semibold text-slate-200">
                  Technologies &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-[#0B1120] px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
