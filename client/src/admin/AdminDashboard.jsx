import { useState } from 'react';
import AddProject from './AddProject';
import AddClient from './AddClient';
import ViewContacts from './ViewContacts';
import ViewSubscribers from './ViewSubscribers';
import { FaPlus, FaUserPlus, FaAddressBook, FaEnvelope } from 'react-icons/fa';

const AdminDashboard = () => {
  const [section, setSection] = useState('projects');

  return (
    <section className="min-h-screen w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          ⚙️ Admin Dashboard
        </h1>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button
            onClick={() => setSection('projects')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition ${
              section === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-700 border border-blue-300 hover:bg-blue-50'
            }`}
          >
            <FaPlus /> Add Project
          </button>
          <button
            onClick={() => setSection('clients')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition ${
              section === 'clients'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
            }`}
          >
            <FaUserPlus /> Add Client
          </button>
          <button
            onClick={() => setSection('contacts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition ${
              section === 'contacts'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <FaAddressBook /> View Contacts
          </button>
          <button
            onClick={() => setSection('subscribers')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition ${
              section === 'subscribers'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-yellow-700 border border-yellow-300 hover:bg-yellow-50'
            }`}
          >
            <FaEnvelope /> View Subscribers
          </button>
        </div>

        {/* Section Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {section === 'projects' && <AddProject />}
          {section === 'clients' && <AddClient />}
          {section === 'contacts' && <ViewContacts />}
          {section === 'subscribers' && <ViewSubscribers />}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;