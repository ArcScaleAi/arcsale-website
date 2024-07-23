import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import Solution from '../components/Solution'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Products from '../components/Products'
import { RiArrowUpSLine } from '@remixicon/react'
import Goal from '../components/Goal'
import ScrollUp from '../utils/ScrollUp'


const Home = () => {
  
  return (
    <>
    <ScrollUp />
    <HeroSection />
    <Solution />
    <Products />
    <Goal />
    <Contact />
    </>
  )
}

export default Home