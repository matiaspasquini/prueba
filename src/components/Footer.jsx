
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-lg font-semibold">Identy Puppy</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-4"
        >
          <a href="https://wa.me/5493884433132" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-200">
            WhatsApp
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Términos
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Política de privacidad
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
