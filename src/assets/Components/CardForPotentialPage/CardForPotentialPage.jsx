// eslint-disable-next-line react/prop-types
export default function CardForPotentialPage({Heading , Details , putImage}) {
  return (
    <div className=" flex justify-center items-center px-1 lg:px-8 py-4 text-white border rounded-xl xl:w-96 bg-slate-800 border-slate-400">
      <div className="flex items-center w-full rounded-lg gap-2">
        <div className="w-[20%] sm:w-[20%] flex justify-center">
          <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
            <img className="w-5 lg:w-8 h-5 lg:h-8" src={putImage} alt="Three Dots" />
          </div>
        </div>
        <div className="w-[80%] pt-3">
          <h1 className="font-bold text-lg ">{Heading}</h1>
          <p className="text-sm pb-4">
            {Details}
          </p>
        </div>
      </div>
    </div>
  );
}
