import ThreeDotsDisable from "../../Images/ThreeDotsDisable.svg";
// eslint-disable-next-line react/prop-types
function CardForImpactPage({bg = "bg-pink-400"}) {
  return (
    <div>
        <div className={`flex items-center ${bg} rounded-2xl gap-2 px-2 max-w-96`}>
            <div className="w-[15%] lg:w-[10%] flex justify-center ">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <img className="w-5 lg:w-10 h-5 lg:h-10" src={ThreeDotsDisable} alt="Three Dots" />
                    </div>
                  </div>
                  <div className="w-[80%]">
          <p className="text-sm py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga, voluptatem quibusdam quas nemo nihil, 
          </p>
        </div>
        </div>
    </div>
  )
}

export default CardForImpactPage