import React from 'react'
import { ContactBox, FollowUs, HighlightedTitle } from '../utils'

const AboutUs = () => {
  return (
    <>
      <section className='w-full'>
        <div className='w-full relative'>
          <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-4.jpeg" alt="bg" />

          <div className='pt-36 pb-10'>
            <h1 className='w-full text-center text-5xl font-bold'><HighlightedTitle text={'About'} /> Us</h1>
          </div>
        </div>

        <div className='w-full my-8'>
          <div className='w-11/12 mx-auto gap-28 flex justify-between'>
            <div className='basis-1/2 mt-6'>
              <p className='text-lg leading-[30px]'>
                After a trip to a bookstore, we discovered how stores still very much rely on store staff to provide a good customer experience but in reality, without knowing the taste and preferences of a particular customer it’s a difficult task to achieve. Moreover, most stores don’t have a proper feedback or customer analytics system in place to improve their offerings.</p>
              <p className='text-lg leading-[30px] mt-4'> So, we made a platform that has A to Z all the features a store can offer to provide a personalized in-store experience to their shoppers with a human-like touch. Stores get deep insights into their customers and supercharge their business potential by driving sales.</p>
            </div>

            <img className='basis-1/2 w-40' src="./aboutPage-pic.png" alt="" />
          </div>
        </div>

        <ContactBox />

      </section>

    </>
  )
}

export default AboutUs