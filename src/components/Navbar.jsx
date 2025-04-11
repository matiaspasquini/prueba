import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt="Identy Tag Logo"
            className="w-28 md:w-36 object-contain"
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li>
            <Link to="how" smooth duration={500} className="cursor-pointer hover:text-teal-500">
              Cómo Funciona
            </Link>
          </li>
          <li>
            <Link to="faq" smooth duration={500} className="cursor-pointer hover:text-teal-500">
              Preguntas
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-teal-500">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Nav Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium"
          >
            <li>
              <Link to="how" smooth duration={500} className="cursor-pointer hover:text-teal-500" onClick={() => setIsOpen(false)}>
                Cómo Funciona
              </Link>
            </li>
            <li>
              <Link to="faq" smooth duration={500} className="cursor-pointer hover:text-teal-500" onClick={() => setIsOpen(false)}>
                Preguntas
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-teal-500" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
