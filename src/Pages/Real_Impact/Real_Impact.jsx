import CardForImpactPage from "../../assets/Components/CardForImpactPage/CardForImpactPage";
import OrangeBall from "../../assets/Images/OrangeBall.svg"
import YellowBall from "../../assets/Images/YellowBall.svg"
function Real_Impact() {
  return (
    <div className=" flex justify-center items-center h-screen">
    <div className=" flex flex-col text-white">
      <div className=" font-bold flex flex-col gap-2 sm:gap-5 items-center  text-3xl sm:text-5xl">
        <div className=" flex gap-5">
          <div className=" flex items-center justify-center">
            <p>Mobile</p>
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
      <div className=" flex flex-col sm:flex-row items-center sm:mt-20 px-4 sm:px-10 gap-3 sm:gap-12">
        <div className=" sm:w-[50%] mt-2 lg:ml-20 xl:ml-40 ">
          <h1 className=" font-bold text-4xl">Real Impact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in
            culpa itaque sequi ipsum placeat possimus, ipsam, architecto magnam
            debitis ullam earum neque ad corrupti. Atque tempora sed rem iste?
          </p>
          <button className=" bg-blue-600 rounded-md px-2 py-2">
            Get Started
          </button>
        </div>
        <div className="sm:w-[50%] gap-2 flex flex-col">
            <div className=" mr-2.5">
                <CardForImpactPage/>
            </div>
            <div className=" ml-2.5">
                <CardForImpactPage bg="bg-blue-400"/>
            </div>
            <div className=" mr-2.5 sm:mt-2.5">
                <CardForImpactPage bg="bg-yellow-400"/>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Real_Impact;
