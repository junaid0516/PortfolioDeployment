
import jAVA from "../../Images/Java.png";
import Lamp from "../../Images/Lamp.png";
import LEMP from "../../Images/LEMPR.svg";
import MEAN from "../../Images/MEAN.png";
import MERN from "../../Images/MERN.png";
import MEVN from "../../Images/MEVN.png";
function FullStack() {
  return (
    <div className=" overflow-hidden ">
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-none lg:flex justify-center items-start gap-7 lg:gap-20 xl:gap-6 lg:pr-20 pt-4">
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-12" src={jAVA} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">Java</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-24 h-12" src={Lamp} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LAMP</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-12" src={LEMP} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LEMP</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-12" src={MEAN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MEAN</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-12" src={MERN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MERN</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-12" src={MEVN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MEVN</p>
        </div>
      </div>
    </div>
  );
}

export default FullStack;
