import React from 'react'
import { DemoButton } from '../utils'

const Navbar = ({isTopOfPage}) => {
  const navBg = isTopOfPage ? '' : 'bg-white'

  return (
    <nav className={`${navBg} w-full py-4 fixed z-[1000]`}>
    <div className='w-11/12 mx-auto flex items-center justify-between'>
      <div className='flex gap-4 items-center'>
        <img className='h-10' src="./arcsale-logo.png" alt="logo" />
        <h1 className='text-2xl font-bold'>Arcsale AI</h1>
      </div>

      <div className='text-color-primary font-medium flex gap-9 text-xl'>
        <a href="/">Home</a>
        <a href="/retail">Retail</a>
        <a href="/products">Products</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="">FAQ's</a>
      </div>

      <DemoButton />

    </div>
  </nav>
  )
}

export default Navbar