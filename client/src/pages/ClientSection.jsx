import { useEffect, useState } from "react";
import axios from "axios";

const ClientSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/clients`)
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="clients"
      className="min-h-screen w-full bg-white px-4 py-20 flex flex-col items-center justify-center"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          💬 Happy Clients
        </h2>
        <p className="text-gray-600 text-lg mb-12 px-4">
          We take pride in helping our clients grow their businesses. Here's what a few of them have to say about working with us.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-6 px-2 md:px-6 min-w-max">
          {clients.map((client, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${client.image}`}
                  alt={client.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4 shadow"
                />
                <p className="italic text-gray-600 text-sm mb-4 leading-relaxed">
                  “{client.description}”
                </p>
                <h4 className="text-lg font-semibold text-gray-800">
                  {client.name}
                </h4>
                <p className="text-sm text-blue-600 font-medium">
                  {client.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-gray-500 text-base text-center max-w-2xl px-4">
        Join our growing family of satisfied clients and let’s build something extraordinary together.
      </p>
    </section>
  );
};

export default ClientSection;