import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Layout = () => {
    const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
    <Navbar isTopOfPage = {isTopOfPage} showNav = {showNav} setShowNav = {setShowNav}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout