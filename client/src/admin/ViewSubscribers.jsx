import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEnvelopeOpenText, FaUsers, FaSearch } from 'react-icons/fa';

const ViewSubscribers = () => {
  const [emails, setEmails] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/newsletter`)
      .then((res) => {
        setEmails(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filteredData = emails.filter((item) =>
      item.email.toLowerCase().includes(value)
    );
    setFiltered(filteredData);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-700 flex justify-center items-center gap-2 mb-2">
            <FaEnvelopeOpenText className="text-blue-600" />
            Newsletter Subscribers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Below is a list of users who have subscribed to your newsletter.
            Use this list for email campaigns, product updates, or marketing messages.
          </p>
        </div>

        {/* Count & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 px-2">
          <div className="flex items-center gap-2 text-blue-700 font-medium text-lg">
            <FaUsers />
            <span>Total Subscribers: {filtered.length}</span>
          </div>

          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by email"
              value={search}
              onChange={handleSearch}
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Email List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {filtered.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filtered.map((subscriber, i) => (
                <li
                  key={i}
                  className="px-6 py-4 flex items-center gap-3 hover:bg-gray-50 transition"
                >
                  <FaEnvelopeOpenText className="text-blue-500 text-xl" />
                  <span className="text-gray-700">{subscriber.email}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 py-12">
              No subscribers found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewSubscribers;