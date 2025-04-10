import { motion } from "framer-motion";
import { FaShieldAlt, FaBell, FaDog } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-teal-500 group-hover:text-teal-600 transition-colors duration-300" />,
    title: "Seguridad",
    description: "Tus datos están protegidos y solo visibles para quien escanee el código QR.",
  },
  {
    icon: <FaBell className="text-3xl text-teal-500 group-hover:text-teal-600 transition-colors duration-300" />,
    title: "Notificaciones",
    description: "Recibís una alerta instantánea con la ubicación si alguien encuentra a tu mascota.",
  },
  {
    icon: <FaDog className="text-3xl text-teal-500 group-hover:text-teal-600 transition-colors duration-300" />,
    title: "Fácil de usar",
    description: "Simplemente escaneá, registrá a tu mascota y colocá el QR en el collar.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">¿Por qué elegirnos?</h2>
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
