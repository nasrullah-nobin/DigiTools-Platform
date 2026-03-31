import React from "react";
import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-5 mb-16 mt-28">
      <div className="flex-1 space-y-5 text-center md:text-left">
        <div className="badge bg-[#E1E7FF] rounded-full p-2 inline-flex items-center gap-2">
          <span className="w-3 h-3 bg-[#4F39F6] rounded-full shadow-[#4F39F6]"></span>
          <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm md:text-base">
            New: AI-Powered Tools Available
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
          Supercharge Your <br />
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Digital Workflow
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full sm:w-fit">
            Explore Products
          </button>
          <button className="btn rounded-full w-full sm:w-fit bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#4F39F6] flex items-center justify-center gap-2">
            <CiPlay1 className="text-xl text-[#4F39F6]" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-125 md:max-w-150 lg:max-w-175 p-2">
        <img
          className="w-full h-auto object-contain"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
