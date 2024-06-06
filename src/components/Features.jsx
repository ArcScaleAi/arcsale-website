import React, { useEffect, useState } from 'react'
import { DemoButton, ReplaceParaWord, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Features = () => {
    const [retailPageContent, setRetailPageContent] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/retailPage'), (snapshot) => {
            if (snapshot !== null) {
                setRetailPageContent(snapshot.val())
            }
        }, {
            onlyOnce: true
        })
    }, [])

    return (
        <>
            <section className='w-full h-full relative py-6'>
                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div className='sm:mt-20 w-full md:w-11/12'>
                        <p className='sm:text-[40px] text-3xl retailAssistant-title text-center sm:text-start text-black leading-9 sm:leading-[55px] font-semibold'><ReplaceTitleWord sentence={retailPageContent.retailAssistant?.title} selector={('.retailAssistant-title')}/></p>
                        <p className='text-xl text-center sm:text-start retailAssistant-para-1 leading-9 text-gray-700 py-6'><ReplaceParaWord sentence={retailPageContent.retailAssistant?.para1} selector={('.retailAssistant-para-1')}/> </p>
                        <p className='text-xl text-center sm:text-start leading-9 retailAssistant-para-2 text-gray-700 pb-6'><ReplaceParaWord sentence={retailPageContent.retailAssistant?.para2} selector={('.retailAssistant-para-2')}/></p>
                        <DemoButton />
                    </div>

                    <div>
                        <img src={retailPageContent.retailAssistant?.image} alt="" />
                    </div>
                </div>
            </section>

            <section className='w-full h-full relative py-10 md:py-4'>
                <img className='absolute top-0 left-0 h-full w-full -z-10' src={retailPageContent.retailStreamline?.bg} alt="bg" />

                <div className='flex md:flex-row flex-col w-11/12 mx-auto gap-12'>
                    <div>
                        <img src={retailPageContent.retailStreamline?.image} alt="" />
                    </div>

                    <div className='md:mt-20 w-full md:w-11/12'>
                        <p className='sm:text-[40px] text-3xl text-center retail-streamline-title sm:text-start text-black leading-9 sm:leading-[55px] font-semibold'><ReplaceTitleWord sentence={retailPageContent.retailStreamline?.title} selector={'.retail-streamline-title'}/></p>
                        <p className='text-xl text-center sm:text-start retail-streamline-para-1 leading-9 text-gray-700 py-6'><ReplaceParaWord sentence={retailPageContent.retailStreamline?.para1} selector={'.retail-streamline-para-1'}/></p>
                        <p className='text-xl text-center sm:text-start retail-streamline-para-2 leading-9 text-gray-700 pb-6'><ReplaceParaWord sentence={retailPageContent.retailStreamline?.para2} selector={'.retail-streamline-para-2'}/></p>
                        <DemoButton />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features