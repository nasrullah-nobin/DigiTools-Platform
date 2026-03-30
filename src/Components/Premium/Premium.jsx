import React, { use } from "react";
import { FaCheck } from "react-icons/fa";

const Premium = ({aiToolsPromise}) => {
    const aiTools = use(aiToolsPromise);
  return (
    <section className="mt-28">
      <div className="text-center space-y-3.5">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-base font-normal text-gray-400">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button className="btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-fit ">
          Products
        </button>
        <button className="btn rounded-full ">
          Cart (<span>0</span>)
        </button>
      </div>

<div className="w-7xl mx-auto grid grid-cols-3 gap-7 mt-11">
    {aiTools.map(aiTool => <div className="shadow-sm rounded-2xl p-6 space-y-3" key={aiTool.id}>
       <div className="flex justify-between">
        <div className="shadow-sm rounded-full p-2">
            <p className="text-3xl">{aiTool.icon}</p>
        </div>

        <div className={`badge ${aiTool.tag === 'popular' ? 'bg-[#FEF3C6] text-[#BB4D00]': aiTool.tag === 'best seller'? 'bg-[#E1E7FF] text-[#4F39F6]': aiTool.tag=== 'new'? 'bg-[#DBFCE7] text-[#0A883E]': null
        }`}>{aiTool.tag}</div>

       </div>
       <h3 className="text-2xl font-bold">{aiTool.name}</h3>
       <p className="text-base text-gray-400">{aiTool.description}</p>
       <p className="text-2xl font-bold">${aiTool.price} <small className="text-base text-gray-400">/{aiTool.period}</small></p>
       {aiTool.features.map(f=> <p className="flex items-center gap-3"><FaCheck className="text-[#30B868]"/> {f}</p>)}
        <button className="btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full ">
          Buy Now
        </button>
    </div>)}
</div>

    </section>
  );
};

export default Premium;
