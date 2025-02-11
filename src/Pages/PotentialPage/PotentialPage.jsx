import { useEffect, useState } from "react";
import CardForPotentialPage from "../../assets/Components/CardForPotentialPage/CardForPotentialPage";
import webicon from "../../assets/Images/huhu.png";
import { motion } from "framer-motion";

function PotentialPage() {
  const [count, setCount] = useState(0);
  const [counttwo, setCounttwo] = useState(0);
  const [countthree, setCountthree] = useState(0);
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += 1;
      setCount(counter);
      if (counter >= 10) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += 1;
      setCounttwo(counter);
      if (counter >= 8) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += 0.1;
      setCountthree(parseFloat(counter.toFixed(1)));
      if (counter >= 4.7) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);


  // for animation of cards
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    }),
  };

  const hoverEffect = {
    scale: 1.05,
    y: -5,
    boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
  };


  return (
    <div className=" flex flex-col items-center h-full pb-10 sm:pb-14 lg:pb-24 px-2">
      <div className=" bg-[#54696369] w-full px-4 grid grid-cols-3 gap-7 text-white py-8">
        <div className=" flex flex-col justify-center items-center border-r">
          <p className="font-bold text-2xl 2xl:text-5xl">
            {" "}
            {count.toLocaleString()}+
          </p>
          <p className="animate-pulse">Project Done</p>
        </div>
        <div className=" flex flex-col justify-center items-center  border-r">
          <p className=" font-bold text-2xl 2xl:text-5xl">
            {counttwo.toLocaleString()}
          </p>
          <p className="animate-pulse">Happy Client</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" font-bold text-2xl 2xl:text-5xl">
            {countthree.toLocaleString()}
          </p>
          <p className="animate-pulse">Client Ratings</p>
        </div>
      </div>



      {/* What we Offer Section */}
      <div className="text-white">
    {/* Section Title */}
    <div className="flex sm:justify-center">
      <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl mt-10">
        What we Offer
      </h1>
    </div>

    {/* First Row of Cards */}
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mt-6 2xl:mt-10 sm:gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {[
        {
          Heading: "Web Development",
          putImage: webicon,
          Details:
            "Crafting responsive, user-friendly websites that drive engagement and deliver seamless experiences across all devices.",
        },
        {
          Heading: "Mobile Applications ",
          putImage: webicon,
          Details:
            "Building innovative, high-performance mobile apps for iOS and Android that transform ideas into impactful digital solutions.",
        },
        {
          Heading: "Search Engine Optimization (SEO)",
          putImage: webicon,
          Details:
            "We Help to Improve your Business’s Success Online. If you Want to Increase Visibility, Traffic, Sales, or All The Above, Our SEO Services can Help You.",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeInLeft}
          whileHover={hoverEffect} // Apply hover effect
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <CardForPotentialPage
            Heading={card.Heading}
            putImage={card.putImage}
            Details={card.Details}
          />
        </motion.div>
      ))}
    </motion.div>

    {/* Second Row of Cards */}
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-10 sm:gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {[
        {
          Heading: "Graphic Designing",
          putImage: webicon,
          Details:
            "Creating visually stunning designs that captivate audiences and elevate your brand’s identity.",
        },
        {
          Heading: "DevOps",
          putImage: webicon,
          Details:
            "Streamlining development and operations with cutting-edge DevOps solutions for faster, reliable, and scalable software delivery.",
        },
        {
          Heading: "Social Media Marketing",
          putImage: webicon,
          Details:
            "Driving brand growth with tailored social media strategies that engage, inspire, and convert.",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeInLeft}
          whileHover={hoverEffect} // Apply hover effect
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <CardForPotentialPage
            Heading={card.Heading}
            putImage={card.putImage}
            Details={card.Details}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
    </div>
  );
}

export default PotentialPage;
