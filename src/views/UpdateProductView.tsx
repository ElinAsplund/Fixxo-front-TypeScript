import React from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInfoBox from '../sections/ProductInfoBox'
import ProductUpdateForm from '../sections/ProductUpdateForm'

const UpdateProductView: React.FC = () => {
    document.title = 'Update Product | Fixxo.'


  return (
    <>
        <MainMenu className="bg-white" />
        <ProductInfoBox />
        <ProductUpdateForm />
        <Footer />
    </>
  )
}

export default UpdateProductView