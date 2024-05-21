import React from 'react'

const Solution = () => {
  return (
    <section className='w-full pt-20 pb-24'>
    <div className='w-11/12 mx-auto'>
      <h1 className='w-full text-[40px] font-semibold text-center'><span className='text-color-primary'>Virtual Assistant</span> Offers 3-Way Comprehensive Solution</h1>

      <div className='w-full flex gap-14'>
        <div className='mt-5 basis-1/3 flex flex-col gap-4'>
          <img src="./solution-1.png" alt="" />
          <p className='text-[28px] font-bold text-color-primary leading-9'>Self-Service Customer Empowerment</p>
          <p className='text-[22px] leading-7 w-[86%] text-medium'>Empower customers with real-time, <span className='font-semibold text-black'>personalized</span> services through our feature-rich Virtual Assistant.</p>
        </div>
        <div className='mt-5 basis-1/3 flex flex-col gap-4'>
          <img src="./solution-2.png" alt="" />
          <p className='text-[28px] font-bold text-color-primary leading-9'>Employee Co-Pilot Assistance</p>
          <p className='text-[22px] leading-7 w-[86%] text-medium'>Our platform automates repetitive tasks and serves as a co-pilot, enhancing <span className='font-semibold text-black'>customer experiences</span> to accelerate sales.</p>
        </div>
        <div className='mt-5 basis-1/3 flex flex-col gap-4'>
          <img src="./solution-3.png" alt="" />
          <p className='text-[28px] font-bold text-color-primary leading-9'>End-To-End Automation For Businesses</p>
          <p className='text-[22px] leading-7 w-[86%] text-medium'>Our platform offers consolidated backend automation, unlocking <span className='font-semibold text-black'>crucial insights</span> often overlooked with fragmented SAAS solutions.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Solution