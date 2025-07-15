import { useState } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-6xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl px-6 py-10 sm:px-10 md:px-16 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Left Info Section */}
        <div className="space-y-6 flex flex-col justify-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-blue-700"
            animate={{
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 12px rgba(59,130,246,0.8)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let's Talk 🤝
          </motion.h2>

          <p className="text-gray-700 text-base sm:text-lg">
            Whether you have a question, a project idea, or just want to say hello — our team is ready to hear from you!
          </p>

          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-3 hover:text-blue-700 transition">
              <FaPhoneAlt className="text-blue-600 hover:scale-110 transition-transform duration-300" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-700 transition">
              <FaEnvelope className="text-blue-600 hover:scale-110 transition-transform duration-300" />
              <span>contact@consultpro.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-700 transition">
              <FaMapMarkerAlt className="text-blue-600 hover:scale-110 transition-transform duration-300" />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
          </div>

          <div className="pt-4 text-gray-600 text-sm sm:text-base space-y-2">
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 animate-pulse" />
              Trusted by 500+ clients worldwide
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 animate-pulse" />
              Quick response within 24 hours
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 animate-pulse" />
              100% Confidential & Professional
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Send us a message 📬
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["fullName", "email", "mobile", "city"].map((field, idx) => (
              <motion.input
                key={field}
                type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                name={field}
                placeholder={
                  field === "fullName"
                    ? "Full Name"
                    : field === "mobile"
                    ? "Mobile Number"
                    : field === "city"
                    ? "City"
                    : "Email Address"
                }
                value={form[field]}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition hover:scale-[1.02]"
                whileHover={{ scale: 1.03 }}
              />
            ))}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl transform"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;