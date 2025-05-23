import Link from "next/link";

const SimilarBlogs = () => {
  const blogs = [
    { id: 5, title: "Credit Or Debit Card Rules: Benefits For Customers", image: "/blog2.png", base: "finance" },
    { id: 1, title: "Best Personal Loan Options for All Your Needs", image: "/personal_loan.webp", base: "finance" },
    { id: 2, title: "Leading Business Loan Options for Indian Entrepreneurs in 2025", image: "/tech.webp", base: "finance" },
    { id: 6, title: "Facts About ATM Withdrawal Charges For Banks", image: "/blog1.png", base: "finance" },
    { id: 4, title: "5 Reasons Why Too Much Sugar Is Bad For You", image: "/blog4.png", base: "fashion-lifestyle" },
    { id: 3, title: "Here is how Govt Has Limited Gold Storage at Home", image: "/blog3.png", base: "finance" },
  ];

  // Shuffle function
  const getRandomBlogs = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomBlogs = getRandomBlogs(blogs, 4);

  return (
    <aside className="w-full md:w-1/5 bg-gray-100 p-2 rounded-lg ">
      <h2 className="text-lg font-bold mb-4 text-center border-b pb-2">Latest Blogs</h2>
      <div className="space-y-2">
        {randomBlogs.map((property) => (
          <Link
            key={property.id}
            href={`/${property.base}/${property.title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/:/g, "_")}`}
            className="block"
          >
            <div className="bg-[#eeeef5] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-2 flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-[12px] font-medium text-blue-800 hover:text-[#4F1C51] transition-colors line-clamp-3">
                  {property.title}
                </h3>
              </div>
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SimilarBlogs;
