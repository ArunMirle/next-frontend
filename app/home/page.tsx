
'use client'
import Link from "next/link";
import { QueryClient } from "react-query";
import Navbar from "../navbar/page";
const Home = () => {
    const queryClient = new QueryClient();
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-3xl text-center font-bold underline mb-8">
                    Hello, Welcome to the Contact Form page
                </h1>
            </div>
        </>


    );
}


export default Home;
