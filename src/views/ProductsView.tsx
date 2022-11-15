import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'

const ProductsView: React.FC = () => {
    document.title='Products | Fixxo.'

  return (
    <>
        <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
    </>
  )
}

export default ProductsView