import CardForPotentialPage from "../../assets/Components/CardForPotentialPage/CardForPotentialPage";
import webicon from "../../assets/Images/huhu.png";
function PotentialPage() {
  return (
    <div className=" flex justify-center items-center h-screen ">
    <div className=" text-white px-4 sm:px-9 lg:px-14 xl:px-16 pt-10 ">
      <div className=" flex sm:justify-center ">
        <h1 className=" font-bold text-3xl sm:text-5xl">What we Offer</h1>
      </div>
      <div className=" flex flex-col sm:flex-row gap-3 mt-10 sm:gap-6 justify-center items-center">
      <div>
        <CardForPotentialPage Heading={"WebSite Development "} putImage={webicon} Details={"Crafting Personalized Brand Experiences Across Different Devices with Mobile plus Web Development. Seamlessly Connect with Your Audience wherever they are."}/>
      </div>
      <div>
        <CardForPotentialPage Heading={"Search Engine Optimization"} putImage={webicon} Details={"Maximize Your Online Presence with Effective SEO. Increase Visibility and Attract Targeted Leads. Achieve your Online Goals Faster and More Efficiently."}/>
      </div>
      <div>
        <CardForPotentialPage Heading={"Search Engine Marketing"} putImage={webicon} Details={"We Help to Improve your Business’s Success Online. If you Want to Increase Visibility, Traffic, Sales, or All The Above, Our SEM Management Services can Help You."}/>
      </div>
      </div>
      <div className=" flex flex-col sm:flex-row gap-3 mt-3 sm:mt-10 sm:gap-6 justify-center items-center">
      <div>
        <CardForPotentialPage Heading={"Graphic Designing"} putImage={webicon} Details={"Influence Customer Behavior Through Effective Brand Recognition and Connection. Create a Memorable Brand Experience That Sets You Apart."}/>
      </div>
      <div>
        <CardForPotentialPage Heading={"Social media marketing"} putImage={webicon} Details={"Improve your Credibility and Brand Presence on Social Media by Targeting Custom-Made Marketing Strategies. Connect with Your Audience."}/>
      </div>
      <div>
        <CardForPotentialPage Heading={"Influencer and PR services"} putImage={webicon} Details={"We Harness the Power of Creators to Drive True Human Influence. Connect with Your Audience Through Authentic Storytelling."}/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default PotentialPage;
