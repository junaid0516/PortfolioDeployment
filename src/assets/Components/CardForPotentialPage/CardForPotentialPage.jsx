export default function CardForPotentialPage({ Heading, Details, putImage }) {
  return (
    <div className="font-[roboto] sm:p-3 p-1 rounded-2xl sm:h-[20rem] border border-[#54696369]  hover:shadow-sm  hover:shadow-green-300 transition-all duration-700  to-lime-300 hover:scale-105 ">
      <div className="flex flex-col px-2 py-2 sm:h-[18rem] lg:px-4 xl:py-4 bg-[#54696369] text-white border rounded-xl xl:w-96 border-[#54696369] transition-all duration-500">
        <div>
          <img
            className="sm:w-10 sm:h-10 w-5 h-5 transition-transform duration-500 hover:scale-110"
            src={putImage}
            alt="Web Icon"
          />
        </div>
        <div>
          <h1 className="font-bold sm:py-5 text-md sm:text-lg xl:text-xl transition-colors duration-500">
            {Heading}
          </h1>
          <p className="font-thin text-sm xl:text-lg transition-opacity duration-500">
            {Details}
          </p>
        </div>
      </div>
    </div>
  );
}
