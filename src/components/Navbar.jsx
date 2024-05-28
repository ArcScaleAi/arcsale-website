import React, { useState } from 'react'
import { RiMenuLine, RiCloseLine } from '@remixicon/react'
import { NavLink } from 'react-router-dom'


const Navbar = ({ isTopOfPage, showNav, setShowNav }) => {
  const navBg = isTopOfPage ? '' : 'bg-white'
  const navLinkClass = 'text-xl font-medium text-color-primary border-b border-white/10 py-5'

  return (
    <nav className={`${navBg} w-full py-4 fixed z-[100]`}>
      <div className='md:w-11/12 w-10/12 relative mx-auto flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <img className='h-10' src="./arcsale-logo.png" alt="logo" />
          <h1 className='text-2xl font-bold'>Arcsale AI</h1>
        </div>

        <div className='text-color-primary md:flex hidden font-medium gap-9 text-xl'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/retail">Retail</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/FAQ">FAQ's</NavLink>
        </div>

        <div onClick={() => setShowNav(true)} className='md:hidden block'>
          <RiMenuLine size={28} />
        </div>

        {showNav && (
          <div className='fixed top-0 h-screen nav-animate right-0 w-[300px] bg-[#1a1a1a]'>
            <div onClick={() => setShowNav(false)} className='w-10 ml-auto mr-4 pt-4'><RiCloseLine size={30} color='white' /></div>
            <div className='pt-4 flex flex-col pl-8 pr-8'>
              <NavLink className={navLinkClass} to="/">Home</NavLink>
              <NavLink className={navLinkClass} to="/retail">Retail</NavLink>
              <NavLink className={navLinkClass} to="/products">Products</NavLink>
              <NavLink className={navLinkClass} to="/about">About Us</NavLink>
              <NavLink className={navLinkClass} to="/contact">Contact</NavLink>
              <NavLink className={navLinkClass} to="/FAQ">FAQ's</NavLink>
            </div>
          </div>
        )}

        <button className='px-6 py-3 md:block hidden text-white text-lg font-medium rounded-full bg-color-primary'>Get A Demo</button>
      </div>
    </nav>
  )
}

export default Navbar