import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import burgermenu from "../../assets/Images/boy.webp";

const reviews = [
  {
    name: "John Doe",
    review: "I was struggling with an outdated website that wasn’t bringing in any leads. NyxLogics completely revamped it, and now it’s not only beautiful but also drives traffic and conversions. Their team was patient, communicative, and delivered exactly what we needed. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    review: "I had an idea for an app but no clue how to bring it to life. NyxLogics guided me through the entire process, from concept to launch. The app is user-friendly, visually stunning, and works flawlessly. I’m thrilled with the results!",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    review: "Our website was invisible on Google until we hired NyxLogics. Their SEO strategies are top-notch, and within months, we started ranking on the first page. The increase in traffic and sales has been incredible. Thank you!",
    rating: 5,
  },
];

function SatisfiedClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col items-center justify-center font-[roboto] overflow-x-hidden">
      {/* Section Title */}
      <h1 className="font-[roboto] text-5xl font-bold text-center text-white mb-30">
        Don't take our word for it. Take theirs
      </h1>

      {/* Reviews Container */}
      <div className="relative flex items-center justify-center w-full lg:w-xl xl:w-3xl h-[300px]">
        {/* Previous Review - Tilted Left */}
        <motion.div
          className="absolute left-[-140px] w-52 xl:w-64 p-4 ml-10 text-white rounded-xl shadow-lg hidden sm:block
                    bg-gradient-to-r from-[#54696369] to-grey-700"
          initial={{ rotate: -20, opacity: 0.4, x: -80 }}
          animate={{ rotate: -20, opacity: 0.6, x: -80 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold">{reviews[(currentIndex - 1 + reviews.length) % reviews.length].name}</h3>
          <p className="text-sm">{reviews[(currentIndex - 1 + reviews.length) % reviews.length].review}</p>
        </motion.div>

        {/* Main Review - Centered with Collapse Effect */}
        <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-80 h-auto sm:p-3 lg:p-6 text-white rounded-2xl shadow-xl text-center flex flex-col items-center
                    bg-gradient-to-r from-green-500 to-green-700"
          initial={{ x: direction === 1 ? 100 : -100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: direction === 1 ? -100 : 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Centered Circular Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg flex justify-center items-center mb-4">
            <img src={burgermenu} alt="Client" className="w-full h-full object-cover" />
          </div>

          {/* Client Name */}
          <h3 className="text-2xl font-bold">{reviews[currentIndex].name}</h3>

          {/* Client Review */}
          <p className="text-lg mt-2">{reviews[currentIndex].review}</p>

          {/* Star Rating */}
          <div className="flex justify-center mt-3">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className={`text-yellow-400 ${i < reviews[currentIndex].rating ? "text-yellow-400" : "text-gray-400"}`} />
            ))}
          </div>
        </motion.div>

        </AnimatePresence>

        

        {/* Next Review - Tilted Right */}
        <motion.div
  className="absolute right-[-140px] w-64 mr-10 p-4 text-white rounded-xl shadow-lg hidden sm:block
             bg-gradient-to-l from-[#54696369] to-grey-700"
  initial={{ rotate: 20, opacity: 0.4, x: 80 }}
  animate={{ rotate: 20, opacity: 0.6, x: 80 }}
  transition={{ duration: 0.5 }}
>
  <h3 className="text-lg font-bold">{reviews[(currentIndex + 1) % reviews.length].name}</h3>
  <p className="text-sm">{reviews[(currentIndex + 1) % reviews.length].review}</p>
</motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 mt-20">
        <button
          className="bg-white text-green-500 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
          onClick={prevReview}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="bg-white text-green-500 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
          onClick={nextReview}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default SatisfiedClient;
