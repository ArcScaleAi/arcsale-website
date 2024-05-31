import React, { useEffect, useState } from 'react'
import { DemoButton, HighlightedTitle, HighlightedWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Features = () => {
    const [homeAi, setHomeAi] = useState('')
    const [homeRetail, setHomeRetail] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/homeAi'), (snapshot) => {
            if (snapshot !== null) {
                setHomeAi(snapshot.val())
            }
        })
    }, [])

    useEffect(() => {
        onValue(ref(database, 'data/homeRetail'), (snapshot) => {
            if (snapshot !== null) {
                setHomeRetail(snapshot.val())
            }
        })
    }, [])


    return (
        <>
            <section className='w-full h-full relative py-6'>
                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div className='sm:mt-20 w-full md:w-11/12'>
                        <p className='sm:text-[40px] text-3xl text-center sm:text-start text-black leading-9 sm:leading-[55px] font-semibold'><HighlightedTitle text={homeAi.title?.split('|')[0]} /> {homeAi.title?.split('|')[1]}</p>
                        <p className='text-xl text-center sm:text-start leading-9 text-gray-700 py-6'>{homeAi.para1?.split('|')[0]} <HighlightedWord text={homeAi.para1?.split('|')[1]} /> {homeAi.para1?.split('|')[2]} <HighlightedWord text={homeAi.para1?.split('|')[2]} /> {homeAi.para1?.split('|')[4]} </p>
                        <p className='text-xl text-center sm:text-start leading-9 text-gray-700 pb-6'>{homeAi.para2?.split('|')[0]} <HighlightedWord text={homeAi.para2?.split('|')[1]} /> {homeAi.para2?.split('|')[2]}</p>
                        <DemoButton />
                    </div>

                    <div>
                        <img src={homeAi.image} alt="" />
                    </div>
                </div>
            </section>

            <section className='w-full h-full relative py-10 md:py-4'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div>
                        <img src={homeRetail.image} alt="" />
                    </div>

                    <div className='md:mt-20 w-full md:w-11/12'>
                        <p className='sm:text-[40px] text-3xl text-center sm:text-start text-black leading-9 sm:leading-[55px] font-semibold'>{homeRetail.title?.split('|')[0]} <HighlightedTitle text={homeRetail.title?.split('|')[1]} /> {homeRetail.title?.split('|')[2]} <HighlightedTitle text={homeRetail.title?.split('|')[3]} /> {homeRetail.title?.split('|')[4]} <HighlightedTitle text={homeRetail.title?.split('|')[5]} /></p>
                        <p className='text-xl text-center sm:text-start leading-9 text-gray-700 py-6'>{homeRetail.para1?.split('|')[0]} <HighlightedWord text={homeRetail.para1?.split('|')[1]} /> </p>
                        <p className='text-xl text-center sm:text-start leading-9 text-gray-700 pb-6'>{homeRetail.para2?.split('|')[0]} <HighlightedWord text={homeRetail.para2?.split('|')[1]} /> {homeRetail.para2?.split('|')[2]} <HighlightedWord text={homeRetail.para2?.split('|')[3]} /></p>

                        <DemoButton />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features