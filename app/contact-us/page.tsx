"use client";
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import Navbar from '../navbar/page';
import { ContactForm } from './components/contact-form';


const queryClient = new QueryClient();

const ContactFormPage = () => {
  
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <ContactForm/>
      </QueryClientProvider>
    </>
  );
};

export default ContactFormPage;
