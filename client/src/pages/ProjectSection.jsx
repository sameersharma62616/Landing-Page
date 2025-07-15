import { useEffect, useState } from "react";
import axios from "axios";

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
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_960_720.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          🚀 Our Latest Projects
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          We take pride in building meaningful digital experiences for businesses and startups. 
          Our projects reflect creativity, innovation, and strategic thinking tailored for modern brands.
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-90 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/${proj.image}`}
                alt={proj.name}
                className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{proj.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{proj.description}</p>
                <button className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <p className="mt-5 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Interested in building something impactful like this? Let’s create your next big idea together.
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;