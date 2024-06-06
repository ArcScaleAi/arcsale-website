import React, { useEffect, useState } from 'react'
import { ContactBox, HighlightedTitle, ReplaceTitleWord } from '../utils'
import ContactForm from '../utils/ContactForm'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const ContactUs = () => {
  const [contactPageContent, setContactPageContent] = useState('')
  
  useEffect(() => {
    onValue(ref(database, 'data/contactPage'), (snapshot) => {
      if (snapshot !== null) {
        setContactPageContent(snapshot.val())
      }
    }, {
        onlyOnce: true
    })
  }, [])

  return (
    <section className='w-full'>
      <div className='w-full relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src={contactPageContent?.bg} alt="" />

        <div className='pt-36 pb-10'>
          <h1 className='w-full text-center contact-title text-5xl font-bold'><ReplaceTitleWord sentence={contactPageContent?.title} selector={'.contact-title'}/></h1>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-evenly md:px-10'>
        <ContactForm />

        <div className='mt-20 text-center'>
          <h1 className='text-5xl contact-subtitle font-bold'><ReplaceTitleWord sentence={contactPageContent?.subtitle} selector={'.contact-subtitle'}/></h1>
          <p className='text-xl md:mx-auto mt-4 md:w-10/12'>{contactPageContent?.para}</p>
        </div>
      </div>

      <ContactBox bg = {contactPageContent?.bg}/>
    </section>
  )
}

export default ContactUs