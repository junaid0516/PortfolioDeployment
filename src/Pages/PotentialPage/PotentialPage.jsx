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
     <div className="text-white">
    {/* Section Title */}
    <div className="flex sm:justify-center">
      <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl mt-10">
        What we Offer
      </h1>
    </div>

    {/* First Row of Cards */}
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mt-6 2xl:mt-10 sm:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {[
        {
          Heading: "Website Development",
          putImage: webicon,
          Details:
            "Crafting Personalized Brand Experiences Across Different Devices with Mobile plus Web Development. Seamlessly Connect with Your Audience wherever they are.",
        },
        {
          Heading: "Search Engine Optimization",
          putImage: webicon,
          Details:
            "Maximize Your Online Presence with Effective SEO. Increase Visibility and Attract Targeted Leads. Achieve your Online Goals Faster and More Efficiently.",
        },
        {
          Heading: "Search Engine Marketing",
          putImage: webicon,
          Details:
            "We Help to Improve your Business’s Success Online. If you Want to Increase Visibility, Traffic, Sales, or All The Above, Our SEM Management Services can Help You.",
        },
      ].map((card, index) => (
        <motion.div key={index} custom={index} variants={fadeInLeft}>
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
      className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-10 sm:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {[
        {
          Heading: "Graphic Designing",
          putImage: webicon,
          Details:
            "Influence Customer Behavior Through Effective Brand Recognition and Connection. Create a Memorable Brand Experience That Sets You Apart.",
        },
        {
          Heading: "Social Media Marketing",
          putImage: webicon,
          Details:
            "Improve your Credibility and Brand Presence on Social Media by Targeting Custom-Made Marketing Strategies. Connect with Your Audience.",
        },
        {
          Heading: "Influencer and PR Services",
          putImage: webicon,
          Details:
            "We Harness the Power of Creators to Drive True Human Influence. Connect with Your Audience Through Authentic Storytelling.",
        },
      ].map((card, index) => (
        <motion.div key={index} custom={index} variants={fadeInLeft}>
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
