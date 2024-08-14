import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Dream</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Feature 1</h2>
          <p className="text-gray-700">This is a description of the first feature of our product.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Feature 2</h2>
          <p className="text-gray-700">This is a description of the second feature of our product.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Feature 3</h2>
          <p className="text-gray-700">This is a description of the third feature of our product.</p>
        </div>
      </div>
    </div>
  );
}

