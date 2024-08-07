import React, { useEffect, useState } from 'react'
import Genie from '../components/Genie'
import FirstProduct from '../components/FirstProduct'
import { DemoButton, GetADemo, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'
import Features from '../components/Features'
import ScrollUp from '../utils/ScrollUp'

const Retail = () => {
  const [geniePageAi, setGeniePageAi] = useState('')

  useEffect(() => {
    onValue(ref(database, 'data/retailPage/geniePageAi'), (snapshot) => {
      if (snapshot !== null) {
        setGeniePageAi(snapshot.val())
      }
    }, {
      onlyOnce: true
  })
  }, [])


  return (
    <>
    <ScrollUp />
    <FirstProduct />
    <Genie />
    <section className='w-full h-full relative py-4 mb-10'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src={geniePageAi?.bg} alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div>
                        <img src={geniePageAi?.image} alt="" />
                    </div>

                    <div className='md:mt-20 pb-6 w-full md:w-11/12 flex flex-col gap-6'>
                        <p className='md:text-[40px] geniePageAi-title text-3xl text-center md:text-start text-black leading-9 md:leading-[55px] font-semibold'><ReplaceTitleWord sentence={geniePageAi?.head} selector={'.geniePageAi-title'}/></p>
                        <p className='text-xl text-center geniePageAi-para md:text-start leading-8 text-gray-800 pb-6 mt-3'><ReplaceParaWord sentence={geniePageAi?.para} selector={'.geniePageAi-para'}/></p>

                        <DemoButton />
                    </div>

                </div>
            </section>
            <Features />
            <GetADemo sentence={'Ready to [Onboard] your First [Virtual] Assistant?'} selector = {'demo-para-1'}/>

    </>
  )
}

export default Retail