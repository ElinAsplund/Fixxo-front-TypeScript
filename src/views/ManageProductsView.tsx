import React from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductForm from '../sections/ProductForm'
import ProductList from '../sections/ProductList'

const ManageProductsView: React.FC = () => {
  document.title = 'Manage Products | Fixxo.'

  return (
    <>
        {/* <MainMenu className="bg-white" /> */}
        <ProductForm />
        <ProductList />
        {/* <Footer isFixed="fixed-footer" /> */}
    </>
  )
}

export default ManageProductsView