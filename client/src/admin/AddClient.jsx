import { useState } from 'react';
import axios from 'axios';

const AddClient = () => {
  const [form, setForm] = useState({
    name: '',
    designation: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    setForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('designation', form.designation);
    data.append('description', form.description);
    data.append('image', form.image);

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/clients`, data);
    alert('Client Added!');
    setForm({ name: '', designation: '', description: '', image: null });
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
        {/* Left Side with illustration and text */}
        <div className="w-full md:w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Client Icon"
            className="w-28 h-28 mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">Add a Happy Client</h2>
          <p className="text-center text-blue-100">
            Easily add your client’s feedback, photo, and designation to feature them on your website. Build trust by showcasing your success stories.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 md:p-10 bg-white space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Client Details
          </h3>

          <input
            name="name"
            placeholder="Client Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            name="designation"
            placeholder="Client Designation"
            value={form.designation}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            name="description"
            placeholder="What they said about you..."
            value={form.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />

          <input
            type="file"
            onChange={handleImage}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-lg file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer hover:file:bg-blue-700 transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Add Client
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddClient;