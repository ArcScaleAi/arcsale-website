import React from 'react'
import { ContactBox, ContactInput, DemoButton, HighlightedTitle } from '../utils'

const ContactUs = () => {
  return (
    <section className='w-full'>
      <div className='w-full relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-4.jpeg" alt="bg" />

        <div className='pt-36 pb-10'>
          <h1 className='w-full text-center text-5xl font-bold'><HighlightedTitle text={'Contact'} /> Us</h1>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-evenly md:px-10'>
        <div className='bg-[rgba(134,72,239,0.11)] md:w-1/3 w-[92%] mx-auto pb-8 pt-8 md:p-8 p-3 mt-6 rounded-3xl border border-color-primary shadow-2xl'>
          <form className='w-full flex flex-col items-center gap-4'>
            <ContactInput text={'Name'} />
            <ContactInput text={'Phone'} />
            <ContactInput text={'Email'} />
            <div className='flex flex-col gap-1 px-7 w-full'>
              <label className='text-color-primary ' htmlFor="message">Message</label>
              <textarea rows={4} cols={8} className='rounded-md p-3 mb-3 focus:outline-none' name="" id="message"></textarea>
            </div>
            <DemoButton text='Submit Button' />
          </form>
        </div>

        <div className='mt-20 text-center'>
          <h1 className='text-5xl font-bold'>We’re Here To <HighlightedTitle text={' Help!'} /></h1>
          <p className='text-xl md:mx-auto mt-4 md:w-10/12'>Our team is ready to assist you seven days a week, no matter the issue.</p>
        </div>
      </div>

      <ContactBox />
    </section>
  )
}

export default ContactUs