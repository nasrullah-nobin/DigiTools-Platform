import React from 'react';

const Carts = ({cart, setCart}) => {
    const totalPrice = cart.reduce((sum,item)=> item.price + sum,0);
    
    return (
        <div className='w-7xl mx-auto space-y-5'>
            <h2 className='text-2xl font-bold'>Your Cart</h2>
          {cart.map(c=>   <div key={c.id} className='flex justify-between items-center bg-[#F2F2F2] rounded-2xl p-5'>
                <div className='flex items-center gap-2'>
                    <div className='bg-white rounded-full p-1 text-2xl'>
                    {c.icon}
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>{c.name}</h4>
                    <p className='text-base font-medium text-gray-400'>${c.price}</p>
                </div>
                </div>
                <p className='text-base text-[#FF3980] cursor-pointer'>Remove</p>
            </div>)}


            <div className='flex justify-between items-center'>
                <span>Total</span>
                <span className='text-2xl font-bold'>${totalPrice}</span>
            </div>


            <button className='btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;