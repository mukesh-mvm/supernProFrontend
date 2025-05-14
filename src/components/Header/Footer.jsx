import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-10 md:pl-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section - Logo and Address */}
        <div>
          <h4 className="text-xl  font-bold text-blue-600 ">SupremPro</h4>
          <p className="text-white text-sm mt-2">123 Business Street, City, Country</p>
          <p className=" text-white text-sm">Email: contact@yourcompany.com</p>
          <p className="text-white text-sm">Phone: +123 456 7890</p>
        </div>
        



        

        {/* Middle Section - Quick Links */}
        <div  className=" md:pl-28 md:flex md:flex-col md:justify-center"> 
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-white hover:underline">Home</a></li>
            <li><a href="#" className="text-white hover:underline">News</a></li>
            <li><a href="#" className="text-white hover:underline">India Global</a></li>
            <li><a href="#" className="text-white hover:underline">Politics</a></li>
            <li><a href="#" className="text-white hover:underline">Finance</a></li>
            <li><a href="#" className="text-white hover:underline">Automobile</a></li>
            <li><a href="#" className="text-white hover:underline">Real State</a></li>
            <li><a href="#" className="text-white hover:underline">Fashion & Lifestyle</a></li>
            <li><a href="#" className="text-white hover:underline">Sports</a></li>
          </ul>
        </div>
        
        {/* Right Section - Social Media Icons */}
        <div className=" md:flex md:flex-col md:items-center">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={30} /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={30} /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={30} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}