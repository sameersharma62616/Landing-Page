import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          💼 <span className="text-gray-800">ConsultPro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-6 shadow-inner space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 text-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;