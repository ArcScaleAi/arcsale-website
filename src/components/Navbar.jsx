import React, { useState } from 'react'
import { RiMenu2Line } from '@remixicon/react'
import { NavLink } from 'react-router-dom'


const Navbar = ({ isTopOfPage }) => {
  const navBg = isTopOfPage ? '' : 'bg-white'

  return (
    <nav className={`${navBg} w-full py-4 fixed z-[1000]`}>
      <div className='w-11/12 mx-auto flex items-center justify-between'>
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

        <button className='px-6 py-3 md:block hidden text-white text-lg font-medium rounded-full bg-color-primary'>Get A Demo</button>
      </div>
    </nav>
  )
}

export default Navbar