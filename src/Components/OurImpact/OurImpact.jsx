import React from 'react';

const OurImpact = () => {
    return (
      <div className='bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full'>
  <div className='max-w-7xl mx-auto text-center flex flex-col md:flex-row justify-between items-center py-12 md:py-16 px-5'>

    <div className='px-6'>
      <h6 className='text-3xl md:text-5xl font-extrabold'>50K+</h6>
      <p className='text-lg md:text-2xl font-medium'>Active Users</p>
    </div>

    {/* Divider */}
    <div className='hidden md:block h-16 w-px bg-white/30'></div>
    <div className='block md:hidden w-20 h-px bg-white/30 my-4'></div>

    <div className='px-6'>
      <h6 className='text-3xl md:text-5xl font-extrabold'>200+</h6>
      <p className='text-lg md:text-2xl font-medium'>Premium Tools</p>
    </div>

    {/* Divider */}
    <div className='hidden md:block h-16 w-px bg-white/30'></div>
    <div className='block md:hidden w-20 h-px bg-white/30 my-4'></div>

    <div className='px-6'>
      <h6 className='text-3xl md:text-5xl font-extrabold'>4.9</h6>
      <p className='text-lg md:text-2xl font-medium'>Rating</p>
    </div>

  </div>
</div>
    );
};

export default OurImpact;