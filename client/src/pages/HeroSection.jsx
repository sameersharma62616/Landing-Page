

import { FaLightbulb, FaChartLine, FaUserTie, FaRocket } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2021/12/20/09/52/window-6882654_1280.jpg')",
        backdropFilter: "blur(20px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-6xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Unlock Business Potential with <br className="hidden md:block" />
          <span className="text-blue-400">ConsultPro Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-4">
          Empowering startups and enterprises with strategic guidance, marketing
          expertise, and personalized business solutions.
        </p>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          With industry professionals and data-driven insights, we help you
          scale faster, smarter, and stronger.
        </p>

        {/* Highlights with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6 mb-10 max-w-4xl mx-auto text-sm sm:text-base">
          <div className="flex justify-self-center items-center gap-3 text-left">
            <FaLightbulb className="text-yellow-400 text-2xl" />
            <span>Innovative Strategies</span>
          </div>
          <div className="flex items-center justify-self-center gap-3 text-left">
            <FaChartLine className="text-green-400 text-2xl" />
            <span>Data-Driven Growth</span>
          </div>
          <div className="flex items-center justify-self-center gap-3 text-left">
            <FaUserTie className="text-purple-400 text-2xl" />
            <span>Expert Consultations</span>
          </div>
          <div className="flex items-center justify-self-center gap-3 text-left">
            <FaRocket className="text-pink-400 text-2xl" />
            <span>Fast-Track Scaling</span>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
          🚀 Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;