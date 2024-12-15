"use client"
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="relative bg-[#1A1334] text-white min-h-screen  flex items-center">
      {/* Left Content */}
      <div className="max-w-xl p-8 ml-5 z-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          The furniture brand for the 
    future, with timeless designs
        </h1>
        <button className="bg-[#3A315E] text-white py-3 px-6 rounded-lg hover:bg-[#4b3e7d] transition duration-300">
          View collection
        </button>
        <p className="mt-44 text-lg text-gray-400">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2  flex items-center justify-center">
        <Image
          src="/chair1.png"
          alt="Chair"
          width={600}
          height={300}
          className="object-contain ml-20 h-[650px]"
        />
      </div>
<div>

    
</div>
    </section>

  );
};

export default HeroSection;
