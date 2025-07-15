import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPaperPlane, FaShieldAlt } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/newsletter`, { email })
      .then(() => {
        alert("Subscribed!");
        setEmail("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="min-h-[60vh] w-full bg-gradient-to-br from-white via-blue-50 to-white px-4 sm:px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Image Section */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 flex-shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Newsletter"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-blue-500 sm:inline hidden" />
            Stay in the Loop
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl mx-auto md:mx-0">
            Subscribe to our newsletter for updates, tips, and insights — delivered straight to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <input
              type="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-2/3 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow transition-all"
            >
              <FaPaperPlane className="sm:inline hidden" />
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center md:justify-start gap-2">
            <FaShieldAlt className="text-gray-400 sm:inline hidden" />
            We respect your privacy. No spam ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;