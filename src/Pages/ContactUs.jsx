import React from 'react'
import { ContactBox, HighlightedTitle } from '../utils'
import ContactForm from '../utils/ContactForm'

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
        <ContactForm />

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