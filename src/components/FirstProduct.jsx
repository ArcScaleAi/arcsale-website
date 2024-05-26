import React from 'react'
import { DemoButton, HighlightedWord } from '../utils'

const FirstProduct = () => {
    return (
        <section className='w-full h-full relative pt-28 pb-8'>
            <h1 className='w-full text-center font-bold text-4xl pb-6'>Our First Product: <span className='text-color-primary'>A Shopping Ally</span></h1>
            <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-2.jpeg" alt="bg" />

            <div className='flex md:flex-row flex-col items-center md:w-5/6 w-11/12 mx-auto gap-6'>
                <div className='w-11/12'>
                    <p className='text-[26px] text-center md:text-start text-gray-800 leading-10 pb-16 md:w-11/12'>Our Shopping Assistant is the ultimate <HighlightedWord text={'sales associate'} />, managing the <HighlightedWord text={'entire retail sales cycle'} /> and seamlessly integrating with your human workforce.</p>
                    <DemoButton />
                </div>

                <div>
                    <img src="./first-product.png" alt="" />
                </div>
            </div>

        </section>
    )
}

export default FirstProduct