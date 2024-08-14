export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col items-center">
      {/* Image at the top */}
      <img
        src="/DreamLogo.png"
        alt="Dream Logo"
        className="mt-4 mb-8 max-w-full h-auto"
      />

      {/* Centered content */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-7xl font-semibold text-black">Dream</h1>
        <p className="text-2xl mt-4 text-black">
          Creating The Next Generation Of Internet Entrepreneurs
        </p>
      </div>
    </div>
  );
}
