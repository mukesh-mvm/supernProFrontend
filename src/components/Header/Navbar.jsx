'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f4f4f5] text-gray-600 shadow-lg w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-4">
        
        <Link href="/" className="flex-shrink-0">
          <img
            src="/Supoernprop_Logo1-removebg-preview.png"
            alt="logo"
            className="h-20 md:h-24 object-contain"
          />
        </Link>

        <div className="hidden md:flex flex-wrap items-center gap-4 text-[16px] font-semibold">
          {[
            { href: "/", label: "Home" },
            { href: "#", label: "Politics" },
            { href: "/finance", label: "Finance" },
            { href: "#", label: "Automobile" },
            { href: "#", label: "Real State" },
            { href: "/fashion-lifestyle", label: "Fashion & Lifestyle" },
            { href: "#", label: "Sports" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="relative group w-fit">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#4F1C51] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-lg text-gray-800 focus:outline-none"
          />

          <Link href="/signin" className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-200">
            Sign In
          </Link>
          <Link href="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-center py-4 space-y-4 px-4 overflow-y-auto">
          <Link href="/news" className="block bg-blue-400 p-3 rounded-2xl text-white hover:bg-blue-500">News</Link>
          <Link href="/blogs" className="block bg-blue-400 p-3 rounded-2xl text-white hover:bg-blue-500">Blog</Link>
          <Link href="/india-global" className="block bg-blue-400 p-3 rounded-2xl text-white hover:bg-blue-500">India Global</Link>
          
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-lg text-black w-full focus:outline-none"
          />
          <Link href="/signin" className="block bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">Sign In</Link>
          <Link href="/signup" className="block bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
