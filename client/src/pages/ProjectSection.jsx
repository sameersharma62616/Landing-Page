import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-fixed bg-cover bg-center overflow-hidden text-white"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_960_720.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl text-center">
        {/* Animated Heading */}
        <motion.h2
          animate={{
            textShadow: [
              "0px 0px 0px rgba(255,255,255,0.8)",
              "0px 0px 15px rgba(0,140,255,0.8)",
              "0px 0px 0px rgba(255,255,255,0.8)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          🚀 Our Latest Projects
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          animate={{
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          We take pride in building meaningful digital experiences for
          businesses and startups. Our projects reflect creativity, innovation,
          and strategic thinking tailored for modern brands.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/10 hover:shadow-blue-500/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${proj.image}`}
                  alt={proj.name}
                  className="w-full h-52 object-cover rounded-t-2xl transform group-hover:scale-105 group-hover:brightness-110 transition duration-500"
                />
              </div>

              <div className="p-5 flex flex-col justify-center items-center text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  {proj.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {proj.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-4 inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 hover:shadow-lg hover:brightness-110"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looping Fade Text */}
        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mt-10 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto"
        >
          Want to create something powerful like this? Let’s collaborate and
          build your next success story together.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectSection;