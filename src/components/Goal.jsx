import React from 'react'
import { DemoButton, HighlightedWord } from '../utils'

const Goal = () => {
    return (
        <>
        <section className='w-full h-full relative py-10 md:py-2'>
            <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

            <div className='flex md:flex-row flex-col w-11/12 md:w-5/6 mx-auto gap-6'>
                <div>
                    <img className='' src="./goal.png" alt="" />
                </div>

                <div className='md:mt-20 md:w-11/12'>
                    <p className='md:text-[40px] text-2xl leading-7 text-black md:text-start text-center md:leading-[55px] font-semibold'><span className='text-color-primary'>Our Goal:</span> Boost Sales And Customer Experience With A Lean Workforce</p>
                    <p className='text-lg py-3 md:text-start  text-center'>Deliver The Ultimate <HighlightedWord text={"Personalized Customer Experience,"} /> Fully Equipped With Essential Features. </p>
                    <p className='text-lg pb-2 md:text-start text-center'>Optimize <HighlightedWord text={'Upselling'} /> And <HighlightedWord text={'Cross-Selling'} /> Strategies To Enhance Revenue Opportunities.</p>
                    <p className='text-lg pb-7 md:text-start text-center'>Achieve <HighlightedWord text={"Optimal Staffing"} /> With A Consistently Lean Team Size, Avoiding Overstaffing Or Understaffing Challenges.</p>
                    <DemoButton />
                </div>

            </div>

        </section>

        <section className='w-full h-full relative md:pt-14 pb-20'>
            <div className='flex md:flex-row flex-col md:w-[82%] items-center mx-auto justify-between'>
                <div className='mt-20 w-11/12 basis-4/5'>
                    <p className='md:text-[40px] text-2xl text-center md:text-start leading-7 text-black md:leading-[55px] font-semibold'>Virtual Assistant <span className='text-color-primary'>Works Alongside </span> Your Human Employee In <span className='text-color-primary'>Collaboration</span></p>
                    <p className='text-lg py-3 text-center md:text-start'>Our Platform <HighlightedWord text={'Automates'} /> Routine Tasks, Freeing Up Staff To Focus On Key Responsibilities While Acting As A <HighlightedWord text={"Co-Pilot"} /> In Customer Service. </p>
                    <p className='text-lg pb-7 text-center md:text-start'>It Provides Real-Time <HighlightedWord text={"Personalized Customer Insights."} /></p>
                    <DemoButton />
                </div>
                <div className=''>
                    <img className='' src="./goal-2.png" alt="" />
                </div>

            </div>

        </section>
        </>

    )
}

export default Goal