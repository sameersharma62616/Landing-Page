import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Clients", to: "clients" },
    { name: "Contact", to: "contact" },
    { name: "Newsletter", to: "newsletter" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* 👇 Logo with continuous animation */}
        <motion.div
          className="text-2xl font-bold text-blue-600 flex items-center gap-2"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💼 <span className="text-gray-800">ConsultPro</span>
        </motion.div>

        {/* 👇 Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              animate={{ y: [0, -1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
                repeatType: "reverse",
              }}
              className="cursor-pointer"
            >
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </ScrollLink>
            </motion.div>
          ))}

          {/* 👇 Admin Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <RouterLink
              to="/admin"
              className="ml-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-green transition shadow"
            >
              Admin Panel
            </RouterLink>
          </motion.div>
        </div>

        {/* 👇 Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 👇 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-4 py-6 shadow-inner space-y-4 text-center"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-lg"
              >
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  {link.name}
                </ScrollLink>
              </motion.div>
            ))}

            {/* Admin Panel (Mobile) */}
            <RouterLink
              to="/admin"
              onClick={closeMenu}
              className="inline-block bg-blue-400 text-white px-4 py-2 rounded hover:bg-black transition"
            >
              Admin Panel
            </RouterLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;