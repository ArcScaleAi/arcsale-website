import React, { useEffect, useState } from 'react'
import { RiCircleFill } from '@remixicon/react'
import { DemoButton, ReplaceTitleWord } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'


const Products = () => {
    const [productContent, setProductContent] = useState('')

    const productPara = (text) => {
        return <p className='text-sm flex items-center gap-3 text-gray-800 w-[90%] mx-auto pb-2'><span className='h-4 w-4'><RiCircleFill size={7} /></span> {text}</p>
    }

    useEffect(() => {
        onValue(ref(database, 'data/products'), (snapshot) => {
            if(snapshot !== null){
                setProductContent(snapshot.val())
            }
        })
      }, [])

 
    return (
        <section className='w-full pt-28 pb-16'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-4xl w-full text-center product-head font-bold'><ReplaceTitleWord sentence={productContent?.title} selector={'.product-head'}/></h1>
                <div className='flex md:flex-row flex-col w-full gap-10'>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-32 md:left-0 left-7 h-[48%]' src='./product-1.png' alt="" />
                        <div className='w-full flex flex-col h-[410px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.firstProduct?.head}</h1>
                                {productPara(productContent.firstProduct?.para1)}
                                {productPara(productContent.firstProduct?.para2)}
                                {productPara(productContent.firstProduct?.para3)}
                                {productPara(productContent.firstProduct?.para4)}
                            </div>
                            <div className='mt-6 mx-auto'>
                                <DemoButton />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-36 md:left-0 left-4 h-[50%]' src={productContent.secondProduct?.image} alt="" />
                        <div className='w-full flex flex-col h-[410px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.secondProduct?.head}
                                </h1>
                                {productPara(productContent.secondProduct?.para1)}
                                {productPara(productContent.secondProduct?.para2)}
                                {productPara(productContent.secondProduct?.para3)}
                            </div>
                            <div className='mt-6 mx-auto'>
                                <DemoButton text='Join Waitlist' />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-32 md:left-0 left-4 h-[47%]' src={productContent.thirdProduct?.image} alt="" />
                        <div className='w-full flex flex-col h-[410px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.thirdProduct?.head}</h1>
                                {productPara(productContent.thirdProduct?.para1)}
                                {productPara(productContent.thirdProduct?.para2)}
                                {productPara(productContent.thirdProduct?.para3)}
                            </div>
                            <div className='mt-6 mx-auto text-center'>
                                <DemoButton text='Join Waitlist' />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-36 left-0 h-[54%]' src={productContent.fourthProduct?.image} alt="" />
                        <div className='w-full flex flex-col h-[410px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.fourthProduct?.head}
                                </h1>
                                {productPara(productContent.fourthProduct?.para1)}
                                {productPara(productContent.fourthProduct?.para2)}
                                {productPara(productContent.fourthProduct?.para3)}
                                {productPara(productContent.fourthProduct?.para4)}
                            </div>
                            <div className='mt-6 mx-auto text-center'>
                                <DemoButton text='Join Waitlist' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products