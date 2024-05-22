import React from 'react'
import { DemoButton, HighlightedTitle, HighlightedWord } from '../utils'

const Features = () => {
    return (

        <>
            <section className='w-full h-full relative py-4'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

                <div className='flex w-11/12 mx-auto gap-12'>
                    <div>
                        <img src="./13.png" alt="" />
                    </div>

                    <div className='mt-20 w-11/12'>
                        <p className='text-[40px] text-black leading-[55px] font-semibold'><span className='text-color-primary'>AI-Driven Insights</span> For Strategic Retail Optimization</p>
                        <p className='text-xl leading-8 text-gray-800 py-6 mt-3'>Our AI unlocks <HighlightedWord text={'deep insights'} /> into shopper behavior, personal preferences, purchasing patterns, and feedback, delivering <HighlightedWord text={'actionable intelligence'} /> on marketing, trends, pricing, business strategies, inventory management, and revenue optimization.</p>

                        <DemoButton />
                    </div>

                </div>
            </section>

            <section className='w-full h-full relative py-14'>

                <div className='flex w-11/12 mx-auto gap-12'>
                    <div className='mt-20 w-11/12'>
                        <p className='text-[40px] text-black leading-[55px] font-semibold'><span className='text-color-primary'>AI Shopping Assistant</span> Optimizes Sales With Targeted Upselling</p>
                        <p className='text-xl leading-9 text-gray-700 py-6'>Boost sales with our AI shopping assistant, harnessing previous <HighlightedWord text={'customer data'} /> and <HighlightedWord text={'social media trends'} /> for tailored recommendations.</p>
                        <p className='text-xl leading-9 text-gray-700 pb-6'>AI-driven upsells and cross-sells, real-time offers and mobile self-checkout accelerate the purchasing journey, <HighlightedWord text={'increasing average values'} /> and impulsive buying.</p>
                        <DemoButton />
                    </div>

                    <div>
                        <img src="./14.png" alt="" />
                    </div>
                </div>
            </section>

            <section className='w-full h-full relative py-4'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

                <div className='flex w-11/12 mx-auto gap-12'>
                    <div>
                        <img src="./15.png" alt="" />
                    </div>

                    <div className='mt-20 w-11/12'>
                        <p className='text-[40px] text-black leading-[55px] font-semibold'>Streamline <HighlightedTitle text = {'Retail Operations'} />, Enhance Experience, <HighlightedTitle text = {'Boost'} /> Customer <HighlightedTitle text={'Returns'} /></p>
                        <p className='text-xl leading-8 text-gray-800 py-6 mt-2'>Optimize space, reduce team size, and cut hardware costs, while enhancing in-store experiences with a <HighlightedWord text={'staff co-pilot.'} /></p>
                        <p className='text-xl leading-8 text-gray-800 pb-7'>Streamline operations to boost <HighlightedWord text={'customer convenience'} /> and encourage <HighlightedWord text={'repeat visits.'} /></p>

                        <DemoButton />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features