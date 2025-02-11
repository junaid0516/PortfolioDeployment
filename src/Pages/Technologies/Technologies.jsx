import { motion } from "framer-motion";

function Technologies() {
  return (
    <div className="flex justify-center h-full">
      <div className="px-4 pt-4 sm:pt-0 sm:px-20 lg:px-20 xl:px-32 2xl:px-40 flex sm:pl-24">
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
            Our comprehensive range of expertise empowers businesses to seize new
            opportunities and achieve remarkable results.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
