
import PotentialPage from "../PotentialPage/PotentialPage";
import UpperSection from "../UpperSection/UpperSection";
import Technologies from "../Technologies/Technologies";
import SatisfiedClient from "../SatisfiedClient/SatisfiedClient";
import ContactUs from "../ContactUs/ContactUs";
// import Footer from "../Footer/Footer";
// import Real_Impact from "../Real_Impact/Real_Impact";
// import ThreeCards from "../ThreeCards/ThreeCards";
// import InnovativeSolutions from "../InnovativeSolutions/InnovativeSolutions";
function MainPage() {
  return (
   <div className=" overflow-x-hidden  overflow-hidden ">
    <div className="" >
    <UpperSection/>
    </div>
    <div className=" bg-[#292828] " >
      <PotentialPage/>
    </div>
    <div className="sm:h-screen bg-[#292828]" >
      <Technologies/>
    </div>
    <div className="sm:h-screen bg-[#292828]" >
      <SatisfiedClient/>
    </div>
    <div className="sm:h-screen bg-[#292828]" >
      <ContactUs/>
    </div>
    {/* <div className="sm:h-screen bg-[#292828]" >
      <Footer/>
    </div>
    <div className="sm:h-screen bg-[#292828] pt-20" >
      <Real_Impact/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <ThreeCards/>
    </div>
    <div className="sm:h-screen bg-[#272727] " >
      <InnovativeSolutions/>
    </div> */}
</div>
  );
}

export default MainPage;
