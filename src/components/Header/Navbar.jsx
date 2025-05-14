'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold hover:text-gray-200">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-semibold">
          <Link href="/news" className="hover:text-gray-300">News</Link>
          <Link href="/blogs" className="hover:text-gray-300">Blog</Link>
          <Link href="/india-global" className="hover:text-gray-300">India Global</Link>

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-lg text-white focus:outline-none"
          />
          <Link href="/signin" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">Sign In</Link>
          <Link href="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-white text-center py-4 space-y-4">
          <Link href="/news" className="block bg-blue-400 p-3 rounded-2xl hover:text-gray-300">News</Link>
          <Link href="/blog" className="block bg-blue-400 p-3 rounded-2xl hover:text-gray-300">Blog</Link>
          <Link href="/india-global" className="block bg-blue-400 p-3 rounded-2xl hover:text-gray-300">India Global</Link>
          
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-lg border text-black w-full p-3 m-auto focus:outline-none"
          />
          <Link href="/signin" className="block bg-yellow-400 mt-2 text-white px-4 py-2 rounded-lg hover:bg-gray-200">Sign In</Link>
          <Link href="/signup" className="block bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
