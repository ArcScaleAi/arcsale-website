import React, { useEffect, useState } from 'react'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const FirstProduct = () => {
    const [retailPageHero, setRetailPageHero] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/retailPage/retailPageHero'), (snapshot) => {
            if (snapshot !== null) {
                setRetailPageHero(snapshot.val())
            }
        }, {
            onlyOnce: true
        })
    }, [])

    return (
        <section className='w-full h-full relative pt-28 pb-8'>
                <h1 className='w-full text-center first-product-title font-bold text-4xl pb-6'><ReplaceTitleWord sentence={retailPageHero?.title} selector={'.first-product-title'} /></h1>
            <img className='absolute top-0 left-0 h-full w-full -z-10' src={retailPageHero?.bg} alt="" />

            <div className='flex md:flex-row flex-col items-center md:w-5/6 w-11/12 mx-auto gap-6'>
                <div className='w-11/12'>
                    <p className='md:text-[26px] text-xl text-center first-page-para md:text-start text-gray-800 md:leading-10 leading-8 pb-16 md:w-11/12'><ReplaceParaWord sentence={retailPageHero?.para} selector={'.first-page-para'} /></p>
                    <DemoButton />
                </div>

                <div className='mt-6 md:mt-0'>
                    <img src={retailPageHero?.image} alt="" />
                </div>
            </div>

        </section>
    )
}

export default FirstProduct