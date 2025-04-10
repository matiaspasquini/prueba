import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <span className="text-lg sm:text-xl font-bold text-teal-600">
          Identy Puppy
        </span>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-slate-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-teal-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="sm:hidden text-slate-700 text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-slate-700 font-medium"
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full hover:text-teal-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
