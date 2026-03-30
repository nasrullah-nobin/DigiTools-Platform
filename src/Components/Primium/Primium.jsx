import React from 'react';

const Primium = () => {
    return (
        <section className='mt-28'>
            <div className='text-center space-y-3.5'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
            <p className='text-base font-normal text-gray-400'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            </div>

            <div className='flex justify-center gap-2 mt-4'>
                <button className='btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-fit '>Products</button>
                <button className='btn rounded-full '>Cart (<span>0</span>)</button>
            </div>
        </section>
    );
};

export default Primium;