import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import msgicon from "../../assets/Images/msgicon.svg"
import callicon from "../../assets/Images/callicon.svg"
import LocationIcon from "../../assets/Images/LocationIcon.svg"
function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div ref={sectionRef} className="flex flex-col h-full font-[roboto]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="flex justify-center"
      >
        <p className="text-white text-5xl font-semibold mt-3 sm:mt-0">Contact Us</p>
      </motion.div>

      <div className="rounded-lg w-full px-6 flex flex-col gap-4 sm:flex-row lg:mt-16 ">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="w-full sm:w-[50%] flex flex-col justify-center items-center"
        >
          <h2 className="text-2xl font-bold text-center text-green-400 sm:text-4xl mt-4 sm:mt-0 mb-14">
            Get in touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full lg:w-[80%] xl:w-[60%] bg-gradient-to-r from-[#54696369] to-grey-700 p-4 rounded-2xl"
          >
            {["email", "firstName", "lastName", "jobTitle", "companyName", "message"].map(
              (field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <label className="block text-sm font-medium text-white">
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                    {["email", "firstName", "lastName", "jobTitle"].includes(field) && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2 border border-white mt-2 rounded"
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required={["email", "firstName", "lastName", "jobTitle"].includes(field)}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2 border border-white text-white mt-2 rounded"
                    />
                  )}
                </motion.div>
              )
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.8}}
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-[50%] flex flex-col text-white justify-center p-4 sm:px-10 lg:px-20  bg-gradient-to-r from-[#54696369] to-grey-700 rounded-3xl sm:mt-24 mb-2"
        >
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
          <img className=" w-4 h-4" src={LocationIcon} alt="" />
            <h1 className="text-xl font-bold">Address</h1>
            </div>
            <p className="text-start">
             Johar Town , Lahore <br /> Punjab Pakistan  
            </p>
          </div>
          <div className="flex flex-col py-6 ">
          <div className="flex items-center gap-2">
          <img className=" w-4 h-4" src={callicon} alt="" />
            <h1 className="text-xl font-bold">Lets Talk</h1>
            </div>
            <p className="text-start text-green-400">
             +92 335 0294188
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2">
                <img className=" w-4 h-4" src={msgicon} alt="" />
            <h1 className="text-xl font-bold">General Support</h1>
            </div>
            <p className="text-start text-green-400">
             hr@nyxlogics.com 
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;
