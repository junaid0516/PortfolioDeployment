import AbotUsPng from "../../assets/Images/AbotUsPng.png";

function ThreeCards() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full h-[50%] sm:gap-2 px-4 sm:px-8 lg:px-10 xl:px-40 text-white">
        <div className="w-[100%] sm:w-[50%] grid grid-cols-1 gap-2 mt-2">
          <div className="h-full lg:relative">
          <div className="bg-pink-300 h-full p-4 text-left rounded-2xl flex flex-col justify-center px-20">
              <p className="font-bold">Mobile App</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ex, dolorem sapiente, fuga harum debitis laboriosam
                amet dicta corrupti alias omnis? Iste error quibusdam cupiditate
                minus impedit suscipit deserunt assumenda.
              </p>
            </div>
          </div>
          <div className="h-full lg:relative">
          <div className="bg-yellow-500 h-full p-4 text-left rounded-2xl flex flex-col justify-center px-20">
              <p className="font-bold">Web Solutions</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ex, dolorem sapiente, fuga harum debitis laboriosam
                amet dicta corrupti alias omnis? Iste error quibusdam cupiditate
                minus impedit suscipit deserunt assumenda.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-500 w-[100%] sm:w-[50%] flex items-center h-[97%] rounded-3xl mt-2 justify-center">
          <div className="text-center p-6 max-w-md">
            <button className="bg-blue-600 p-2 rounded-xl text-white mb-4">
              Explore Now
            </button>
            <div>
              <p className="text-xl font-bold">Unleash your Potential</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem modi eligendi sit, neque ullam nemo, quod pariatur
                natus officia facilis, quibusdam accusantium incidunt. Ducimus,
                animi assumenda. Iusto ullam ab quae?
              </p>
            </div>
            <button className="mt-4 border border-blue-600 text-white p-2 rounded-xl">
              Learn more
            </button>
            <div className="mt-4">
              <img src={AbotUsPng} alt="About Us" className="mx-auto w-full max-w-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="  flex flex-col items-center pt-8 lg:pt-16  w-[100%] ">
        <div className="flex flex-col justify-center items-center text-white w-[70%]">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Innovative <br />
              Solutions
            </h1>
          </div>
          <div className=" pt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              inventore eligendi dignissimos repellendus placeat doloribus illo
              libero eius quaerat distinctio quis est deserunt saepe, ipsum
              fugiat dicta esse voluptas amet.
            </p>
          </div>
        </div>
        <div className=" flex gap-2 mt-4">
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20">
            1
          </div>
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20 mt-2">
            2
          </div>
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20">
            3
          </div>
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20 mt-2">
            4
          </div>
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20">
            5
          </div>
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20 mt-2">
            6
          </div>
          <div className=" bg-amber-300 rounded-full flex justify-center items-center h-8 w-8 sm:h-20 sm:w-20">
            7
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeCards;
