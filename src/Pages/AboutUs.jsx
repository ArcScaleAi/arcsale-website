import React, { useEffect, useState } from 'react'
import { ContactBox, DemoButton, GetADemo, HighlightedTitle, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  const [aboutPageContent, setAboutPageContent] = useState('')

  useEffect(() => {
    onValue(ref(database, 'data/aboutUsPage'), (snapshot) => {
      if (snapshot !== null) {
        setAboutPageContent(snapshot.val())
      }
    }, {
        onlyOnce: true
    })
  }, [])

  return (
    <>
      <section className='w-full'>
        <div className='w-full relative'>
          <img className='absolute top-0 left-0 h-full w-full -z-10' src={aboutPageContent?.bg} alt="" />

          <div className='pt-36 md:pb-10'>
            <h1 className='w-full text-center aboutus-title text-5xl font-bold'>{<ReplaceTitleWord sentence={aboutPageContent?.title} selector={'.aboutus-title'}/>}</h1>
          </div>
        </div>

        <div className='w-full my-8'>
          <div className='md:w-11/12 w-10/12 text-center mx-auto md:gap-28 gap-8 flex md:flex-row flex-col justify-between'>
            <div className='basis-1/2 mt-6'>
              <p className='text-lg leading-[30px]'>{aboutPageContent?.para1}</p>
              <p className='text-lg leading-[30px] mt-4'>{aboutPageContent?.para2}</p>
            </div>

            <img className='basis-1/2 md:w-40' src={aboutPageContent?.image} alt="" />
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs