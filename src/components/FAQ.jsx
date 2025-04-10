// src/components/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "¿Qué pasa si alguien escanea el QR?",
    answer: "Te llegará una notificación con la ubicación de tu mascota en tiempo real.",
  },
  {
    question: "¿Cómo registro a mi mascota?",
    answer: "Al adquirir el QR, accedés a una plataforma para cargar los datos esenciales.",
  },
  {
    question: "¿Necesito descargar una app?",
    answer: "No, todo funciona desde cualquier navegador, sin instalaciones.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-teal-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180 text-teal-400" : "text-gray-500"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="px-5 pb-5 text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
