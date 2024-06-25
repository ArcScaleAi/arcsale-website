import React from 'react'
import Products from '../components/Products'
import { DemoButton, ReplaceTitleWord } from '../utils'
import { NavLink } from 'react-router-dom'

const ProductPage = ({ openModal, setOpenModal }) => {
  
  return (
    <>
      <Products openModal={openModal} setOpenModal={setOpenModal} />
      <div className='text-center flex flex-col items-center gap-10 md:my-12 bg-[rgba(134,72,239,0.11)] border border-color-primary py-10 w-11/12 mx-auto px-4 rounded-xl'>
        <h1 className={`md:text-5xl text-3xl demo-para--two font-bold`}>
        <span className='text-color-primary'>Enhance</span> your Customer Experience with <span className='text-color-primary'>Arcsale AI</span> Today
        </h1>
        <div className='w-fit md:mx-0 mx-auto'>
          <NavLink to='/contact' className='px-10 hover:bg-[#762cf4] py-4 text-white tracking-wide text-2xl w-fit font-medium rounded-full bg-color-primary'>Demo</NavLink>
        </div>
      </div>
    </>
  )
}

export default ProductPage
{/* <ReplaceTitleWord sentence={'[Enhance] your customer experience with [Arcsale] AI [Today]'} selector={`.demo-para--two`} /> */}