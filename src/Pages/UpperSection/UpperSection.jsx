import  { useState, useEffect } from "react";
import burgermenu from "../../assets/Images/burgermenu.svg";
import mainlogo from "../../assets/Images/mainlogo.png";
import bgvideo from "../../assets/videos/bgVideo.mp4";
import { motion, AnimatePresence } from "framer-motion";



function UpperSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textOptions = ["Custom Web Application", " Custom Mobile Application", "Graphic Designing" ,"DevOps" , "Social Media Marketing" , ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing
  const deleteSpeed = 100; // Speed of deleting
  const delayBeforeDelete = 2000; // Wait time before deleting

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting) {
      // Typing Effect
      if (currentText.length < textOptions[index].length) {
        typingTimeout = setTimeout(() => {
          setCurrentText(textOptions[index].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Wait for 2 seconds after typing complete, then start deleting
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      }
    } else {
      // Deleting Effect
      if (currentText.length > 0) {
        typingTimeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % textOptions.length); // Move to next text
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, index, textOptions]);


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

      
      <div className="px-4 sm:px-20 lg:px-20 xl:px-32 2xl:px-40 relative ">
      <div className="flex w-full text-white">
        <div className="flex items-center flex-col">
          {/* Main Heading */}
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Empower Your Vision
          </motion.h1>

          {/* Typing Animation (No Dimming) */}
          <div className="flex text-6xl my-4">            
            <span className="text-6xl text-green-400 font-bold">&nbsp;{currentText}</span>
          </div>

          {/* Paragraph */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-sm sm:text-sm">
            Empowering your digital journey with cutting-edge solutions tailored to your needs.  From stunning designs <br></br>to seamless software, we turn your vision into reality. Let’s build the future together!
            </p>
          </motion.div>
        </div>
      </div>
    </div>

      {/* Navbar */}
      <div className="fixed top-5 left-0 w-full flex justify-center items-start  font-[roboto]">
        <div className="bg-[#54696369]  w-full max-w-6xl h-12 rounded-3xl shadow-lg flex items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-center items-center ">
            <img src={mainlogo} height={25} width={30} className="mr-1"/>
          <h1 className="text-white font-bold text-md lg:text-xl">NyxLogics</h1>
          </div>
          <ul className="hidden sm:flex gap-10 ml-auto text-white">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About Us</li>
            <li className="hover:text-green-400 cursor-pointer">Services</li>
          </ul>

          <button className="hidden sm:block ml-8 bg-green-500 text-white px-4 py-1 rounded-3xl hover:bg-blue-700 transition">
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
