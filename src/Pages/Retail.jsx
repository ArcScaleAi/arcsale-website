import React, { useEffect, useState } from 'react'
import Genie from '../components/Genie'
import FirstProduct from '../components/FirstProduct'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Retail = () => {
  const [geniePageAi, setGeniePageAi] = useState('')

  useEffect(() => {
    onValue(ref(database, 'data/retailPage/geniePageAi'), (snapshot) => {
      if (snapshot !== null) {
        setGeniePageAi(snapshot.val())
      }
    })
  }, [])


  return (
    <>
    <FirstProduct />
    <Genie />
    <section className='w-full h-full relative py-4 mb-10'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div>
                        <img src="./13.png" alt="" />
                    </div>

                    <div className='md:mt-20 pb-6 w-full md:w-11/12'>
                        <p className='md:text-[40px] geniePageAi-title text-3xl text-center md:text-start text-black leading-9 md:leading-[55px] font-semibold'><ReplaceTitleWord sentence={geniePageAi?.head} selector={'.geniePageAi-title'}/></p>
                        <p className='text-xl text-center geniePageAi-para md:text-start leading-8 text-gray-800 py-6 mt-3'><ReplaceParaWord sentence={geniePageAi?.para} selector={'.geniePageAi-para'}/></p>

                        <DemoButton />
                    </div>

                </div>
            </section>
    </>
  )
}

export default Retail