import React from "react";
import { CiPlay1 } from "react-icons/ci";
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="w-7xl mx-auto flex justify-center items-center gap-16 my-16">
      <div className="space-y-5">
        <div className="badge bg-[#E1E7FF] rounded-full p-2">
          <span className="w-3 h-3 bg-[#4F39F6] rounded-full inline-block mr-2 shadow-[0_0_8px_#4F39F6]"></span>{" "}
          <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className="text-6xl font-extrabold space-y-2">Supercharge Your <br /> <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital Workflow</span></h1>
        <p className="text-lg text-gray-400">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-3">
          <button className="btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-fit">
            Explore Products
          </button>
          <button className="btn rounded-full w-fit bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#4F39F6] flex items-center gap-2">
            <CiPlay1 className="text-xl text-[#4F39F6]" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="w-125">
       <img className="w-full h-full object-contain" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
