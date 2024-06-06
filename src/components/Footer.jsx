import React, { useEffect, useState } from 'react'
import { DemoButton } from '../utils'
import { NavLink } from 'react-router-dom'
import {EmailContact, FollowUs} from '../utils/EmailContact'
import { onValue, ref } from 'firebase/database'
import { database } from '../utils/firebaseConfig'

const Footer = () => {
    const [logo, setLogo] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/logo/arcsale'), (snapshot) => {
          if (snapshot !== null) {
            setLogo(snapshot.val())
          }
        }, {
            onlyOnce: true
        })
      }, [])

    return (
        <section className='w-full pt-4'>
            <div className='w-full flex md:flex-row flex-col gap-8 text-white justify-between px-6 md:px-16 py-10 bg-[#a382e6]'>
                <div className='md:basis-[30%]'>
                    <NavLink to='/' className='flex gap-3 items-center'>
                        <img className='h-12' src={logo} alt="" />
                        <h1 className='font-bold text-3xl'>Arcsale AI</h1>
                    </NavLink>
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
                   <EmailContact />
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