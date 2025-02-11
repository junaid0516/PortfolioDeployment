export default function CardForPotentialPage({ Heading, Details, putImage }) {
  return (
    <div className="font-[roboto] sm:p-3 p-1 rounded-2xl h-[18rem] sm:h-[20rem] lg:h-[18rem] border border-[#54696369]  hover:shadow-sm  hover:shadow-green-300 transition-all duration-700  to-lime-300 hover:scale-105 ">
      <div className="flex flex-col p-2 h-[16rem] sm:h-[18rem] lg:h-[16rem] lg:px-4 xl:py-3 bg-[#54696369] text-white border rounded-xl xl:w-96 border-[#54696369] transition-all duration-500">
        <div>
          <img
            className="w-10 h-10  transition-transform duration-500 hover:scale-110"
            src={putImage}
            alt="Web Icon"
          />
        </div>
        <div>
          <h1 className="font-bold py-2 2xl:py-5 text-xl transition-colors duration-500">
            {Heading}
          </h1>
          <p className="font-thin sm:text-[0.9rem] lg:text-[1rem] xl:text-lg text-lg transition-opacity duration-500">
            {Details}
          </p>
        </div>
      </div>
    </div>
  );
}
