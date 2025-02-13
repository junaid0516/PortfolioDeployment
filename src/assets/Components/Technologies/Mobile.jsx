import ios from "../../Images/ios.SVG";
import Android from "../../Images/Android.png";
import flutter from "../../Images/flutter.png";
import Kotlin from "../../Images/Kotlin.png";
import swift from "../../Images/swift.png";
import react from "../../Images/react.png";
function Mobile() {
    // test deployment 
  return (
    <div className=" overflow-hidden ">
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-none lg:flex justify-center items-start gap-7 lg:gap-20 xl:gap-6 lg:pr-20 pt-4">
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={ios} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">IOS</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={Android} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">ANDROID</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={flutter} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">FLUTTER</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={Kotlin} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">KOTLIN</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={swift} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">SWIFT</p>
        </div>
        <div className="w-20 h-20 sm:w-48 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={react} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">REACT NATIVE</p>
        </div>
      </div>
    </div>
  );
}

export default Mobile;