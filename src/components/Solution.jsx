import React, { useEffect, useState } from 'react'
import { DemoButton, HighlightedTitle, HighlightedWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Solution = () => {
  const [solutionContent, setSolutionContent] = useState('')
  const [GMTcontent, setGMTcontent] = useState('')

  useEffect(() => {
    onValue(ref(database, 'data/solution'), (snapshot) => {
      if(snapshot !== null){
        setSolutionContent(snapshot.val())
      }
    })
  }, [])

  useEffect(() => {
    onValue(ref(database, 'data/GMTPlatform'), (snapshot) => {
      if(snapshot !== null){
        setGMTcontent(snapshot.val())
      }
    })
  }, [])

  const solutionBox = (image, text1, text2, text3, text4) => {
    return <div className='mt-5 basis-1/3 flex flex-col gap-4'>
    <img src={image} alt="" />
    <p className='text-[28px] font-bold text-center sm:text-start text-color-primary leading-9'>{text1}</p>
    <p className='text-[22px] leading-7 text-center sm:text-start md:w-[86%] text-medium'>{text2} {text3} {text4}</p>
  </div>
  }

  return (
    <>
      <section className='w-full pt-20 pb-24'>
        <div className='w-11/12 mx-auto'>
          <h1 className='w-full sm:text-[40px] sm:leading-[48px] text-2xl font-semibold text-center'><HighlightedTitle text={solutionContent.title?.split("|")[0]} /> {solutionContent.title?.split("|")[1]}</h1>

          <div className='w-full flex md:flex-row flex-col md:gap-14'>
            {solutionBox(solutionContent.image1, solutionContent.solHead1, solutionContent.solPara1?.split('|')[0], <HighlightedWord text={solutionContent.solPara1?.split('|')[1]} />, solutionContent.solPara1?.split('|')[2] )}
            {solutionBox(solutionContent.image2, solutionContent.solHead2, solutionContent.solPara2?.split('|')[0], <HighlightedWord text={solutionContent.solPara2?.split('|')[1]} />, solutionContent.solPara2?.split('|')[2] )}
            {solutionBox(solutionContent.image3, solutionContent.solHead3, solutionContent.solPara3?.split('|')[0], <HighlightedWord text={solutionContent.solPara3?.split('|')[1]} />, solutionContent.solPara3?.split('|')[2] )}
          </div>
        </div>
      </section>

      <section className='w-full h-full relative pt-2 pb-8'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-arcsale.png" alt="bg" />

        <div className='flex md:flex-row flex-col w-11/12 sm:w-5/6 mx-auto gap-6'>
          <div className='mt-20 sm:w-11/12'>
            <p className='sm:text-[40px] text-3xl text-black leading-8 text-center md::text-start sm:leading-[55px] font-semibold'>{GMTcontent.title?.split('|')[0]} {<HighlightedTitle text={GMTcontent.title?.split('|')[1]} /> }
            {GMTcontent.title?.split('|')[2]}</p>
            <p className='text-lg text-center md:text-start py-6'>{GMTcontent.para1?.split('|')[0]} <HighlightedWord text={GMTcontent.para1?.split('|')[1]} /> {GMTcontent.para1?.split('|')[2]} <HighlightedWord text={GMTcontent.para1?.split('|')[3]} /> {GMTcontent.para1?.split('|')[4]}</p>
            <p className='text-lg pb-7 text-center md:text-start'>{GMTcontent.para2?.split('|')[0]} <HighlightedWord text={GMTcontent.para2?.split('|')[1]} /> {GMTcontent.para2?.split('|')[2]} <HighlightedWord text={GMTcontent.para2?.split('|')[3]} /> {GMTcontent.para2?.split('|')[4]}</p>
            <DemoButton />
          </div>

          <div>
            <img src={GMTcontent.image} alt="" />
          </div>
        </div>

      </section>
    </>


  )
}

export default Solution