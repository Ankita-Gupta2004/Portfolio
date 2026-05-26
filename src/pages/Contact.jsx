import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div
      id="contact"
      className="relative w-full flex justify-center items-center bg-black h-[200px]"
    >
      {" "}
      {/* 🔥 Animated Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[120px] bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 blur-3xl opacity-20 animate-pulse rounded-full"></div>
      </div>
      {/* 💎 Main Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center gap-6 px-8 py-4 rounded-full 
        bg-black/60 border border-white/10 backdrop-blur-xl shadow-lg"
      >
        {/* Email */}
        <a
          href="mailto:ankitagupta94161@gmail.com"
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition hover:scale-110"
        >
          <FaEnvelope />
          <span className="hidden sm:inline">Email</span>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-white/20"></div>

        {/* GitHub */}
        <a
          href="https://github.com/Ankita-Gupta2004"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition hover:scale-110"
        >
          <FaGithub />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-white/20"></div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ankita-gupta-44b251296/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition hover:scale-110"
        >
          <FaLinkedin />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </motion.div>
    </div>
  );
};

export default ContactBar;
