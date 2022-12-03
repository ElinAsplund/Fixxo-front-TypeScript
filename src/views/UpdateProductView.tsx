import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductInfoBox from '../sections/ProductInfoBox'
import ProductUpdateForm from '../sections/ProductUpdateForm'

const UpdateProductView: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

    document.title = 'Update Product | Fixxo.'


  return (
    <>
        <ProductInfoBox />
        <ProductUpdateForm />
    </>
  )
}

export default UpdateProductView