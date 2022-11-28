import React from 'react'
import ProductForm from '../sections/ProductForm'
import ProductList from '../sections/ProductList'

const ManageProductsView: React.FC = () => {
  document.title = 'Manage Products | Fixxo.'

  return (
    <>
        <ProductForm />
        <ProductList />
    </>
  )
}

export default ManageProductsView