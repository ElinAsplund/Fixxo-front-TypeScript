import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import React from 'react';
import { useProductContext } from '../contexts/ProductContext';

const ProductsView: React.FC = () => {
    document.title='Products | Fixxo.'

    const { products } = useProductContext()

  return (
    <>
      {/* <MainMenu className="bg-white" /> */}
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={products}/>
      {/* <Footer isFixed="" />     */}
    </>
  )
}

export default ProductsView