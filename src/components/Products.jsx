import React from 'react'
import { RiArrowRightLine } from '@remixicon/react'
import { DemoButton } from '../utils'

const productPara = (text) => {
    return <p className='text-sm flex items-center gap-3 text-gray-800 w-[90%] mx-auto pb-2'><RiArrowRightLine size={40} /> {text}</p>
}

const Products = () => {
    return (
        <section className='w-full pt-28 pb-16'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-4xl w-full text-center font-bold'>Our <span className='text-color-primary'>Products</span></h1>
                <div className='flex w-full  gap-10'>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-32 left-0 h-[50%]' src="./product-1.png" alt="" />
                        <div className='w-full mt-24'>
                            <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>A Shopping Ally</h1>
                            {productPara("AI-based recommendations, discounts, and real-time inventory updates.")}
                            {productPara("AI nudges for effective upselling and cross-selling, increasing average purchase value.")}
                            {productPara("Streamlines in-store navigation and accelerates transactions with automated checkout processes.")}
                            {productPara("Connects online, app, and in-store experiences with voice and chat assistance.")}
                            <div className='mt-6 text-center'>
                              <DemoButton />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-32 left-0 h-[50%]' src="./product-2.png" alt="" />
                        <div className='w-full h-[430px] relative mt-24'>
                            <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>A Banking Superhero
                            </h1>
                            {productPara("Enhance in-person banking by handling routine inquiries and transactions, freeing up staff for complex needs.")}
                            {productPara("AI-driven advice on banking products and investments tailored to customer profiles.")}
                            {productPara("Manage queues and schedule services, ensuring seamless customer experience in banking environments.")}
                            <div className='mt-6 absolute bottom-0 left-14 text-center'>
                              <DemoButton />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-32 left-0 h-[50%]' src="./product-3.png" alt="" />
                        <div className='w-full h-[430px] relative mt-24'>
                            <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>A Hospitality Concierge</h1>
                            {productPara("Check-ins, 24/7 customer support, personalized experiences, and efficient room service through automation.")}
                            {productPara("Tailor guest interactions with recommendations for dining, activities, and local attractions.")}
                            {productPara("Reservation management, maintenance requests, and energy usage with smart integrations.")}
                            <div className='mt-6 absolute bottom-0 left-14 text-center'>
                              <DemoButton />
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-[rgba(134,72,239,0.11)] mt-32 p-6 rounded-xl border border-color-primary basis-1/4'>
                        <img className='absolute -top-32 left-0 h-[50%]' src="./product-4.png" alt="" />
                        <div className='w-full mt-24'>
                            <h1 className='text-center pb-4 font-semibold text-xl text-color-primary'>A Dining Companion
                            </h1>
                            {productPara("Table reservations, and order processing, minimizing wait times and staff workload in restaurants.")}
                            {productPara("Recommend dishes, manage dietary preferences, and upsell.")}
                            {productPara("Real-time interaction, loyalty programs, and special offers. ")}
                            {productPara("Maximize QSR and drive-thru sales with fast voice recognition and data-driven upselling.")}
                            <div className='mt-6 text-center'>
                              <DemoButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products