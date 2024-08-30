'use client';

import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { showContactInfoApi } from "../apis/showContactInfo";



export const ContactDisplay: FC = () => {
  const [success, setSuccess] = useState<string | null>(null);

  const mutation = useMutation(showContactInfoApi, {
    onSuccess: (data) => {
      setSuccess('Contacts fetched successfully!');
    },
    onError: () => {
      setSuccess(null);
      alert('Failed to fetch contacts. Please try again.');
    },
  });

  
  useEffect(() => {
    mutation.mutate();
  }, []);

  if (mutation.isLoading) return <h2>Loading...</h2>;
  //if (mutation.isError) return <h2>An error occurred: {mutation.error.message}</h2>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact List</h2>
      {success && <p className="text-green-600 mb-4">{success}</p>}

      {/* Display fetched data */}
      {mutation.data && (
        <div className="mt-6 space-y-4">
          {mutation.data.map((user: any) => (
            <div key={user._id} className="border p-4 rounded-lg shadow-md bg-white">
              <p className="text-lg font-semibold">
                Email: <span className="font-normal">{user.email}</span>
              </p>
              <p className="text-lg">
                Phone: <span className="font-normal">{user.phoneNumber || 'N/A'}</span>
              </p>
              <p className="text-lg">
                Query: <span className="font-normal">{user.query || 'N/A'}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
