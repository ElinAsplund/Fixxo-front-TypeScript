import React from 'react'
import ProductInfoBox from '../sections/ProductInfoBox'
import ProductUpdateForm from '../sections/ProductUpdateForm'

const UpdateProductView: React.FC = () => {
    document.title = 'Update Product | Fixxo.'


  return (
    <>
        <ProductInfoBox />
        <ProductUpdateForm />
    </>
  )
}

export default UpdateProductView