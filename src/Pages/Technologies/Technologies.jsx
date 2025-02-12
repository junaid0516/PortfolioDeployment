import { motion } from "framer-motion";
import { useState } from "react";
import FullStack from "../../assets/Components/Technologies/FullStack";
import OrangeBall from "../../assets/Images/OrangeBall.svg";
import YellowBall from "../../assets/Images/YellowBall.svg";

function Technologies() {
  const [activeSection, setActiveSection] = useState("full_stack"); // State for active section

  return (
    <div className="flex flex-col justify-center h-full p-3  pb-10 sm:pb-0">
       <div className="pb-[2rem] sm:pb-[4rem] font-bold flex text-white flex-col gap-2 sm:gap-5 items-center  text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              <div className=" flex gap-5">
                <div className=" flex items-center justify-center">
                  <p className="">Mobile</p>
                  <img className=" w-4 h-4 mt-2 ml-3" src={OrangeBall}/>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Web</p>
                  <img className=" w-4 h-4 mt-2 ml-3" src={OrangeBall}/>
                </div>
              </div>
              <div className=" flex gap-5">
              <div className=" flex items-center justify-center">
                  <p>DevOps</p>
                  <img className=" w-4 h-4 mt-2 ml-3" src={OrangeBall}/>
                </div>
                <div className=" flex items-center justify-center">
                  <p className=" text-blue-400">Social</p>
                  <img className=" w-4 h-4 mt-2 ml-3" src={YellowBall}/>
                </div>
              </div>
              <div className=" flex gap-5">
              <div className=" flex items-center justify-center">
                  <p>Agile</p>
                  <img className=" w-4 h-4 mt-2 ml-3" src={OrangeBall}/>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Cloud</p>
                  <img className=" w-4 h-4 mt-2 ml-3" src={OrangeBall}/>
                </div>
              </div>
            </div>

      <div className="px-4 sm:pt-0 sm:px-10 lg:px-20 xl:px-32 2xl:px-40 flex sm:pl-24 flex-col w-full">
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
          {activeSection === "front_end" && <FullStack />}
          {activeSection === "back_end" && <FullStack />}
          {activeSection === "mobile" && <FullStack />}
          {activeSection === "blockchain" && <FullStack />}
          {activeSection === "devops_ml" && <FullStack />}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
