import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormInputs, contactFormSchema } from "../validations/contactForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { saveContactInfoApi } from "../apis/saveContactInfo";

export const ContactForm: FC = () => {
  const [success, setSuccess] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });
  const mutation = useMutation(saveContactInfoApi,

    {
      onSuccess: () => {
        setSuccess('Query submitted successfully!');
        reset();
      },
      onError: () => {
        setSuccess(null);
        alert('Failed to submit the query. Please try again.');
      },
    }
  );

  const onSubmit = (data: ContactFormInputs) => {
    mutation.mutate(data);
  };

  return <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
    {success && <p className="text-green-600 mb-4">{success}</p>}
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
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  </div>


}