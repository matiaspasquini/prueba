
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section id="contact" className="relative bg-gradient-to-r from-white via-teal-50 to-white py-16 px-6 text-center overflow-hidden rounded-2xl shadow-md mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto z-10 relative"
      >
        <div className="flex justify-center text-teal-400 text-5xl mb-4">
          <FaPaw />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          ¿Tu mascota ya tiene su QR?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Es momento de cuidarlos más que nunca. Pedí el tuyo ahora y quedate tranquilo.
        </p>
        <motion.a
          href="https://wa.me/5493884433132?text=Hola!%20Quiero%20pedir%20el%20QR%20para%20mi%20mascota.%0ANombre%20de%20la%20mascota:%20______%0ARaza:%20______%0ATeléfono%20de%20contacto:%20______%0A¿Tiene%20alguna%20condición%20especial?%20______"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all"
        >
          Pedir mi QR
        </motion.a>
      </motion.div>

      {/* Ícono decorativo suave de fondo */}
      <div className="absolute bottom-4 right-4 opacity-10 text-teal-300 text-9xl pointer-events-none">
        <FaPaw />
      </div>
    </section>
  );
}
