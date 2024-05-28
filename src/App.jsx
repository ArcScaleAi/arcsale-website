import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Retail from './Pages/Retail'
import ProductPage from './Pages/ProductPage'
import { useEffect, useState } from 'react'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import FAQ from './Pages/FAQ'
import Layout from './Pages/Layout'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element = {<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='retail' element={<Retail />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='FAQ' element={<FAQ />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <main className='w-full h-full relative'>
        <RouterProvider router={route} />
      </main>
    </>
  )
}

export default App
