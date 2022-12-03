import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductForm from '../sections/ProductForm'
import ProductList from '../sections/ProductList'

const ManageProductsView: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  document.title = 'Manage Products | Fixxo.'

  return (
    <>
        <ProductForm />
        <ProductList />
    </>
  )
}

export default ManageProductsView