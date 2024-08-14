import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold underline mb-8">
          Hello, Welcome to the Contact Form page
        </h1>

      </div>
    </>
  )
}
