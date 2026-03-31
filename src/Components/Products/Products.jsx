import React, { use, useState } from "react";

import Carts from "../Carts/Carts";
import ProductsCart from "./ProductsCart";

const Products = ({ aiToolsPromise,cart, setCart}) => {
  const aiTools = use(aiToolsPromise);
  const [active, setActive] = useState("product");

  return (
    <section className="mt-28">
      <div className="text-center space-y-3.5">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-base font-normal text-gray-400">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center gap-2 mt-4 shadow rounded-full w-fit mx-auto p-1">
        <button
          onClick={() => setActive("product")}
          className={`btn rounded-full border-none ${active === "product" ? "bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent"} w-fit `}
        >
          Products
        </button>
        <button
          onClick={() => setActive("cart")}
          className={`btn rounded-full border-none ${active === "cart" ? "bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent"}`}
        >
          Cart (<span>{cart.length}</span>)
        </button>
      </div>

      {active === "product" && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 mt-11">
          {aiTools.map((product) => (
            <ProductsCart
              cart={cart}
              setCart={setCart}
              key={product.id}
              product={product}
            ></ProductsCart>
          ))}
        </div>
      )}

      {active === "cart" && <Carts cart={cart} setCart={setCart}></Carts>}
    </section>
  );
};

export default Products;
