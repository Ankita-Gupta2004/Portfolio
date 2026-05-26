import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("hero");

  const handleScroll = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="relative text-sm text-gray-400 hover:text-white transition"
          >
            {/* Text */}
            <motion.span whileHover={{ y: -1 }}>{link.label}</motion.span>

            {/* Underline Animation */}
            {active === link.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-emerald-400 rounded"
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
