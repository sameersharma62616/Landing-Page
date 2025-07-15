import { FaCogs, FaRocket, FaPalette, FaComments } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-12">

        {/* CONTENT SECTION */}
        <div className="text-center md:text-left flex-1">
          <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            About Our Company
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Empowering Brands Through <span className="text-blue-600">Creative Strategy</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are a creative team of developers, designers, and marketers dedicated to building brands that last.
            Our goal is to deliver personalized digital experiences that not only look beautiful but also drive business success.
          </p>

          <ul className="text-gray-700 text-base space-y-4">
            <li className="flex items-center transition-transform duration-300 hover:translate-x-1">
              <FaCogs className="text-blue-600 text-xl mr-3" />
              Tailored Web Solutions for Modern Businesses
            </li>
            <li className="flex items-center transition-transform duration-300 hover:translate-x-1">
              <FaRocket className="text-green-500 text-xl mr-3" />
              Growth-Driven Digital Marketing
            </li>
            <li className="flex items-center transition-transform duration-300 hover:translate-x-1">
              <FaPalette className="text-purple-500 text-xl mr-3" />
              Brand Identity & UX Strategy
            </li>
            <li className="flex items-center transition-transform duration-300 hover:translate-x-1">
              <FaComments className="text-yellow-500 text-xl mr-3" />
              Results-Focused & Transparent Communication
            </li>
          </ul>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
            alt="Teamwork"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-8 border-blue-500 shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"
            alt="Consulting"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-8 border-indigo-500 shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;