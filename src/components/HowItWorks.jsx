import { motion } from "framer-motion";
import { FaPaw, FaQrcode, FaMapMarkerAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaPaw size={30} />,
    title: "Registrá a tu mascota",
    description: "Completá el perfil digital con todos sus datos importantes.",
  },
  {
    icon: <FaQrcode size={30} />,
    title: "Pegá el QR en su collar",
    description: "Recibí el QR por correo y colocáselo al collar.",
  },
  {
    icon: <FaMapMarkerAlt size={30} />,
    title: "Dormí tranquilo",
    description:
      "Si alguien la encuentra y escanea el QR, te llegará su ubicación al instante.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
        >
          ¿Cómo funciona?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-200 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-teal-400 text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
