import React from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCloud, FaTrophy, FaServer } from "react-icons/fa";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-t from-black to-gray-900 text-white py-10"
    >
      <div className="max-w-8xl mx-auto px-6 space-y-8">
        {/* DIV 1 - ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-purple-400 text-xl" />
            <h2 className="text-2xl font-semibold">About Me</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg">
            • Passionate MERN stack developer and open-source contributor who
            loves building modern, creative, and user-friendly web applications
            with clean UI, smooth animations, responsive designs, and innovative
            web experiences. <br />
            <br />• Currently exploring full-stack development, React, Node.js,
            and machine learning while actively contributing to open-source
            projects like GSSoC (Rank #4), creating finance-based tools and
            interactive UI components, and continuously learning new
            technologies to improve skills and build impactful real-world
            projects.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* ================= EXPERIENCE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-purple-400 text-xl" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>

            <div className="relative pl-6 space-y-10">
              {/* Gradient Line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"></div>

              {/* VEERSA */}
              <div className="relative group">
                <div className="absolute -left-[9px] top-2 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

                <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <FaCalendarAlt />
                    <span>Jan 2026 - Present</span>
                  </div>

                  <h3 className="text-lg font-semibold">
                    Software Engineer Intern
                  </h3>

                  <p className="text-purple-300 text-sm mb-2">
                    Veersa Technologies • Noida
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Working across frontend, backend, and APIs to build scalable
                    web applications. Developed UI components, handled business
                    logic, integrated REST APIs, and managed MongoDB databases.
                    Also explored Agentic AI systems and their integration into
                    real-world applications.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      "React",
                      "Node.js",
                      "MongoDB",
                      "REST APIs",
                      "Agentic AI",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* GSSOC */}
              <div className="relative group">
                <div className="absolute -left-[9px] top-2 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

                <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <FaCalendarAlt />
                    <span>Jul 2025 - Oct 2025</span>
                  </div>

                  <h3 className="text-lg font-semibold">
                    Full Stack Developer • GSSoC’25
                  </h3>

                  <p className="text-purple-300 text-sm mb-2">
                    GirlScript Summer of Code
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Secured Rank #4 with 1700+ points and 210+ pull requests.
                    Built reusable React components, backend APIs, and improved
                    UI/UX. Collaborated with global contributors and worked on
                    real-world open-source projects.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      "React",
                      "Node.js",
                      "Open Source",
                      "GitHub",
                      "DSA",
                      "Tailwind CSS",
                      "JavaScript",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* HACKTOBERFEST */}
              <div className="relative group">
                <div className="absolute -left-[9px] top-2 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

                <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <FaCalendarAlt />
                    <span>Oct 2025</span>
                  </div>

                  <h3 className="text-lg font-semibold">
                    Open Source Contributor
                  </h3>

                  <p className="text-purple-300 text-sm mb-2">Hacktoberfest</p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Contributed 6+ high-quality PRs across multiple
                    repositories. Improved code quality, fixed bugs, and
                    implemented features while collaborating with global
                    developers.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {["React", "Node.js", "Open Source", "GitHub", "DSA"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-teal-500/10 border border-teal-500/20 rounded"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CERTIFICATIONS ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <FaCertificate className="text-purple-400 text-xl" />
              <h2 className="text-2xl font-semibold">Certifications</h2>
            </div>

            <div className="space-y-6">
              {/* ================= POSTMAN ================= */}
              <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                <div className="flex items-start gap-4">
                  <FaServer className="text-orange-400 text-xl mt-1" />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      Postman API Fundamentals Student Expert
                    </h3>

                    <p className="text-purple-300 text-sm">
                      Postman • Issued Sep 2025
                    </p>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      Demonstrated strong proficiency in API fundamentals using
                      Postman, including request handling, response analysis,
                      API documentation, and testing. Gained hands-on experience
                      with REST APIs, environment variables, and collaborative
                      API workflows.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["API", "REST APIs", "Testing", "Postman"].map(
                        (s, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded"
                          >
                            {s}
                          </span>
                        ),
                      )}
                    </div>

                    {/* Credential */}
                    <p className="text-xs text-gray-500 mt-2">
                      Credential ID: 68cd8c18ac8edb1e76cd31de
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SIH ================= */}
              <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                <div className="flex items-start gap-4">
                  <FaTrophy className="text-yellow-400 text-xl mt-1" />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      Smart India Hackathon 2024 – Participant
                    </h3>

                    <p className="text-purple-300 text-sm">DCRUST • 2024</p>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      Selected for the Internal Smart India Hackathon as part of
                      Team AgroSmart. Worked on real-world problem-solving and
                      project development, validated by official IIC
                      certification.
                    </p>

                    <span className="inline-block mt-3 text-xs px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded">
                      Hackathon • Team Project
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= GSSOC ================= */}
              <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                <div className="flex items-start gap-4">
                  <FaCode className="text-pink-400 text-xl mt-1" />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      GirlScript Summer of Code (GSSoC’25)
                    </h3>

                    <p className="text-purple-300 text-sm">
                      Issued Aug 2025 • Expires Oct 2025
                    </p>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      Active open-source contributor with strong impact. Earned
                      recognition through multiple contributions, code
                      improvements, and collaboration across global teams.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Open Source", "React", "Collaboration"].map((s, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-purple-500/20 rounded">
                      Certificate + LOR + Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= GOOGLE CLOUD ================= */}
              <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                <div className="flex items-start gap-4">
                  <FaCloud className="text-blue-400 text-xl mt-1" />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      Google Cloud AR Facilitator – Champion
                    </h3>

                    <p className="text-purple-300 text-sm">
                      Google Cloud • Issued Aug 2024
                    </p>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      Recognized as a Champion for achieving milestones and
                      active participation in the Google Cloud AR Facilitator
                      Program.
                    </p>

                    <span className="inline-block mt-3 text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded">
                      Cloud • Achievement
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= INTERNSHALA ================= */}
              <div className="bg-white/10 p-5 rounded-xl hover:bg-white/15 transition">
                <div className="flex items-start gap-4">
                  <FaCode className="text-emerald-400 text-xl mt-1" />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      Web Development Training
                    </h3>

                    <p className="text-purple-300 text-sm">
                      Internshala • Jul 2024
                    </p>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      Completed an 8-week intensive training covering HTML, CSS,
                      Bootstrap, JavaScript, React, DBMS, and AI in web
                      development. Built a final project applying full-stack
                      concepts.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {["React", "CSS", "JavaScript", "DBMS"].map((s, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
