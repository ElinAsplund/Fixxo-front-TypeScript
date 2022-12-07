import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductAPIContext, IProductAPIContext } from '../contexts/ProductAPIContext'
import ProductInfoBox from '../sections/ProductInfoBox'
import ProductUpdateForm from '../sections/ProductUpdateForm'

const UpdateProductView: React.FC = () => {
  const { pathname } = useLocation()
  const { getAll, get, products, product } = React.useContext(ProductAPIContext) as IProductAPIContext
  const { id } = useParams()

  const parseId = id !== undefined ? id: "";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
      getAll()
  }, [getAll])

  useEffect(() => {
      get(parseId)
  }, [parseId])

  document.title = 'Update Product | Fixxo.'

  return (
    <>
        <ProductInfoBox products={products} product={product} />
        <ProductUpdateForm product={product} />
    </>
  )
}

export default UpdateProductView