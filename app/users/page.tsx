
"use client"


import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Contact {
  _id: string;
  email: string;
  phoneNumber?: string;
  query?: string;
}

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contacts/get');
        setContacts(response.data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-center md:justify-start">
          <div className="flex space-x-6">
            <Link href="/" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
              Home
            </Link>
            <Link href="/login" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
              Register
            </Link>
            <Link href="/users" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
              Contact-List
            </Link>
          </div>
        </div>
      </nav>



      <div className="p-6 max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Contact List</h1>
            {contacts.length === 0 ? (
              <div className="text-center text-gray-500">No contacts available.</div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact._id} className="border p-4 rounded-lg shadow-md bg-white">
                    <p className="text-lg font-semibold">Email: <span className="font-normal">{contact.email}</span></p>
                    <p className="text-lg">Phone: <span className="font-normal">{contact.phoneNumber || 'N/A'}</span></p>
                    <p className="text-lg">Query: <span className="font-normal">{contact.query || 'N/A'}</span></p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ContactList;
