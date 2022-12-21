import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams, Navigate } from 'react-router-dom'
import { ProductAPIContext, IProductAPIContext } from '../contexts/ProductAPIContext'
import ProductInfoBox from '../sections/ProductInfoBox'
import ProductUpdateForm from '../sections/ProductUpdateForm'

const UpdateProductView: React.FC = () => {
  const { pathname } = useLocation()
  const { getAll, get, products, product } = useContext(ProductAPIContext) as IProductAPIContext
  const { id } = useParams()
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  const parseId = id !== undefined ? id : "";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    getAll()
  }, [product])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  useEffect(() => {
    get(parseId)
  }, [parseId])

  document.title = 'Update Product | Fixxo.'

  return isAuthenticated ? (
    <>
      <ProductInfoBox products={products} product={product} />
      <ProductUpdateForm product={product} />
    </>
  ) : 
    <Navigate to="/admin" replace />
}

export default UpdateProductView