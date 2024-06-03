import React, { useEffect, useState } from 'react'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState('')

  useEffect(() => {
    onValue(ref(database, 'data/homePage/main'), (snapshot) => {
      if(snapshot !== null){
        setHeroContent(snapshot.val())
      }
    })
  }, [])


  return (
    <section className='w-full h-full relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-arcsale.png" alt="bg" />

        <header className='w-full md:py-20 py-8'>
          <div className='w-11/12 mx-auto flex md:flex-row flex-col justify-between gap-10'>
            <div className='mt-20 basis-3/5'>
              <p className='md:text-[42px] text-3xl hero-title text-center md:text-start leading-8 font-bold md:leading-[52px]'><ReplaceTitleWord sentence={heroContent?.title} selector={'.hero-title'} /></p>
              <p className ='py-10 text-xl leading-8 hero-para text-center md:text-start'><ReplaceParaWord sentence={heroContent?.para} selector={'.hero-para'} /></p>
              <DemoButton />
            </div>

            <div className='basis-3/5'>
              <img src={heroContent.image} alt="" />
            </div>
          </div>
        </header>
      </section>
  )
}

export default HeroSection