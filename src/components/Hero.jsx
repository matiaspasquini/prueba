import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 text-slate-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold mb-4"
        >
          Identificación inteligente para mascotas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-slate-700 mb-8"
        >
          Un collar. Un código QR. Toda la información que tu mascota necesita para volver a casa.
        </motion.p>

        <motion.a
          href="#how-it-works"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-teal-600 transition-all"
        >
          Conocé cómo funciona
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
