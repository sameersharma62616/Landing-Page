import { FaLightbulb, FaChartLine, FaUserTie, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

// Floating animation config
const floatAnim = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
   <section
  className="h-[120vh] md:h-[100vh] my-16 w-full relative flex items-center justify-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2021/12/20/09/52/window-6882654_1280.jpg')",
    backgroundAttachment: "fixed",
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Glowing Background Bubbles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 blur-3xl opacity-30 rounded-full animate-pulse z-0" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 blur-3xl opacity-20 rounded-full animate-ping z-0" />
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-yellow-400 blur-2xl opacity-25 rounded-full animate-pulse z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6 md:px-10 max-w-6xl text-white"
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-aqua-500 to-purple-500 text-transparent bg-clip-text animate-gradient"
        >
          Unlock Your Business Potential
          <br />
          with <span className="text-white">ConsultPro Solutions</span>
        </motion.h1>

        {/* Paragraphs */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-4">
          Empowering startups and enterprises with strategic guidance, marketing
          expertise, and personalized business solutions.
        </p>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          With industry professionals and data-driven insights, we help you scale
          faster, smarter, and stronger.
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { icon: <FaLightbulb />, color: "text-yellow-400", label: "Innovative Strategies" },
            { icon: <FaChartLine />, color: "text-green-400", label: "Data-Driven Growth" },
            { icon: <FaUserTie />, color: "text-purple-400", label: "Expert Consultations" },
            { icon: <FaRocket />, color: "text-pink-400", label: "Fast-Track Scaling" },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...floatAnim}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-xl shadow-xl flex flex-col items-center justify-center text-center text-white transition duration-300"
            >
              <div className={`text-4xl mb-3 ${item.color}`}>{item.icon}</div>
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <span className="absolute animate-ping bg-blue-400 w-full h-full rounded-full opacity-20 top-0 left-0 z-[-1]"></span>
          🚀 Get Started Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;