import AboutUs from "../AboutUs/AboutUs";
import InnovativeSolutions from "../InnovativeSolutions/InnovativeSolutions";
import PotentialPage from "../PotentialPage/PotentialPage";
import Real_Impact from "../Real_Impact/Real_Impact";
import ThreeCards from "../ThreeCards/ThreeCards";
import UpperSection from "../UpperSection/UpperSection";

function MainPage() {
  return (
    <div className=" w-full h-screen bg-[#272727]">
    <div className="sm:h-screen " >
    <UpperSection/>
    </div>
    <div className="sm:h-screen bg-slate-700" >
    <AboutUs/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <PotentialPage/>
    </div>
    <div className="sm:h-screen bg-[#272727]" >
      <Real_Impact/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <ThreeCards/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <InnovativeSolutions/>
    </div>
    </div>
  );
}

export default MainPage;
