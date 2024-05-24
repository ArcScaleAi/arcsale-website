import React from 'react'
import { DemoButton } from '../utils'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className='w-full h-full relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-arcsale.png" alt="bg" />

        <header className='w-full md:py-20 py-8'>
          <div className='w-11/12 mx-auto flex md:flex-row flex-col justify-between gap-10'>
            <div className='mt-20 basis-3/5'>
              <p className='md:text-[42px] text-3xl text-center md:text-start leading-8 font-bold md:leading-[52px]'><span className='text-color-primary text-center md:text-start'>Virtual Assistant</span> For Superior In-Person Customer Experiences And World-Class Software</p>
              <p className='py-10 text-xl leading-8 text-center md:text-start'>Our Virtual Assistants Collaborate With Your Human Workforce On Our Versatile, All-In-One Platform, Delivering A <span className='text-black font-bold'>Premier Customer Experience</span> Starting With Retail Stores.</p>
              <DemoButton />
            </div>

            <div className='basis-3/5'>
              <img src="./girl.png" alt="" />
            </div>
          </div>
        </header>
      </section>
  )
}

export default HeroSection