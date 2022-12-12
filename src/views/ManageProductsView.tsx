import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import ProductForm from '../sections/ProductForm'
import ProductList from '../sections/ProductList'

const ManageProductsView: React.FC = () => {
  // const { pathname } = useLocation()
  const { products, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [pathname])

  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  document.title = 'Manage Products | Fixxo.'

  return isAuthenticated? (
    <>
      <ProductForm />
      <ProductList products={products} />
    </>
  )
  : <Navigate to="/admin" replace />
}

export default ManageProductsView