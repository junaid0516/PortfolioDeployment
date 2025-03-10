
import HTML5 from "../../Images/HTML5.png";
import CSS from "../../Images/CSS.png";
import js from "../../Images/JS.svg";
import vue from "../../Images/vue.png";
import angular from "../../Images/angular.png";
import react from "../../Images/react.png";
function FrontEnd() {
  return (
    <div className=" ">
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-none lg:flex justify-center items-start sm:gap-7 lg:gap-20 xl:gap-6 lg:pr-20 pt-4">
        <div className=" w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-11 mt-3" src={HTML5} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">HtML5</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-11 mt-3" src={CSS} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">CSS</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-16 h-11 mt-3" src={js} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">JavaScript</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-28 h-40 " src={angular} alt="" />
          <p className=" text-2xl font-semibold text-white">Angular JS</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-24 h-14" src={vue} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">Vue JS</p>
        </div>
        <div className="w-40 h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-14" src={react} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">React</p>
        </div>
      </div>

    </div>
  );
}
export default FrontEnd;