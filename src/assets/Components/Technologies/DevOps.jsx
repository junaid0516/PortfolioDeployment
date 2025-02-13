import Amazon from "../../Images/AWS.png";
import Azure from "../../Images/Azure.png";
import docker from "../../Images/docker.png";
import GCP from "../../Images/GCP.png";

function DevOps() {
  return (
    <div className=" overflow-hidden ">
      <div className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-none lg:flex justify-center items-start gap-7 lg:gap-20 xl:gap-6 lg:pr-20 pt-4">
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={Amazon} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">AWS</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={Azure} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">AZURE</p>
        </div>
        <div className="w-24 SM:w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-20 h-12" src={docker} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">DOCKER</p>
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-24 flex flex-col justify-between items-center">
          <img className=" w-14 h-12" src={GCP} alt="" />
          <p className=" text-2xl font-semibold text-white mt-1">GCP</p>
        </div>

      </div>
    </div>
  );
}

export default DevOps