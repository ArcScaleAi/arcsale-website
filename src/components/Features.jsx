import React, { useEffect, useState } from 'react'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Features = () => {
    const [homePageContent, setHomePageContent] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/homePage'), (snapshot) => {
            if (snapshot !== null) {
                setHomePageContent(snapshot.val())
            }
        })
    }, [])

    return (
        <>
            <section className='w-full h-full relative py-6'>
                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div className='sm:mt-20 w-full md:w-11/12'>
                        <p className='sm:text-[40px] text-3xl homeAi-title text-center sm:text-start text-black leading-9 sm:leading-[55px] font-semibold'><ReplaceTitleWord sentence={homePageContent.homeAi?.title} selector={('.homeAi-title')}/></p>
                        <p className='text-xl text-center sm:text-start homeAi-para-1 leading-9 text-gray-700 py-6'><ReplaceParaWord sentence={homePageContent.homeAi?.para1} selector={('.homeAi-para-1')}/> </p>
                        <p className='text-xl text-center sm:text-start leading-9 homeAi-para-2 text-gray-700 pb-6'><ReplaceParaWord sentence={homePageContent.homeAi?.para2} selector={('.homeAi-para-2')}/></p>
                        <DemoButton />
                    </div>

                    <div>
                        <img src={homePageContent.homeAi?.image} alt="" />
                    </div>
                </div>
            </section>

            <section className='w-full h-full relative py-10 md:py-4'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-3.png" alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div>
                        <img src={homePageContent.homeRetail?.image} alt="" />
                    </div>

                    <div className='md:mt-20 w-full md:w-11/12'>
                        <p className='sm:text-[40px] text-3xl text-center home-retail-title sm:text-start text-black leading-9 sm:leading-[55px] font-semibold'><ReplaceTitleWord sentence={homePageContent.homeRetail?.title} selector={'.home-retail-title'}/></p>
                        <p className='text-xl text-center sm:text-start home-retail-para-1 leading-9 text-gray-700 py-6'><ReplaceParaWord sentence={homePageContent.homeRetail?.para1} selector={'.home-retail-para-1'}/></p>
                        <p className='text-xl text-center sm:text-start home-retail-para-2 leading-9 text-gray-700 pb-6'><ReplaceParaWord sentence={homePageContent.homeRetail?.para2} selector={'.home-retail-para-2'}/></p>
                        <DemoButton />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features