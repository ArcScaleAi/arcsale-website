import React from 'react'
import { DemoButton, HighlightedWord } from '../utils'

const Goal = () => {
    return (
        <>
        <section className='w-full h-full relative py-2'>
            <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

            <div className='flex w-5/6 mx-auto gap-6'>
                <div>
                    <img className='' src="./goal.png" alt="" />
                </div>

                <div className='mt-20 w-11/12'>
                    <p className='text-[40px] text-black leading-[55px] font-semibold'><span className='text-color-primary'>Our Goal:</span> Boost Sales And Customer Experience With A Lean Workforce</p>
                    <p className='text-lg py-3'>Deliver The Ultimate <HighlightedWord text={"Personalized Customer Experience,"} /> Fully Equipped With Essential Features. </p>
                    <p className='text-lg pb-2'>Optimize <HighlightedWord text={'Upselling'} /> And <HighlightedWord text={'Cross-Selling'} /> Strategies To Enhance Revenue Opportunities.</p>
                    <p className='text-lg pb-7'>Achieve <HighlightedWord text={"Optimal Staffing"} /> With A Consistently Lean Team Size, Avoiding Overstaffing Or Understaffing Challenges.</p>
                    <DemoButton />
                </div>

            </div>

        </section>

        <section className='w-full h-full relative pt-14 pb-20'>
            <div className='flex w-[82%] items-center mx-auto justify-between'>
                <div className='mt-20 w-11/12 basis-4/5'>
                    <p className='text-[40px] text-black leading-[55px] font-semibold'>Virtual Assistant <span className='text-color-primary'>Works Alongside </span> Your Human Employee In <span className='text-color-primary'>Collaboration</span></p>
                    <p className='text-lg py-3'>Our Platform <HighlightedWord text={'Automates'} /> Routine Tasks, Freeing Up Staff To Focus On Key Responsibilities While Acting As A <HighlightedWord text={"Co-Pilot"} /> In Customer Service. </p>
                    <p className='text-lg pb-7'>It Provides Real-Time <HighlightedWord text={"Personalized Customer Insights."} /></p>
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