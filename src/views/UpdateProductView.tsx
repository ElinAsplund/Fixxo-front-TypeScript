import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams, Navigate } from 'react-router-dom'
import { ProductAPIContext, IProductAPIContext } from '../contexts/ProductAPIContext'
import ProductInfoBox from '../sections/ProductInfoBox'
import ProductUpdateForm from '../sections/ProductUpdateForm'

const UpdateProductView: React.FC = () => {
  const { pathname } = useLocation()
  const { getAll, get, products, product } = React.useContext(ProductAPIContext) as IProductAPIContext
  const { id } = useParams()
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  // const [isClicked, setIsClicked] = useState(false)
  
  const parseId = id !== undefined ? id : "";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    getAll()
  }, [product])

  // const toggleIsClicked = () => {
  //   setIsClicked(!isClicked)
  //   console.log('isClicked: ', isClicked);
  // }

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
      {/* <button onClick={toggleIsClicked} className="btn-bg-theme">TEST</button>
      <div>Test: {JSON.stringify(isClicked)}</div> */}
      <ProductUpdateForm product={product} />
    </>
  )
    : <Navigate to="/admin" replace />
}

export default UpdateProductView