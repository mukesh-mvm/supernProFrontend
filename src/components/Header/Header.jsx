'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-center md:flex-row flex-col items-center md:space-x-6 space-y-4 md:space-y-0 text-white font-semibold">
        <Link href="/" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Home</Link>
        <Link href="#" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Politics</Link>
        <Link href="/finance" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Finance</Link>
        <Link href="#" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Automobile</Link>
        <Link href="#" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Real State</Link>
        <Link href="/fashion-lifestyle" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Fashion & Lifestyle</Link>
        <Link href="#" className="bg-gray-800 px-4 py-2 rounded-lg w-full text-center md:w-auto hover:bg-gray-600 transition">Sports</Link>
      </nav>
    </header>
  );
}
