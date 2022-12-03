import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import React, { useEffect, useState } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import { useLocation } from 'react-router-dom';

const ProductsView: React.FC = () => {
  const { all, getAll } = useProductContext()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    getAll()
  }, [])

  document.title='Products | Fixxo.'

  return (
    <>
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={all}/>
    </>
  )
}

export default ProductsView