import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import ProductForm from '../sections/ProductForm'
import ProductList from '../sections/ProductList'

const ManageProductsView: React.FC = () => {
  // const { pathname } = useLocation()
  const { products, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [pathname])


  useEffect(() => {
    getAll()
  }, [getAll])

  document.title = 'Manage Products | Fixxo.'

  return (
    <>
        <ProductForm />
        <ProductList products={products} />
    </>
  )
}

export default ManageProductsView