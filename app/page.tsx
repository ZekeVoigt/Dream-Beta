export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col items-center">
      {/* Image at the top */}
      <img
        src="/DreamLogo.png"
        alt="Dream Logo"
        height={150}
        width={150}
        className="mt-4 max-w-full h-auto"
      />

      {/* Centered content */}
      <div className="flex flex-col justify-center items-center mt-52">
        <h1 className="text-7xl text-black font-Inter">Dream</h1>
        <p className="text-2xl mt-4 text-gray-600 text-center">
          Creating The Next Generation Of Internet Entrepreneurs
        </p>
        <button className="bg-black text-white border rounded-3xl h-11 w-[24rem] mt-3">
          Launching Beta August 18th, 12PM Est.
        </button>
      </div>
    </div>
  );
}
