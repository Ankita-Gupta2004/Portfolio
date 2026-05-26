import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Cpu } from "lucide-react";

const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
      icon: <Code className="text-emerald-400" />,
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Framer Motion",
        "Bootstrap",
        "Next.js",
        "Canva",
        "Figma",
        "Adobe XD",
      ],
    },
    {
      title: "Programming Languages",
      icon: <Server className="text-blue-400" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "SQL",
        "C",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-blue-400" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Socket.io",
        "Yjs - Real-time Collaboration",
        "WebRTC - Peer-to-Peer Communication",
      ],
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400" />,
      skills: ["MongoDB", "Firebase", "LocalStorage", "postgreSQL", "sql"],
    },
    {
      title: "Tools & Tech",
      icon: <Wrench className="text-yellow-400" />,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Vite",
        "Render",

        "Netlify",
        "Vercel",
        "Docker",
        "ESLint - Code Linting",
        "Prettier - Code Formatting",
        "Azure DevOps - CI/CD Pipelines",
        "Firebase Hosting",
      ],
    },
    {
      title: "Core Concepts",
      icon: <Cpu className="text-pink-400" />,
      skills: [
        "DSA",
        "OOP",
        "DBMS",
        "OS",
        "Computer Networks",
        "ML",
        "AI",
        "Agentic AI",
      ],
    },
  ];
  const softSkills = [
    {
      title: "Problem Solving",
      desc: "Strong analytical thinking with ability to break down complex problems.",
      icon: <Cpu className="text-emerald-400" />,
    },
    {
      title: "Communication",
      desc: "Clear and effective communication in both technical and non-technical contexts.",
      icon: <Code className="text-blue-400" />,
    },
    {
      title: "Team Collaboration",
      desc: "Experience working in teams, contributing and adapting to shared goals.",
      icon: <Server className="text-purple-400" />,
    },
    {
      title: "Adaptability",
      desc: "Quick learner, able to adapt to new technologies and dynamic environments.",
      icon: <Wrench className="text-yellow-400" />,
    },

    // 🔥 NEW ONES

    {
      title: "Time Management",
      desc: "Ability to prioritize tasks, meet deadlines, and manage multiple responsibilities efficiently.",
      icon: <Cpu className="text-pink-400" />,
    },
    {
      title: "Critical Thinking",
      desc: "Evaluate problems logically and make data-driven decisions.",
      icon: <Code className="text-indigo-400" />,
    },
    {
      title: "Attention to Detail",
      desc: "Focus on writing clean, accurate, and high-quality code and documentation.",
      icon: <Wrench className="text-orange-400" />,
    },
    {
      title: "Ownership & Responsibility",
      desc: "Take initiative and responsibility for tasks, ensuring end-to-end completion.",
      icon: <Server className="text-teal-400" />,
    },
    {
      title: "Continuous Learning",
      desc: "Actively learning new technologies and improving skills to stay industry-ready.",
      icon: <Cpu className="text-red-400" />,
    },
    {
      title: "Attention to Detail",
      desc: "Focus on writing clean, accurate, and high-quality code and documentation.",
      icon: <Wrench className="text-orange-400" />,
    },
  ];
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900  text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-12">My Skills</h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-8xl">
        {skillData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="relative group rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-6 space-y-4 transition"
            style={{ perspective: "1000px" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`,
              );
            }}
          >
            {/* Cursor Spotlight */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
              <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(16,185,129,0.25),transparent_40%)]"></div>
            </div>

            {/* 3D Tilt Container */}
            <motion.div
              whileHover={{
                rotateX: 6,
                rotateY: -6,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10 space-y-4"
            >
              {/* Title */}
              <div className="flex items-center gap-3">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10"></div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-white/10 rounded-full hover:bg-emerald-500/20 hover:scale-105 hover:-translate-y-[2px] transition duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* Divider */}
      <div className="w-full max-w-5xl my-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-white/10"></div>
        <span className="text-gray-400 text-sm tracking-wider">
          SOFT SKILLS
        </span>
        <div className="flex-1 h-[1px] bg-white/10"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-8xl">
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 transition"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`,
              );
            }}
          >
            {/* Cursor Spotlight (DIFFERENT COLOR) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
              <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(168,85,247,0.25),transparent_40%)]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                {skill.icon}
                <h3 className="text-lg font-semibold">{skill.title}</h3>
              </div>

              <p className="text-sm text-gray-400 mt-2">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
