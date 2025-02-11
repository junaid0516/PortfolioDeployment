import CardForImpactPage from "../../assets/Components/CardForImpactPage/CardForImpactPage";
import OrangeBall from "../../assets/Images/OrangeBall.svg"
import YellowBall from "../../assets/Images/YellowBall.svg"
function Real_Impact() {
  return (
    <div className=" flex h-full">
    <div className=" flex flex-col text-white">
      <div className=" font-bold flex flex-col gap-2 sm:gap-5 items-center  text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
        <div className=" flex gap-5">
          <div className=" flex items-center justify-center">
            <p className="">Mobile</p>
            <img className=" w-2 h-2 mt-2 ml-3" src={OrangeBall}/>
          </div>
          <div className=" flex items-center justify-center">
            <p>Web</p>
            <img className=" w-2 h-2 mt-2 ml-3" src={OrangeBall}/>
          </div>
        </div>
        <div className=" flex gap-5">
        <div className=" flex items-center justify-center">
            <p>DevOps</p>
            <img className=" w-2 h-2 mt-2 ml-3" src={OrangeBall}/>
          </div>
          <div className=" flex items-center justify-center">
            <p className=" text-blue-400">Social</p>
            <img className=" w-2 h-2 mt-2 ml-3" src={YellowBall}/>
          </div>
        </div>
        <div className=" flex gap-5">
        <div className=" flex items-center justify-center">
            <p>Agile</p>
            <img className=" w-2 h-2 mt-2 ml-3" src={OrangeBall}/>
          </div>
          <div className=" flex items-center justify-center">
            <p>Cloud</p>
            <img className=" w-2 h-2 mt-2 ml-3" src={OrangeBall}/>
          </div>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row items-center justify-center sm:mt-20 px-4 sm:px-4 lg:px-8 xl:px-28 2xl:px-40 gap-3 sm:gap-12">
        <div className=" sm:w-[50%] xl:w-[40%] mt-2 lg:ml-1 xl:ml-4 2xl:ml-44 ">
          <h1 className=" font-[roboto] font-bold text-4xl py-2">Real Impact</h1>
          <p className=" font-[roboto]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in
            culpa itaque sequi ipsum placeat possimus, ipsam, architecto magnam
            debitis ullam earum neque ad corrupti. Atque tempora sed rem iste?
          </p>
          <button className=" bg-blue-600 rounded-md px-2 py-2 mt-2">
            Get Started
          </button>
        </div>
        <div className="sm:w-[50%] xl:w-[60%] xl:px-16 2xl:px-44 gap-2 flex flex-col">
            <div className=" mr-2.5">
                <CardForImpactPage/>
            </div>
            <div className=" ml-2.5">
                <CardForImpactPage bg="bg-blue-400"/>
            </div>
            <div className=" mr-2.5">
                <CardForImpactPage bg="bg-yellow-400"/>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Real_Impact;
