import { motion } from "framer-motion";
import { useState } from "react";
import FullStack from "../../assets/Components/Technologies/FullStack";
import FrontEnd from "../../assets/Components/Technologies/FrontEnd";
import BackEnd from "../../assets/Components/Technologies/BackEnd";
import Mobile from "../../assets/Components/Technologies/Mobile";
import BlockChain from "../../assets/Components/Technologies/BlockChain";
import Devops_ML from "../../assets/Components/Technologies/Devops&ML";

function Technologies() {
  const [activeSection, setActiveSection] = useState("full_stack"); // State for active section

  return (
    <div className="flex justify-center h-full">
      <div className="px-4 pt-4 sm:pt-0 sm:px-20 lg:px-20 xl:px-32 2xl:px-40 flex sm:pl-24 flex-col w-full">
        {/* Heading Section */}
        <div className="text-white flex flex-col items-center">
          <motion.h1
            className="text-3xl xl:text-5xl font-bold font-[roboto]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Technologies
          </motion.h1>

          <motion.p
            className="text-xl text-center pt-2 sm:pt-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Our comprehensive range of expertise empowers businesses to seize new <br />
            opportunities and achieve remarkable results.
          </motion.p>
        </div>

        {/* Buttons Section */}
        <div className=" sm:hidden">
          <div className=" flex flex-col justify-center items-center mt-4">
          <button className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl bg-green-400 mb-4 text-white font-semibold `} >
            Full Stack
          </button>
          {<FullStack />}
          </div>
        </div>
        <div className="hidden sm:block">
        <div className="bg-[#54696369] h-8 lg:h-10 mt-10 rounded-2xl w-full flex justify-evenly">
          <button 
            className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl ${activeSection === "full_stack" ? "bg-green-400 mt-[-0.25rem]" : " mt-[-0.25rem]"}`}
            onClick={() => setActiveSection("full_stack")}
          >
            Full Stack
          </button>
          <button
          className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl ${activeSection === "front_end" ? "bg-green-400 mt-[-0.25rem]" : "mt-[-0.25rem]"}`}
          onClick={() => setActiveSection("front_end")}>Front End</button>
          <button
          className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl ${activeSection === "back_end" ? "bg-green-400 mt-[-0.25rem]" : "mt-[-0.25rem]"}`}
          onClick={() => setActiveSection("back_end")}>Back End</button>
          <button
          className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl ${activeSection === "mobile" ? "bg-green-400 mt-[-0.25rem]" : "mt-[-0.25rem]"}`}
          onClick={() => setActiveSection("mobile")}>Mobile</button>
          <button
          className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl ${activeSection === "blockchain" ? "bg-green-400 mt-[-0.25rem]" : "mt-[-0.25rem]"}`}
          onClick={() => setActiveSection("blockchain")}>Blockchain</button>
          <button
          className={`px-4 cursor-pointer lg:px-10 h-10 lg:h-12 rounded-3xl ${activeSection === "devops_ml" ? "bg-green-400 mt-[-0.25rem]" : "mt-[-0.25rem]"}`}
          onClick={() => setActiveSection("devops_ml")}>DevOps</button>
        </div>

        <div className="mt-6">
          {activeSection === "full_stack" && <FullStack />}
          {activeSection === "front_end" && <FrontEnd />}
          {activeSection === "back_end" && <BackEnd />}
          {activeSection === "mobile" && <Mobile />}
          {activeSection === "blockchain" && <BlockChain />}
          {activeSection === "devops_ml" && <Devops_ML />}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
