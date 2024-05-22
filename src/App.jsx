import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Retail from './Pages/Retail'
import ProductPage from './Pages/ProductPage'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='arcsale-website/' element={<Home />} />
      <Route path='/arcsale-website/retail' element={<Retail />} />
      <Route path='arcsale-website/products' element={<ProductPage />} />
      </>
    )
  )

  return (
    <>
      <main className='w-full h-full relative'>
        <Navbar />
        <RouterProvider router={route} />
        <Footer />
      </main>
    </>
  )
}

export default App
