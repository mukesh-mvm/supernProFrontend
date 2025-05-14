'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

const data1 = [
  {id:1,title:"Here is how Govt Has Limited Gold Storage at Home",image:"/blog3.png",base:"finance"},
  { id: 2, title: "Facts About ATM Withdrawal Charges For Banks", image: "/blog1.png",base:"finance" },
  { id: 3, title: "Credit Or Debit Card Rules: Benefits For Customers", image: "/blog2.png",base:"finance" },
 { id: 4, title: "5 Reasons Why Too Much Sugar Is Bad For You", image: "/blog4.png",base:"fashion-lifestyle" },
]

export default function NewsLayout() {
  const [trendingProperties] = useState(data1);

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Latest News */}
      <aside className="w-full md:w-1/5 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Latest News</h2>
        <ul className="space-y-3">
          <li className="border-b pb-2">Breaking: Market hits all-time high</li>
          <li className="border-b pb-2">Politics: New policies announced</li>
          <li className="border-b pb-2">Sports: Championship finals highlights</li>
          <li className="border-b pb-2">Tech: New smartphone released</li>
        </ul>
      </aside>

      {/* Trending Properties */}
      <main className="w-full md:w-3/5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Trending Topics</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {trendingProperties.map((property, index) => (
            <div key={index} className="relative w-full h-96">
              <h3 className=" cursor-pointer hover:text-red-300 absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm z-10">
                
                <Link href={`/${property?.base}/${property?.title.toLowerCase().replace(/ /g, "-").replace(/:/g, "_")}`}>
                   {property.title}
                </Link>
              </h3>
              <img src={property.image} alt={property.title} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </Carousel>
      </main>

      {/* Advertisement */}
      <aside className="w-full md:w-1/5 bg-gray-200 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-bold mb-4">Advertisement</h2>
        <div className="bg-gray-300 h-40 flex items-center justify-center rounded-lg">
          Ad Banner
        </div>
      </aside>
    </div>
  );
}
