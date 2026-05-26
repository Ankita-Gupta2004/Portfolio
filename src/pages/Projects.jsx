import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";

import { Code, Server, Lightbulb, Rocket, User, Layers } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("dev");

  const devProjects = [
    {
      title: "FinTrack",
      desc: "Personal finance tracker with analytics, budgeting, and smart investment tools, helping users monitor expenses, set financial goals, and gain actionable insights into their financial health.",
      problem:
        "Managing personal finances manually lacks insights, structure, and security.",

      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB"],

      features: [
        "Finance dashboard with charts & insights",
        "Expense & income tracking (multi-category)",
        "FIRE, SIP, FD, RD calculators",
        "SIP Optimizer based on risk factor",
        "Firebase authentication & protected routes",
      ],

      role: "Built full-stack application including UI, authentication, APIs, and financial logic implementation.",

      impact:
        "Enabled structured financial tracking with real-time insights and privacy-focused data handling.",

      extra: {
        auth: "Firebase Authentication",
        encryption: "AES encryption (CryptoJS)",
        storage: "Per-user localStorage caching",
        routing: "React Router with protected routes",
        deployment: "Firebase (frontend), Render (backend)",
      },

      live: "https://fintrack-645f6.web.app/",
      code: "https://github.com/Ankita-Gupta2004/Finance-Tracker", // add GitHub link here
    },
    {
      title: "Realtime Collaboration Editor",
      desc: "Google Docs–style collaborative editor with real-time sync, CRDT merging, and version history.",

      problem:
        "Building a system where multiple users can edit the same document simultaneously without conflicts or data loss.",

      frontend: ["React", "Yjs", "WebSocket Provider"],
      backend: ["Node.js", "Express", "Yjs Server"],

      features: [
        "Real-time collaborative editing (<100ms latency)",
        "CRDT-based conflict-free merging (Yjs)",
        "Version history with diff & restore",
        "Live cursors, typing indicators & presence",
        "Offline editing with auto-sync on reconnect",
      ],

      role: "Designed and implemented full real-time architecture including CRDT integration, WebSocket communication, and versioning system.",

      impact:
        "Demonstrates deep understanding of real-time systems like Google Docs, Figma, and Notion at system design level.",

      extra: {
        realtime: "WebSockets (y-websocket, Socket.IO)",
        database: "MongoDB (snapshots & versioning)",
        architecture: "Room-based collaboration (scalable)",
        diff: "Custom token-based diff algorithm",
        performance: "<100ms sync latency",
        offline: "CRDT-based offline-first support",
      },

      live: "#", // if deployed
      code: "https://github.com/Ankita-Gupta2004/realtime-collaboration-editor", // add GitHub link
    },
    {
      title: "AG-Upskill",
      desc: "All-in-one learning platform combining AI, coding practice, and collaboration to make students job-ready.",

      problem:
        "Students struggle with fragmented learning, poor retention, lack of hands-on practice, and inefficient study workflows.",

      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],

      features: [
        "AI-powered notes summarization",
        "Coding playground for hands-on practice",
        "Real-time chat for collaboration",
        "Task manager with custom calendar",
        "Resume builder & portfolio tools",
      ],

      role: "Designed and developed a full-stack learning platform integrating AI features, real-time communication, and productivity tools.",

      impact:
        "Created a unified system that reduces learning friction and helps students move from theory to practical, job-ready skills.",

      extra: {
        ai: "OpenAI-based summarization",
        realtime: "Firebase (chat & auth)",
        editor: "Online coding playground",
        productivity: "Task manager + planner",
        architecture: "Modular component-based design",
      },

      live: "#", // add if deployed
      code: "https://github.com/Ankita-Gupta2004/AG-Upskill",
    },
    {
      title: "HealHive",
      desc: "Telehealth platform enabling doctor discovery, secure payments, and real-time consultations.",

      problem:
        "Patients face difficulty accessing reliable healthcare quickly, while doctors lack seamless digital consultation systems.",

      frontend: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "MongoDB"],

      features: [
        "Doctor search by specialty & availability",
        "Secure Stripe-based consultation payments",
        "Real-time chat & video signaling (Socket.IO)",
        "Role-based patient & doctor flows",
        "Profile management & medical data handling",
      ],

      role: "Developed full-stack telehealth system including authentication, payment integration, real-time communication, and API design.",

      impact:
        "Simulates a real-world healthcare platform with secure, scalable, and interactive patient-doctor workflows.",

      extra: {
        auth: "Firebase Authentication + Admin SDK",
        realtime: "Socket.IO + WebRTC signaling",
        payments: "Stripe integration",
        architecture: "Role-based system (patient/doctor)",
        security: "Token-based route protection",
        deployment: "Firebase (frontend) + Node backend",
      },

      live: "https://healhive-df7bf.web.app/", // add if deployed
      code: "https://github.com/Ankita-Gupta2004/HealHive", // add GitHub link
    },
  ];

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const len = images.length;

  useEffect(() => {
    if (expanded) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % len);
    }, 3000);

    return () => clearInterval(interval);
  }, [expanded, len]);

  const prev = () => setActive((prev) => (prev - 1 + len) % len);
  const next = () => setActive((prev) => (prev + 1) % len);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center overflow-hidden"
    >
      {/* 🔥 NETFLIX BACKGROUND ONLY FOR DESIGN */}
      {activeTab === "design" && (
        <div className="absolute inset-0 overflow-hidden z-0 mt-52">
          {/* Row 1 */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-4 w-max mb-4"
          >
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-40 h-60 object-cover rounded-lg opacity-30"
              />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-40 h-60 object-cover rounded-lg opacity-20"
              />
            ))}
          </motion.div>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-4 w-max mb-4 mt-4"
          >
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-40 h-60 object-cover rounded-lg opacity-30"
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Overlay ONLY for design */}
      {activeTab === "design" && (
        <div className="absolute inset-0 bg-black/60"></div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10">My Work</h2>

        {/* Toggle */}
        <div className="flex bg-white/10 rounded-full p-1 mb-12">
          <button
            onClick={() => setActiveTab("dev")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "dev" ? "bg-emerald-500" : "text-gray-400"
            }`}
          >
            Web Developer
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "design" ? "bg-emerald-500" : "text-gray-400"
            }`}
          >
            Graphic Designer
          </button>
        </div>

        <div className="w-full max-w-8xl">
          {activeTab === "dev" ? (
            <div className="grid md:grid-cols-2 gap-8">
              {devProjects.map((proj, index) => (
                <motion.div
                  key={index}
                  className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500 via-teal-400/30 to-emerald-500/40"
                >
                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-sm bg-gradient-to-r from-emerald-500 via-teal-400/30 to-emerald-500/40 transition duration-300"></div>
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 rounded-2xl p-6 space-y-5">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold">{proj.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-base">{proj.desc}</p>

                    <div className="border-t border-white/10"></div>

                    {/* Problem */}
                    <div className="flex gap-2 items-start">
                      <Lightbulb size={16} className="text-yellow-400 mt-1" />
                      <p className="text-base text-gray-400">
                        <span className="text-white font-medium">Problem:</span>{" "}
                        {proj.problem}
                      </p>
                    </div>

                    <div className="border-t border-white/10"></div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Code size={16} className="text-emerald-400 mt-1" />
                        <div className="flex flex-wrap gap-2">
                          {proj.frontend.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-white/10 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {proj.backend.length > 0 && (
                        <div className="flex items-start gap-2">
                          <Server size={16} className="text-blue-400 mt-1" />
                          <div className="flex flex-wrap gap-2">
                            {proj.backend.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-white/10 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-white/10"></div>

                    {/* Features */}
                    <div className="flex items-start gap-2">
                      <Layers size={16} className="text-purple-400 mt-1" />
                      <div className="flex flex-wrap gap-2">
                        {proj.features.map((f, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 border border-white/10 rounded"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/10"></div>

                    {/* Role */}
                    <div className="flex gap-2 items-start">
                      <User size={16} className="text-pink-400 mt-1" />
                      <p className="text-base text-gray-400">
                        <span className="text-white font-medium">Role:</span>{" "}
                        {proj.role}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="flex gap-2 items-start">
                      <Rocket size={16} className="text-emerald-400 mt-1" />
                      <p className="text-base text-gray-400">
                        <span className="text-white font-medium">Impact:</span>{" "}
                        {proj.impact}
                      </p>
                    </div>

                    <div className="border-t border-white/10"></div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={proj.live}
                        target="_blank"
                        className="flex-1 text-center py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition text-sm"
                      >
                        Live
                      </a>
                      <a
                        href={proj.code}
                        target="_blank"
                        className="flex-1 text-center py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-sm"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              {/* Toggle View */}
              <div className="flex justify-end mb-3">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-emerald-400 text-sm"
                >
                  {expanded ? "View Carousel" : "View Gallery"}
                </button>
              </div>

              {expanded ? (
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img src={img} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative flex justify-center items-center h-[450px]">
                  {/* Buttons */}
                  <button
                    onClick={prev}
                    className="absolute left-5 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition cursor-pointer mt-16"
                  >
                    ‹
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition  cursor-pointer mt-16"
                  >
                    ›
                  </button>

                  {/* SINGLE IMAGE CAROUSEL */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.5 }}
                      className="w-[520px] h-[600px] rounded-2xl overflow-hidden shadow-2xl mt-40"
                    >
                      <img
                        src={images[active]}
                        className="w-full h-full object-contain bg-black hover:scale-105 transition duration-500"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
