import React from 'react'
import { DemoButton } from '../utils'

const Solution = () => {
  return (
    <>
      <section className='w-full pt-20 pb-24'>
        <div className='w-11/12 mx-auto'>
          <h1 className='w-full sm:text-[40px] sm:leading-[48px] text-2xl font-semibold text-center'><span className='text-color-primary'>Virtual Assistant</span> Offers 3-Way Comprehensive Solution</h1>

          <div className='w-full flex md:flex-row flex-col md:gap-14'>
            <div className='mt-5 basis-1/3 flex flex-col gap-4'>
              <img src="./solution-1.png" alt="" />
              <p className='text-[28px] font-bold text-center sm:text-start text-color-primary leading-9'>Self-Service Customer Empowerment</p>
              <p className='text-[22px] leading-7 text-center sm:text-start md:w-[86%] text-medium'>Empower customers with real-time, <span className='font-semibold text-black'>personalized</span> services through our feature-rich Virtual Assistant.</p>
            </div>
            <div className='mt-5 basis-1/3 flex flex-col gap-4'>
              <img src="./solution-2.png" alt="" />
              <p className='text-[28px] font-bold text-center sm:text-start text-color-primary leading-9'>Employee Co-Pilot Assistance</p>
              <p className='text-[22px] leading-7 text-center sm:text-start md:w-[86%] text-medium'>Our platform automates repetitive tasks and serves as a co-pilot, enhancing <span className='font-semibold text-black'>customer experiences</span> to accelerate sales.</p>
            </div>
            <div className='mt-5 basis-1/3 flex flex-col gap-4'>
              <img src="./solution-3.png" alt="" />
              <p className='text-[28px] font-bold text-center sm:text-start text-color-primary leading-9'>End-To-End Automation For Businesses</p>
              <p className='text-[22px] leading-7 text-center sm:text-start md:w-[86%] text-medium'>Our platform offers consolidated backend automation, unlocking <span className='font-semibold text-black'>crucial insights</span> often overlooked with fragmented SAAS solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full h-full relative pt-2 pb-8'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-arcsale.png" alt="bg" />

        <div className='flex md:flex-row flex-col w-11/12 sm:w-5/6 mx-auto gap-6'>
          <div className='mt-20 sm:w-11/12'>
            <p className='sm:text-[40px] text-3xl text-black leading-8 text-center sm:text-start sm:leading-[55px] font-semibold'>We’re Developing A <span className='text-color-primary'>Unified GTM Platform </span> With An Integrated Virtual Assistant</p>
            <p className='text-lg text-center md:text-start py-6'>Our Virtual Assistant Engages Directly With <span className='text-black font-semibold'>Customers</span>, Learning Their Preferences, Behaviors, Feedback, And <span className='text-black font-semibold'>Purchasing Patterns</span>.</p>
            <p className='text-lg pb-7 text-center md:text-start'>Delivering <span className='text-black font-semibold'>Actionable Insights</span> For Targeted Marketing, Dynamic Pricing, Revenue Optimization, Geo-Targeting, And Loyalty Programs, Enhancing <span className='text-black font-semibold'>Customer Engagement</span> And Business Strategy.</p>
            <DemoButton />
          </div>

          <div>
            <img src="./bubble.png" alt="" />
          </div>
        </div>

      </section>
    </>


  )
}

export default Solution