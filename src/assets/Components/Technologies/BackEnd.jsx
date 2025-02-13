
import django from "../../Images/django.png";
import nodejs from "../../Images/nodejs.png";
import Python from "../../Images/Python.png";
import mongodb from "../../Images/mongodb.png";
import Laravel from "../../Images/Laravel.png";
import jAVA from "../../Images/Java.png";
import php from "../../Images/Dotnet.png";
function BackEnd() {
  return (
    <div className=" overflow-hidden  ">
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-none lg:flex justify-center items-start sm:gap-7 lg:gap-20 xl:gap-6 lg:pr-20 pt-4">
        <div className=" w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-11 mt-3" src={django} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">DJANGO</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-11 mt-3" src={nodejs} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">NODE JS</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-16 h-11 mt-3" src={Python} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">PYTHON</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-40 " src={jAVA} alt="" />
          <p className=" text-2xl font-semibold text-white">JAVA</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-24 h-14" src={php} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">.Net</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-14" src={Laravel} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">LARAVEL</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-14" src={mongodb} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">MONGODB</p>
        </div>
      </div>

    </div>
  );
}
export default BackEnd;