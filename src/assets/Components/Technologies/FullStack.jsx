
import jAVA from "../../Images/Java.png";
import Lamp from "../../Images/Lamp.png";
import LEMP from "../../Images/LEMPR.svg";
import MEAN from "../../Images/MEAN.png";
import MERN from "../../Images/MERN.png";
import MEVN from "../../Images/MEVN.png";
function FullStack() {
  return (
    <div className=" ">
      <div className=" sm:flex justify-center items-start hidden pt-4 gap-6">
        <div className=" w-40 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={jAVA} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">Java</p>
        </div>
        <div className=" w-40 flex flex-col justify-center items-center">
          <img className=" w-24 h-12" src={Lamp} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LAMP</p>
        </div>
        <div className=" w-40 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={LEMP} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LEMP</p>
        </div>
        <div className=" w-40 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={MEAN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MEAN</p>
        </div>
        <div className=" w-40 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={MERN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MERN</p>
        </div>
        <div className=" w-40 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={MEVN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MEVN</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start sm:hidden ">
        <div className=" flex gap-4">
        <div className=" w-20 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={jAVA} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">Java</p>
        </div>
        <div className=" w-20 flex flex-col justify-center items-center">
          <img className=" w-24 h-12" src={Lamp} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LAMP</p>
        </div>
        <div className=" w-20 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={LEMP} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LEMP</p>
        </div>
        </div>
        <div className=" flex gap-4 mt-6">
        <div className=" w-20 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={MEAN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MEAN</p>
        </div>
        <div className=" w-20 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={MERN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MERN</p>
        </div>
        <div className=" w-20 flex flex-col justify-center items-center">
          <img className=" w-28 h-12" src={MEVN} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MEVN</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FullStack;
