import { FaCogs, FaRocket, FaPalette, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white px-6 py-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex-1"
        >
          <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            About Our Company
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Empowering Brands Through <span className="text-blue-600">Creative Strategy</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are a passionate team of developers, designers, and marketers focused on delivering impactful digital experiences that drive growth and enhance user engagement.
          </p>

          <ul className="text-gray-700 text-base space-y-5">
            <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
              <FaCogs className="text-blue-600 text-xl mr-3 animate-pulse" />
              Tailored Web Solutions for Modern Businesses
            </li>
            <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
              <FaRocket className="text-green-500 text-xl mr-3 animate-bounce" />
              Growth-Driven Digital Marketing
            </li>
            <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
              <FaPalette className="text-purple-500 text-xl mr-3 animate-pulse" />
              Brand Identity & UX Strategy
            </li>
            <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
              <FaComments className="text-yellow-500 text-xl mr-3 animate-bounce" />
              Results-Focused & Transparent Communication
            </li>
          </ul>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6 relative"
        >
          {/* Glowing Effects */}
          <div className="absolute w-48 h-48 bg-blue-400 blur-3xl rounded-full top-4 left-8 opacity-20 animate-pulse z-0" />
          <div className="absolute w-48 h-48 bg-purple-500 blur-3xl rounded-full bottom-8 right-8 opacity-20 animate-ping z-0" />

          {/* Animated Image 1 */}
          <motion.img
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
            alt="Teamwork"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-8 border-blue-500 shadow-xl hover:shadow-blue-400/60 transition duration-300"
          />

          {/* Animated Image 2 */}
          <motion.img
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"
            alt="Consulting"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-8 border-indigo-500 shadow-xl hover:shadow-indigo-400/60 transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;