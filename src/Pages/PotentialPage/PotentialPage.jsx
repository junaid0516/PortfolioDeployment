import CardForPotentialPage from "../../assets/Components/CardForPotentialPage/CardForPotentialPage";
import NotificationIcon from "../../assets/Images/NotificationIcon.svg";
function PotentialPage() {
  return (
    <div className=" flex justify-center items-center h-screen overflow-x-hidden">
    <div className=" text-white px-4 sm:px-9 lg:px-14 xl:px-16 pt-10 ">
      <div className=" flex sm:justify-center ">
        <h1 className=" font-bold text-3xl sm:text-5xl">Unleash Your Potential</h1>
      </div>
      <div className=" flex flex-col sm:flex-row lg:pb-4 justify-around xl:justify-center w-full gap-2 mt-10 sm:gap-4 xl:gap-12 sm:px-7">
      <div>
        <CardForPotentialPage Heading={"Web Development"} putImage={NotificationIcon} Details={"Building modern, responsive, and dynamic web applications. Skilled in API integration."}/>
      </div>
      <div className="">
        <CardForPotentialPage Heading={"Mobile"} Details={"Building modern, responsive, and dynamic mobile applications. Skilled in API integration, performance optimization, and state management."}/>
      </div>
      <div className="sm:hidden xl:block">
        <CardForPotentialPage Heading={"DevOps"} Details={"Building modern, scalable, and automated infrastructure. Skilled in CI/CD, performance optimization, and system monitoring"}/>
      </div>
      </div>
      <div className="hidden xl:hidden sm:flex flex-col sm:flex-row justify-around xl:justify-center w-full gap-2 mt-2 sm:gap-4 xl:gap-14 sm:px-7">
      <div className="">
        <CardForPotentialPage Heading={"DevOps"} Details={"Building modern, scalable, and automated infrastructure. Skilled in CI/CD, performance optimization, and system monitoring. Passionate about streamlining development workflows and ensuring seamless deployments. Experienced in security best practices and cloud management."}/>
      </div>
      <div className="">
        <CardForPotentialPage Heading={"Social Media Marketing"} Details={"Creating engaging, data-driven marketing strategies to grow online presence. Skilled in content creation, audience targeting, and performance analysis. Passionate about building brand identity and increasing engagement. Experienced in trend analysis and campaign optimization."}/>
      </div>

      </div>
      <div className="  flex flex-col sm:flex-row justify-around xl:justify-center w-full gap-2 mt-2 sm:gap-4 xl:gap-14 sm:px-7">
      <div className="sm:hidden xl:block">
        <CardForPotentialPage Heading={"Social Media Marketing"} Details={"Creating engaging, data-driven marketing strategies to grow online presence ."}/>
      </div>
      <div>
        <CardForPotentialPage Heading={"Innovations"} Details={"Driving creative solutions and cutting-edge ideas to enhance efficiency and impact."}/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default PotentialPage;
