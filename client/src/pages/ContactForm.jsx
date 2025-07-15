import { useState } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/contacts`, form)
      .then(() => {
        alert("Submitted Successfully!");
        setForm({ fullName: "", email: "", mobile: "", city: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center bg-fixed bg-center bg-cover px-4 py-16 sm:py-20"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/10/22/09/15/touch-screen-2877178_1280.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl px-6 py-10 sm:px-10 md:px-16 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Let's Talk 🤝
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Whether you have a question, a project idea, or just want to say hello — our team is ready to hear from you!
          </p>

          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>contact@consultpro.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
          </div>

          <div className="pt-4 text-gray-600 text-sm sm:text-base space-y-2">
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Trusted by 500+ clients worldwide
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Quick response within 24 hours
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              100% Confidential & Professional
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Send us a message 📬
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-[2px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;