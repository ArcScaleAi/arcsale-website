import React from 'react'
import Products from '../components/Products'
import { GetADemo } from '../utils'

const ProductPage = ({openModal, setOpenModal}) => {
  return (
    <>
    <Products openModal = {openModal} setOpenModal = {setOpenModal}/>
    <GetADemo sentence={'[Enhance] your customer experience with [Arcsale] AI [Today]'} selector = {'demo-para-2'}/>
    </> 
  )
}

export default ProductPage