import React, { useState } from 'react'
import { HighlightedTitle } from '../utils'
import { faqBox } from '../constants'

const FAQ = () => {
  const [displayFaq, setDisplayFaq] = useState(false)
  const [showFaq, setShowFaq] = useState(1)

  const handleShowFaq = (id) => {
    setDisplayFaq((prev) => !prev)
    setShowFaq(id)
    id === showFaq ? setDisplayFaq(false) : setDisplayFaq(true)    
  }

  return (
    <section className='w-full'>
      <div className='w-full relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-4.jpeg" alt="bg" />

        <div className='pt-36 pb-10'>
          <h1 className='w-full text-center text-5xl font-bold'><HighlightedTitle text={'FAQ'} />'s</h1>
        </div>
      </div>

      <div className='w-full py-10 font-[Rubik]'>
        <div className='w-11/12 mx-auto'>
          <div className='flex flex-wrap justify-center h-fit items-start gap-x-6'>
            {faqBox.map(faq => (
              <>
              <div className='h-fit w-full sm:basis-[48%]' key={faq.id}>
                <div onClick={() => handleShowFaq(faq.id)} className='pt-5 pb-4 pr-7 pl-5 mt-2 cursor-pointer bg-faq-primary flex justify-between'>
                  <p className={`${showFaq === faq.id && displayFaq ? 'text-[#3182CE]' : 'text-[#1A202C]'} text-xl font-medium`}>{faq.question}</p>
                  <span className='text-4xl font-medium'>{showFaq === faq.id && displayFaq ? '-' : '+'}</span>
                </div>
                <div className={`mt-1 p-6 bg-faq-primary ${showFaq === faq.id && displayFaq ? 'animate block' : 'animate-out'}`}>
                  <p className='text-[18px] para-animate leading-7 text-gray-800'>{faq.ansPara1}</p>
                  <p className='mt-3 text-[18px] leading-7 para-animate text-gray-800'>{faq.ansPara2}</p>
                </div>
              </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

export default FAQ