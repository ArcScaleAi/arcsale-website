import React from 'react'
import Products from '../components/Products'
import Goal from '../components/Goal'

const ProductPage = ({openModal, setOpenModal}) => {
  return (
    <>
    <Products openModal = {openModal} setOpenModal = {setOpenModal}/>
    </>
  )
}

export default ProductPage