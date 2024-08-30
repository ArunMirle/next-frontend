"use client";
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import Navbar from '../navbar/page';
import { ContactDisplay } from './components/contact-display';


const queryClient = new QueryClient();

const ContactInfoPage = () => {

    return (
        <>
            <Navbar />
            <QueryClientProvider client={queryClient}>
                <ContactDisplay />
            </QueryClientProvider>
        </>
    );
};

export default ContactInfoPage;
