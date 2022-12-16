import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductGraphQLContext, IProductGraphQLContext } from '../contexts/ProductGraphQLContext';

const ProductsView: React.FC = () => {
  const { getAllQL, allQL } = React.useContext(ProductGraphQLContext) as IProductGraphQLContext
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    getAllQL()
  }, [])

  document.title = 'Products | Fixxo.'

  // The "fetching" of the products from graphQL aren't perfectly synced with the frontend.
  // I don't know how to fix that. Async/await aren't working as I expect (in ProductGraphQLContext).

  return (
    <>
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={allQL} />
    </>
  )
}

export default ProductsView