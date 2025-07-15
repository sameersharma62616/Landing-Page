import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaSearch,
  FaUsers,
} from "react-icons/fa";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/contacts`)
      .then((res) => {
        setContacts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);

    const filteredResults = contacts.filter((contact) =>
      `${contact.fullName} ${contact.email} ${contact.mobile} ${contact.city}`
        .toLowerCase()
        .includes(val)
    );

    setFiltered(filteredResults);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-700 mb-2 flex items-center justify-center gap-2">
            📇 Contact Entries
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            List of all contacts who submitted their information. Search and explore easily.
          </p>
        </div>

        {/* Total & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 px-2">
          <div className="flex items-center gap-2 text-blue-700 font-medium text-lg">
            <FaUsers />
            <span>Total Contacts: {filtered.length}</span>
          </div>

          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search by name, email, mobile or city"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((contact, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaUser className="text-blue-600 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {contact.fullName}
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-500" />
                    {contact.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-green-500" />
                    {contact.mobile}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    {contact.city}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 mt-8">
              No contacts found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewContacts;