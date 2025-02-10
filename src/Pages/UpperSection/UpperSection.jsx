import { useState } from "react";
// import pnjfromtable from "../../Images/pnjfromtable.png";
import burgermenu from "../../assets/Images/burgermenu.svg";

function UpperSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className=" pt-32 sm:pt-56 px-4 sm:px-20 lg:px-20 xl:px-32 2xl:px-40 "
      >
        <div className="  flex items-center w-full text-white ">
          <div className=" ">
            <h1 className="text-3xl font-bold">
              Empower <br />
              Your <br />
              Vision
            </h1>
            <div className="mt-4">
              <p className="text-sm sm:text-sm">
                Discover tailored software for mobile, web, <br />
                and marketing with Hello World Software Agency{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 flex justify-center items-start z-10 pt-0 w-full">
        <div className=" flex justify-center items-start pt-10 w-full">
          <div className="bg-slate-400 w-[40rem] sm:w-[40rem] lg:w-[60rem] h-12 ml-0 xl:w-[70rem] rounded-lg shadow-lg flex items-center px-6">
            <h1 className="text-white font-bold text-md  lg:text-lg">
              CompanyName
            </h1>
            <ul className="hidden sm:flex gap-4 ml-auto text-white">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Services</li>
            </ul>

            <button className="hidden sm:block ml-4 cursor-pointer bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
              Contact Us
            </button>
            <button
              className="sm:hidden ml-auto text-white "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <img className=" w-4 h-4" src={burgermenu} alt="Close Menu" />
              ) : (
                <img className=" w-4 h-4" src={burgermenu} alt="Open Menu" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-28 right-0 w-[50%] bg-slate-400 text-white flex flex-col items-center space-y-4 py-4 sm:hidden">
            <ul className="flex flex-col gap-4 text-lg">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Services</li>
            </ul>

            <button className="bg-blue-600 text-white px-4 py-1 cursor-pointer rounded-md hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpperSection;
