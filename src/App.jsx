import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Solution from './components/Solution'
import { DemoButton } from './utils'
import Products from './components/Products'
import Goal from './components/Goal'
import FirstProduct from './components/FirstProduct'
import Genie from './components/Genie'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='w-full h-full relative'>
        <HeroSection />
        <Solution />

        <section className='w-full h-full relative pt-2 pb-8'>
          <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-arcsale.png" alt="bg" />

          <div className='flex w-5/6 mx-auto gap-6'>
            <div className='mt-20 w-11/12'>
              <p className='text-[40px] text-black leading-[55px] font-semibold'>We’re Developing A <span className='text-color-primary'>Unified GTM Platform </span> With An Integrated Virtual Assistant</p>
              <p className='text-lg py-6'>Our Virtual Assistant Engages Directly With <span className='text-black font-semibold'>Customers</span>, Learning Their Preferences, Behaviors, Feedback, And <span className='text-black font-semibold'>Purchasing Patterns</span>.</p>
              <p className='text-lg pb-7'>Delivering <span className='text-black font-semibold'>Actionable Insights</span> For Targeted Marketing, Dynamic Pricing, Revenue Optimization, Geo-Targeting, And Loyalty Programs, Enhancing <span className='text-black font-semibold'>Customer Engagement</span> And Business Strategy.</p>
              <DemoButton />
            </div>

            <div>
              <img src="./bubble.png" alt="" />
            </div>
          </div>

        </section>

        <Products />
        <Goal />
        <FirstProduct />
        <Genie />
        <Features />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
