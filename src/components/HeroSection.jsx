import React from 'react'
import { DemoButton } from '../utils'

const HeroSection = () => {
  return (
    <section className='w-full h-full relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-arcsale.png" alt="bg" />

        <nav className='w-full py-4'>
          <div className='w-11/12 mx-auto flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
              <img className='h-10' src="./arcsale-logo.png" alt="logo" />
              <h1 className='text-2xl font-bold'>Arcsale AI</h1>
            </div>

            <div className='text-color-primary font-medium flex gap-9 text-xl'>
              <a href="">Home</a>
              <a href="">Retail</a>
              <a href="">Products</a>
              <a href="">About Us</a>
              <a href="">Contact</a>
              <a href="">FAQ's</a>
            </div>

            <DemoButton />

          </div>
        </nav>

        <header className='w-full py-8'>
          <div className='w-11/12 mx-auto flex justify-between gap-10'>
            <div className='mt-20 basis-3/5'>
              <p className='text-[42px] font-bold leading-[52px]'><span className='text-color-primary'>Virtual Assistant</span> For Superior In-Person Customer Experiences And World-Class Software</p>
              <p className='py-10 text-xl'>Our Virtual Assistants Collaborate With Your Human Workforce On Our Versatile, All-In-One Platform, Delivering A <span className='text-black font-bold'>Premier Customer Experience</span> Starting With Retail Stores.</p>
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