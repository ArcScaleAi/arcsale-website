import React from 'react'
import { ContactInput, DemoButton, HighlightedTitle } from '../utils'

const Contact = () => {
    return (
        <section className='py-10 w-full items-center'>
            <h1 className='w-full text-center text-4xl font-bold py-6'>Start Building Your <HighlightedTitle text={"AI-Powered"} /> Future</h1>
            <div className='bg-[rgba(134,72,239,0.11)] w-1/3 mx-auto pb-8 p-8 mt-6 rounded-3xl border border-color-primary shadow-2xl'>
                <form className='w-full flex flex-col items-center gap-4'>
                    <ContactInput text={'Name'}  />
                    <ContactInput text={'Phone'}  />
                    <ContactInput text={'Email'}  />
                    <div className='flex flex-col gap-1 px-7 w-full'>
                        <label className='text-color-primary ' htmlFor="message">Message</label>
                        <textarea rows={4} cols={8} className='rounded-md p-3 mb-3 focus:outline-none' name="" id="message"></textarea>
                    </div>
                    <DemoButton />
                </form>
            </div>
        </section>
    )
}

export default Contact