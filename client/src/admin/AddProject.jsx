import { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [form, setForm] = useState({
    name: '',
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
    data.append('description', form.description);
    data.append('image', form.image);

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/projects`, data);
    alert('Project Added!');
    setForm({ name: '', description: '', image: null });
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side Illustration + Info */}
        <div className="md:w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
            alt="Project Icon"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">Add Your Project</h2>
          <p className="text-blue-100 text-center">
            Showcase your work by uploading your best projects, complete with a description and visuals.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 md:p-10 bg-white space-y-6"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Project Details
          </h3>

          <input
            name="name"
            placeholder="Project Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            name="description"
            placeholder="Brief Project Description"
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
            className="w-full border border-gray-300 p-2 rounded-lg file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer hover:file:bg-blue-700 transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Add Project
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProject;