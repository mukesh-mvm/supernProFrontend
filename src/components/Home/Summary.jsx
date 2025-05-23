"use client";

import Link from 'next/link';
import { useState } from 'react';

const data1 = [
  { id: 6, title: "Here is how Govt Has Limited Gold Storage at Home", image: "/blog3.png", base: "finance" , desc:"Know how much yellow metal you can keep at home without facing tax scrutiny and how the income from gold is taxed." },
  { id: 5, title: "Facts About ATM Withdrawal Charges For Banks", image: "/blog1.png", base: "finance", desc:"Banks provide a limited number of complimentary ATM transactions every month, and the allowance varies based on the type of savings account selected." },
  { id: 2, title: "Best Personal Loan Options for All Your Needs", image: "/personal_loan.webp", base: "finance", desc:"To assist aspiring business owners, Indian Market has launched a number of business loans.Explore these 5 best Business loans in India to upgrade your business game." },
  { id: 3, title: "Leading Business Loan Options for Indian Entrepreneurs in 2025", image: "/tech.webp", base: "finance", desc:"Personal finance is extensive and covers everything from medical emergencies to dream vacations.Thankfully, there are numerous personal loans today that cover all contingencies." },
  { id: 4, title: "Credit Or Debit Card Rules: Benefits For Customers", image: "/blog2.png", base: "finance", desc:"The Reserve Bank of India (RBI) has introduced a draft rule that empowers debit, credit, and prepaid card users to select their preferred card network."},
  { id: 7, title: "5 Reasons Why Too Much Sugar Is Bad For You", image: "/blog4.png", base: "fashion-lifestyle", desc:"Sugar is fine for you in small amounts, but too much can increase your risk of several serious medical conditions." },
  { id: 1, title: "How to Use Copilot Vision", image: "/copilotVision.webp", base: "fashion-lifestyle", desc:"Copilot is one of the most popular AI assistants today. Microsoft recently launched a new feature called ‘Copilot Vision’. Here’s everything you need to know about this feature, including key features, step-by-step instructions, and helpful tips." },
];

const Summary = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const sortedData = [...data1].sort((a, b) => a.id - b.id);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <div className="mx-auto  flex flex-col md:flex-row gap-6">
      
      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://mvmbs.com/images/tata_side_image.webp"
            alt="Tata Neu Event"
            className="w-full object-cover rounded-md"
          />
        </div>
      </aside>

      <main className="w-full md:w-3/5 flex flex-col gap-4 p-2  mt-[-25px]">
      <h2 className='text-2xl font-bold text-gray-700 '>Recent Blogs</h2>
        {sortedData.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="w-full p-4 flex flex-col md:flex-row items-center gap-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl w-full md:w-40 h-auto object-cover"
            />
          <div>
              <Link
              href={`/${item.base}/${item.title.toLowerCase().replace(/ /g, "-").replace(/:/g, "_")}`}
              className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              {item.title}

            </Link>
            <p>{item.desc}</p>
          </div>
          </div>
        ))}

        {visibleCount < sortedData.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Top Offers</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">Breaking: Market hits all-time high</li>
            <li className="border-b pb-2">Politics: New policies announced</li>
            <li className="border-b pb-2">Sports: Championship finals highlights</li>
            <li className="border-b pb-2">Tech: New smartphone released</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Summary;
