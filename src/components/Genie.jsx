import React from 'react'
import { genieBox } from '../constants'

const Genie = () => {
  return (
    <section className='w-full pt-10 pb-28'>
      <div className='w-11/12 mx-auto'>
        <h1 className='w-full text-center text-4xl font-bold'>We’re Your <span className='text-color-primary'>Retail Genie</span></h1>
        <div className='sm:grid mt-8 grid-cols-3 gap-8'>
          {genieBox.map(genie => (
          <div key={genie.picture} className='bg-[rgba(134,72,239,0.11)] pb-5 mt-20 md:mt-12 rounded-3xl border border-color-primary shadow-2xl p-4 relative'>
            <img className='h-28 -top-12 right-[35%] absolute' src={`${genie.picture}`} alt="" />
            <p className='text-xl text-color-primary mt-16 text-center font-semibold py-3'>{genie.head}</p>
            <p className='text-center leading-7 mx-auto text-gray-800 text-[17px] w-[90%]'>{genie.para}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Genie