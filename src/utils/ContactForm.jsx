import React from 'react'
import { ContactInput, DemoButton } from '.'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm