import React from 'react'
import { DemoButton, FollowUs } from '../utils'
import { RiLinkedinBoxFill, RiInstagramLine } from '@remixicon/react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='w-full pt-4'>
            <div className='w-full flex md:flex-row flex-col gap-8 text-white justify-between px-6 md:px-16 py-10 bg-[#a382e6]'>
                <div className='md:basis-[30%]'>
                    <div className='flex gap-3 items-center'>
                        <img className='h-12' src="./arcsale-logo.png" alt="" />
                        <h1 className='font-bold text-3xl'>Arcsale AI</h1>
                    </div>
                    <p className='text-xl text-center leading-7 font-medium mt-5'>Virtual Assistant For Superior In-Person Customer Experiences And World-Class Software</p>
                </div>

                <div className='flex flex-col gap-3 text-lg font-medium'>
                    <NavLink className = 'hover:text-color-primary' to="/">Home</NavLink>
                    <NavLink className = 'hover:text-color-primary' to="/retail">Retail</NavLink>
                    <NavLink className = 'hover:text-color-primary' to="/products">Products</NavLink>
                    <NavLink className = 'hover:text-color-primary' to="/about">About Us</NavLink>
                    <NavLink className = 'hover:text-color-primary' to="/contact">Contact</NavLink>
                    <NavLink className = 'hover:text-color-primary' to="/FAQ">FAQ's</NavLink>
                </div>

                <div className='flex flex-col gap-7 text-lg font-medium'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='font-semibold text-2xl'>Contact us</h2>
                        <a className='hover:text-color-primary' href="">+919529030349</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className='font-semibold text-2xl'>Email us</h2>
                        <a className='hover:text-color-primary' href="">Contact@arcsaleai.com</a>
                    </div>
                </div>

                <div className='flex flex-col gap-10 text-lg'>
                    <DemoButton />
                    <FollowUs />
                </div>
            </div>
        </section>
    )
}

export default Footer