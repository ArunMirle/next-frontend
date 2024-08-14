
"use client";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';

const contactSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  phoneNumber: z.string().optional(),
  query: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post('http://localhost:5000/contacts/add', data);
      setSuccess('Query submitted successfully!');
      reset(); // Reset the form fields after successful submission
    } catch (error: any) {
      setError('Failed to submit the query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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


      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              {...register('phoneNumber')}
              className="mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="query" className="block text-base font-medium text-gray-700">Query</label>
            <textarea
              id="query"
              {...register('query')}
              className="mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>

          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
