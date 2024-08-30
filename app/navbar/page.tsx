'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800 p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-center md:justify-start">
                    <div className="flex space-x-6">
                        <Link href="/" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
                            Home
                        </Link>
                        <Link href="/contact-us" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
                            Register
                        </Link>
                        <Link href="/contact-info" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
                            Contact-List
                        </Link>
                        {/* <Link href="/display_users" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
              ContactList-ReactQuery
            </Link> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar