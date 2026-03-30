import React from "react";
import userImg from "../../assets/user.png";
import choseProduct from '../../assets/package.png';
import startCreating from '../../assets/rocket.png'

const GetStarts = () => {
  return (
    <section className="bg-[#F9FAFC] my-28 py-28">
      <div className="text-center w-7xl mx-auto space-y-3">
        <h1 className="text-5xl font-extrabold">Get Started in 3 Steps</h1>
        <p className="text-base text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="flex justify-center items-center gap-6 mt-10">
          <div className="relative shadow rounded-2xl px-6 py-16 space-y-3 bg-white">
            <div className="bg-[#F3E9FE] rounded-full p-5 w-20 mx-auto">
              <img src={userImg} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-base text-gray-400">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
            <div className="absolute top-5 right-5 w-10 h-10 bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full flex justify-center items-center">
                <p className="font-bold">01</p>
            </div>
            
          </div>
          <div className="relative shadow rounded-2xl px-6 py-16 space-y-3 bg-white">
            <div className="bg-[#F3E9FE] rounded-full p-5 w-20 mx-auto">
              <img src={choseProduct} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Choose Products</h3>
            <p className="text-base text-gray-400">
              Browse our catalog and select the tools that fit your needs.
            </p>
            <div className="absolute top-5 right-5 w-10 h-10 bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full flex justify-center items-center">
                <p className="font-bold">02</p>
            </div>
            
          </div>
          <div className="relative shadow rounded-2xl px-6 py-16 space-y-3 bg-white">
            <div className="bg-[#F3E9FE] rounded-full p-5 w-20 mx-auto">
              <img src={startCreating} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Start Creating</h3>
            <p className="text-base text-gray-400">
              Download and start using your premium tools immediately.
            </p>
            <div className="absolute top-5 right-5 w-10 h-10 bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full flex justify-center items-center">
                <p className="font-bold">03</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarts;
