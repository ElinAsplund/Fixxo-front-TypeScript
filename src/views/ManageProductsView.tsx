import React from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductForm from '../sections/ProductForm'
import ProductList from '../sections/ProductList'

const ManageProductsView: React.FC = () => {
  return (
    <>
        <MainMenu className="gradient-grey" />
        <ProductForm />
        <ProductList />
        <Footer />
    </>
  )
}

export default ManageProductsView