import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Rocket, Layers, Briefcase } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const dynamicWords = [
    "Web Developer",
    "MERN Stack Engineer",
    "Problem Solver",
    "Open Source Contributor",
    "React Enthusiast",
    "UI/UX Builder",
    "Tech Explorer",
    "Graphic Designer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const floatShape = (i) => ({
    y: [0, -20 - i * 5, 0],
    x: [0, 20 + i * 5, 0],
    rotate: [0, 15, -15, 0],
    transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
  });

  const shapes = [
    {
      size: 35,
      pos: { top: "15%", left: "10%" },
      color: "from-emerald-400 to-teal-400",
    },
    {
      size: 25,
      pos: { top: "20%", right: "10%" },
      color: "from-teal-300 to-emerald-300",
    },
    {
      size: 30,
      pos: { bottom: "10%", left: "15%" },
      color: "from-emerald-500 to-teal-500",
    },
    {
      size: 28,
      pos: { bottom: "25%", right: "12%" },
      color: "from-teal-400 to-emerald-400",
    },
    {
      size: 22,
      pos: { top: "50%", left: "3%" },
      color: "from-emerald-300 to-teal-200",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900 py-24 lg:py-32"
    >
      {/* Floating Shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          animate={floatShape(i)}
          className={`absolute rounded-full bg-gradient-to-tr ${shape.color} opacity-10`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            ...shape.pos,
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500 text-emerald-300 text-sm"
        >
          <Code2 className="w-4 h-4" />
          <span>Welcome to My Developer Portfolio</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
        >
          <div className="mb-4">
            Hi, I’m <span className="text-emerald-400">Ankita</span>
          </div>

          <div>
            I’m a <span className="text-emerald-300">Developer</span> who
            builds.
          </div>
        </motion.h1>

        {/* Dynamic Text */}
        <div className="relative h-16 sm:h-20 overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-400"
            >
              {dynamicWords[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 max-w-2xl mx-auto tracking-wide"
        >
          I specialize in building modern full-stack web applications using MERN
          stack, Next.js, Tailwind CSS and Canva. I love turning ideas into
          interactive, scalable, and beautiful digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-500 text-white font-semibold hover:scale-105 transition"
          >
            View Projects
            <Rocket className="ml-2 w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center px-7 py-3 rounded-xl border border-emerald-500 text-emerald-300 hover:bg-gray-800 transition"
          >
            Contact Me
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <a
            href="https://github.com/Ankita-Gupta2004"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-xl bg-gray-800 text-white hover:scale-105 transition"
          >
            GitHub
            <FaGithub className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
