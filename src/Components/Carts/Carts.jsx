import React from "react";
import { BsCartX } from "react-icons/bs";
import { toast } from "react-toastify";

const Carts = ({ cart, setCart}) => {
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  const handlePayment = () => {
    cart.length > 0 && toast.success("Payment successful!");
    setCart([]);
  };
  const removeItem =(item)=> {
    const filterItem = cart.filter(i => i.id !== item.id);
    toast.warn('Item removed from cart.')
    setCart(filterItem)
  }
  return (
    <div className="w-7xl mx-auto space-y-3 bg-white rounded-2xl p-5 shadow mt-10">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center space-y-5">
          <div className="flex justify-center text-5xl">
            <BsCartX />
          </div>
          <p className="text-2xl ">Your cart is empty. Add some products!</p>
        </div>
      ) : (
        <div className="space-y-5">
          {cart.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center bg-[#F2F2F2] rounded-2xl p-5"
            >
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1 text-2xl">
                  {c.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{c.name}</h4>
                  <p className="text-base font-medium text-gray-400">
                    ${c.price}
                  </p>
                </div>
              </div>
              <p onClick={()=> removeItem(c)} className="text-base text-[#FF3980] cursor-pointer">Remove</p>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <span>Total</span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </div>

          <button
            onClick={handlePayment}
            className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
