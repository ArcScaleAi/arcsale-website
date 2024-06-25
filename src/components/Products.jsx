import React, { useEffect, useState } from 'react'
import { RiCircleFill } from '@remixicon/react'
import { DemoButton, ReplaceTitleWord, WaitlistButton } from '../utils'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'
import ContactForm from '../utils/ContactForm'
import { useProductContext } from '../contexts/productContext'


const Products = () => {
    const [productContent, setProductContent] = useState('')
    const {openModal, setOpenModal, contactHead, setContactHead} = useProductContext()


    const productPara = (text) => {
        return <p className='text-sm flex items-center gap-3 text-gray-800 w-[90%] mx-auto pb-2'><span className='h-4 w-4'><RiCircleFill size={7} /></span> {text}</p>
    }

    useEffect(() => {
        onValue(ref(database, 'data/products'), (snapshot) => {
            if (snapshot !== null) {
                setProductContent(snapshot.val())
            }
        },{
            onlyOnce: true
          })
    }, [])


    return (
        <section className='w-full pt-20 pb-16'>
            <div className={`h-fit top-1/2 w-full transition-all fixed z-[500] ${openModal ? '' : 'hidden'}`}>
                <ContactForm contactHead = {contactHead} openModal = {openModal} setOpenModal = {setOpenModal}/>
            </div>
            <div className='w-11/12 mx-auto'>
                 <h1 className='text-4xl w-full text-center product-head font-bold'><ReplaceTitleWord sentence={productContent?.title} selector={'.product-head'} /></h1>
                <div className='flex md:flex-row flex-col w-full gap-10'>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 h-[52%]' src='./product-1.png' alt="" />
                        <div className='w-full flex flex-col md:h-[410px] justify-between relative mt-16 md:mt-24'>
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
                        <img className='absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 h-[52%]' src={productContent.secondProduct?.image} alt="" />
                        <div className='w-full flex flex-col md:h-[420px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.secondProduct?.head}
                                </h1>
                                {productPara(productContent.secondProduct?.para1)}
                                {productPara(productContent.secondProduct?.para2)}
                                {productPara(productContent.secondProduct?.para3)}
                            </div>
                            <div className='mt-6 mx-auto'>
                                <WaitlistButton setContactHead = {setContactHead} head = {productContent?.secondProduct?.head} setOpenModal = {setOpenModal} />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 h-[51%]' src={productContent.thirdProduct?.image} alt="" />
                        <div className='w-full flex flex-col md:h-[420px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.thirdProduct?.head}</h1>
                                {productPara(productContent.thirdProduct?.para1)}
                                {productPara(productContent.thirdProduct?.para2)}
                                {productPara(productContent.thirdProduct?.para3)}
                            </div>
                            <div className='mt-6 mx-auto text-center'>
                                <WaitlistButton setContactHead = {setContactHead} head = {productContent.thirdProduct?.head}  setOpenModal = {setOpenModal} />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 h-[53%]' src={productContent.fourthProduct?.image} alt="" />
                        <div className='w-full flex flex-col md:h-[420px] justify-between relative mt-16 md:mt-24'>
                            <div>
                                <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>{productContent.fourthProduct?.head}
                                </h1>
                                {productPara(productContent.fourthProduct?.para1)}
                                {productPara(productContent.fourthProduct?.para2)}
                                {productPara(productContent.fourthProduct?.para3)}
                                {productPara(productContent.fourthProduct?.para4)}
                            </div>
                            <div className='mt-6 mx-auto text-center'>
                                <WaitlistButton setContactHead = {setContactHead} head = {productContent.fourthProduct?.head}  setOpenModal = {setOpenModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products