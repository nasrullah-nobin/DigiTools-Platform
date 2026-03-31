import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ProductsCart = ({ product }) => {
  const [selected, setSelected] = useState(false);
  const handleAddToCart = () => {
    setSelected(true);
  };
  return (
    <div className="shadow-sm rounded-2xl p-6 space-y-3" key={product.id}>
      <div className="flex justify-between">
        <div className="shadow-sm rounded-full p-2">
          <p className="text-3xl">{product.icon}</p>
        </div>

        <div
          className={`badge ${
            product.tag === "popular"
              ? "bg-[#FEF3C6] text-[#BB4D00]"
              : product.tag === "best seller"
                ? "bg-[#E1E7FF] text-[#4F39F6]"
                : product.tag === "new"
                  ? "bg-[#DBFCE7] text-[#0A883E]"
                  : null
          }`}
        >
          {product.tag}
        </div>
      </div>
      <h3 className="text-2xl font-bold">{product.name}</h3>
      <p className="text-base text-gray-400">{product.description}</p>
      <p className="text-2xl font-bold">
        ${product.price}{" "}
        <small className="text-base text-gray-400">/{product.period}</small>
      </p>
      {product.features.map((f,ind) => (
        <p key={ind} className="flex items-center gap-3">
          <FaCheck className="text-[#30B868]" /> {f}
        </p>
      ))}
      <button
        onClick={handleAddToCart}
        className={`btn rounded-full  text-white w-full ${selected ? "bg-green-500" : "bg-linear-to-l from-[#4F39F6] to-[#9514FA]"}`}
      >
        {selected ? "Added To cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductsCart;
