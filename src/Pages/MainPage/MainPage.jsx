
import PotentialPage from "../PotentialPage/PotentialPage";
import UpperSection from "../UpperSection/UpperSection";
// import Real_Impact from "../Real_Impact/Real_Impact";
// import ThreeCards from "../ThreeCards/ThreeCards";
// import InnovativeSolutions from "../InnovativeSolutions/InnovativeSolutions";
function MainPage() {
  return (
   <>
    <div className="" >
    <UpperSection/>
    </div>
    <div className=" bg-[#292828] " >
      <PotentialPage/>
    </div>
    {/* <div className="sm:h-screen bg-[#272727]" >
      <Real_Impact/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <ThreeCards/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <InnovativeSolutions/>
    </div> */}
</>
  );
}

export default MainPage;
