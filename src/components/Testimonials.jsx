import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Laura",
    text: "El QR me dio tranquilidad. Si mi perra se pierde, quien la encuentre puede contactarme al instante.",
  },
  {
    name: "Mateo",
    text: "Me encantó lo fácil que fue registrar a mi gato y saber que estoy cubierto si algo pasa.",
  },
  {
    name: "Ana",
    text: "El diseño es hermoso y la atención fue increíble. Súper recomendable para dueños responsables.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Lo que dicen quienes nos eligieron
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-teal-400 text-3xl mb-4 mx-auto" />
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <p className="font-semibold text-gray-900">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
