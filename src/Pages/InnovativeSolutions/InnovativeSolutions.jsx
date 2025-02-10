import { useState } from "react";
import ImranKhan from "../../assets/Images/chairman_ptiRound.svg"
function InnovativeSolutions() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
  return (
    <div className=" text-white h-screen flex flex-col justify-between items-center pt-5 sm:pt-10 ">

        <div className=" bg-slate-500 flex flex-col sm:flex-row w-full items-center justify-center py-20 sm:py-24">
          <div className="w-[100%] sm:w-[50%] flex items-center justify-center flex-col">
            <p className="text-xl sm:text-3xl font-bold">
              Get in Touch with us
            </p>
            <div className=" flex mt-4 items-center">
              <div className=" bg-slate-500 rounded-full flex justify-center items-center h-8 w-8 sm:h-16 sm:w-16">
                <img className=" rounded-full w-20 h-16" src={ImranKhan} alt="" />
              </div>
              <div className=" rounded-full flex justify-center items-center h-8 w-8 sm:h-14 sm:w-16 ml-[-0.5rem] sm:ml-[-1rem]">
              <img className=" rounded-full w-20 h-16" src={ImranKhan} alt="" />
              </div>
              <div className=" rounded-full flex justify-center items-center h-8 w-8 sm:h-14 sm:w-16 ml-[-0.5rem] sm:ml-[-1rem]">
              <img className=" rounded-full w-20 h-16" src={ImranKhan} alt="" />
              </div>
              <div className=" rounded-full flex justify-center items-center h-8 w-8 sm:h-14 sm:w-16 ml-[-0.5rem] sm:ml-[-1rem]">
              <img className=" rounded-full w-20 h-16" src={ImranKhan} alt="" />
              </div>
              <p className="text-sm  ml-2">1.5k attendees</p>
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-center sm:w-[50%] z-30">
            <div className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] bg-black p-7 mt-4 sm:mt-0 rounded-2xl">
            <div className="flex flex-col mt-1">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 border rounded-md p-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 border rounded-md p-1"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 border rounded-md p-1"
                  placeholder="Your message"
                />
              </div>
              <button className=" bg-slate-500 rounded-md px-2 py-1 mt-4 cursor-pointer">
                Register Now
              </button>
            </div>
          </div>
        </div>
          <div className="bg-slate-500 h-40 sm:w-96 pb-2 px-4 sm:text-3xl font-semibold flex justify-center items-center rounded-t-3xl">
            <p>Connect with Hello World</p>
        </div>

    </div>
  );
}

export default InnovativeSolutions;
