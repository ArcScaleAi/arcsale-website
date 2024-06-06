import React, { useEffect, useState } from 'react'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Goal = () => {
    const [homePageContent, setHomePageContent] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/homePage'), (snapshot) => {
            if (snapshot !== null) {
                setHomePageContent(snapshot.val())
            }
        }, {
            onlyOnce: true
        })
    }, [])

    console.log(homePageContent);

    return (
        <>
            <section className='w-full h-full relative py-10 md:py-2'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src={homePageContent.homePageGoal?.bg} alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 md:w-5/6 mx-auto gap-6'>
                    <div>
                        <img className='' src={homePageContent.homePageGoal?.image} alt="" />
                    </div>

                    <div className='md:mt-20 md:w-11/12'>
                        <p className='md:text-[40px] text-2xl leading-7 homePageGoal-title text-black md:text-start text-center md:leading-[55px] font-semibold'><ReplaceTitleWord sentence={homePageContent.homePageGoal?.title} selector={'.homePageGoal-title'} /></p>
                        <p className='text-lg py-3 md:text-start homePageGoal-para-1 text-center'><ReplaceParaWord sentence={homePageContent.homePageGoal?.para1} selector={'.homePageGoal-para-1'} /></p>
                        <p className='text-lg pb-2 homePageGoal-para-2 md:text-start text-center'><ReplaceParaWord sentence={homePageContent.homePageGoal?.para2} selector={'.homePageGoal-para-2'} /></p>
                        <p className='text-lg pb-7 homePageGoal-para-3 md:text-start text-center'><ReplaceParaWord sentence={homePageContent.homePageGoal?.para3} selector={'.homePageGoal-para-3'} /></p>
                        <DemoButton />
                    </div>

                </div>

            </section>

            <section className='w-full h-full relative md:pt-14 pb-20'>
                <div className='flex md:flex-row flex-col md:w-[82%] items-center mx-auto justify-between'>
                    <div className='mt-20 w-11/12 basis-4/5'>
                        <p className='md:text-[40px] homePageCollab-title text-2xl text-center md:text-start leading-7 text-black md:leading-[55px] font-semibold'><ReplaceTitleWord sentence={homePageContent.homePageCollab?.title} selector={'.homePageCollab-title'} /></p>
                        <p className='text-lg py-3 text-center homePageCollab-para1 md:text-start'><ReplaceParaWord sentence={homePageContent.homePageCollab?.para1} selector={'.homePageCollab-para1'} /> </p>
                        <p className='text-lg pb-7 text-center homePageCollab-para2 md:text-start'><ReplaceParaWord sentence={homePageContent.homePageCollab?.para2} selector={'.homePageCollab-para2'} /></p>
                        <DemoButton />
                    </div>
                    <div className=''>
                        <img className='' src={homePageContent.homePageCollab?.image} alt="" />
                    </div>

                </div>

            </section>
        </>

    )
}

export default Goal