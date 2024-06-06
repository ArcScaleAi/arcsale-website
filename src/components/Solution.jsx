import React, { useEffect, useState } from 'react'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Solution = () => {
  const [homePageContent, setHomePageContent] = useState('')

  useEffect(() => {
    onValue(ref(database, 'data/homePage'), (snapshot) => {
      if(snapshot !== null){
        setHomePageContent(snapshot.val())
      }
    }, {
      onlyOnce: true
  })
  }, [])

  const solutionBox = (image, text1, text2, selectClass) => {
    return <div className='mt-5 basis-1/3 flex flex-col gap-4'>
    <img src={image} alt="" />
    <p className='text-[28px] font-bold text-center sm:text-start text-color-primary leading-9'>{text1}</p>
    <p className={`text-[22px] leading-7 ${selectClass} text-center sm:text-start md:w-[86%] text-medium`}>{text2}</p>
  </div>
  }

  return (
    <>
      <section className='w-full pt-20 pb-24'>
        <div className='w-11/12 mx-auto'>
          <h1 className='w-full sm:text-[40px] sm:leading-[48px] text-2xl solution-title font-semibold text-center'><ReplaceTitleWord sentence={homePageContent.solution?.title} selector={'.solution-title'}/></h1>

          <div className='w-full flex md:flex-row flex-col md:gap-14'>
            {solutionBox(homePageContent.solution?.image1, homePageContent.solution?.solHead1, <ReplaceParaWord sentence={homePageContent.solution?.solPara1} selector={'.solution-para-1'}/>, 'solution-para-1')}
            {solutionBox(homePageContent.solution?.image2, homePageContent.solution?.solHead2, <ReplaceParaWord sentence={homePageContent.solution?.solPara2} selector={'.solution-para-2'}/>, 'solution-para-2')}
            {solutionBox(homePageContent.solution?.image3,  homePageContent.solution?.solHead3, <ReplaceParaWord sentence={homePageContent.solution?.solPara3} selector={'.solution-para-3'}/>, 'solution-para-3')}
          </div>
        </div>
      </section>

      <section className='w-full h-full relative pt-2 pb-8'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src={homePageContent.GMTPlatform?.bg} alt="bg" />

        <div className='flex md:flex-row flex-col w-11/12 sm:w-5/6 mx-auto gap-6'>
          <div className='mt-20 sm:w-11/12'>
            <p className='sm:text-[40px] text-3xl GMT-title text-black leading-8 text-center md:text-start sm:leading-[55px] font-semibold'><ReplaceTitleWord sentence={homePageContent.GMTPlatform?.title} selector={'.GMT-title'}/></p>
            <p className='text-lg text-center md:text-start GMT-para-1 py-6'><ReplaceParaWord sentence={homePageContent.GMTPlatform?.para1} selector={'.GMT-para-1'}/></p>
            <p className='text-lg pb-7 text-center GMT-para-2 md:text-start'><ReplaceParaWord sentence={homePageContent.GMTPlatform?.para2} selector={'.GMT-para-2'}/></p>
            <DemoButton />
          </div>

          <div>
            <img src={homePageContent.GMTPlatform?.image} alt="" />
          </div>
        </div>

      </section>
    </>


  )
}

export default Solution