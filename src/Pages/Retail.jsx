import React from 'react'
import Genie from '../components/Genie'
import FirstProduct from '../components/FirstProduct'
import { DemoButton, HighlightedWord } from '../utils'

const Retail = () => {
  return (
    <>
    <FirstProduct />
    <Genie />
    <section className='w-full h-full relative py-4 mb-10'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div>
                        <img src="./13.png" alt="" />
                    </div>

                    <div className='md:mt-20 pb-6 w-full md:w-11/12'>
                        <p className='md:text-[40px] text-3xl text-center md:text-start text-black leading-9 md:leading-[55px] font-semibold'><span className='text-color-primary'>AI-Driven Insights</span> For Strategic Retail Optimization</p>
                        <p className='text-xl text-center md:text-start leading-8 text-gray-800 py-6 mt-3'>Our AI unlocks <HighlightedWord text={'deep insights'} /> into shopper behavior, personal preferences, purchasing patterns, and feedback, delivering <HighlightedWord text={'actionable intelligence'} /> on marketing, trends, pricing, business strategies, inventory management, and revenue optimization.</p>

                        <DemoButton />
                    </div>

                </div>
            </section>
    </>
  )
}

export default Retail