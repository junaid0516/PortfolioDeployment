import { useState } from "react";
import burgermenu from "../../assets/Images/burgermenu.svg";
import bgvideo from "../../assets/videos/bgVideo.mp4";

function UpperSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="px-4 sm:px-20 lg:px-20 xl:px-32 2xl:px-40 relative z-10">
        <div className="flex w-full text-white">
          <div className="flex items-center flex-col">
            <h1 className="text-6xl font-bold">Empower Your Vision</h1>
            <div className="pt-8">
              <p className="text-sm sm:text-sm">
                Discover tailored software for mobile, web, and marketing with
                Hello World Software Agency. Seamlessly connect with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed top-5 left-0 w-full flex justify-center items-start z-20 font-[roboto]">
        <div className="bg-[#272727] w-full max-w-6xl h-12 rounded-3xl shadow-lg flex items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-bold text-md lg:text-xl">NyxLogics</h1>
          <ul className="hidden sm:flex gap-10 ml-auto text-white">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
          </ul>

          <button className="hidden sm:block ml-4 bg-blue-600 text-white px-4 py-1 rounded-3xl hover:bg-blue-700 transition">
            Contact Us
          </button>
          <button
            className="sm:hidden ml-auto text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img className="w-4 h-4" src={burgermenu} alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[5.5rem] right-4 w-[50%] bg-slate-400 text-white rounded-xl flex flex-col items-center space-y-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}

export default UpperSection;
