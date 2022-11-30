import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import { Product } from '../models/productModels'

const ProductDetailsView: React.FC = () => {

  // ------------------------------------------------------------------------------
  // ENABLING RENDERING THE PRODUCT NAME IN THE BREADCRUMB SECTION AND IN THE DOCUMENT TITLE:  
  const [productInfo, setProductInfo] = useState<Product>({} as Product)
  const { articleNumber } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const fetchProductInfo = async () => {
      const result = await fetch(`http://localhost:5000/api/products/${articleNumber}`)
      const data = await result.json()
      setProductInfo(data)
    }
    fetchProductInfo()

  }, [articleNumber])

  document.title = productInfo.name + ' | Fixxo.'


  return (
    <>
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-block" currentPage={productInfo.name} />
      <CurrentOfferBanner />
      <ProductOverview productInfo={productInfo} />
      <ProductInDepthInfo />
      {/* PRODUCT INFO BUTTON: */}
      {/* <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={productInformation}>PRODUCT INFO</button></div> */}
      <RelatedProducts />
    </>
  )
}

export default ProductDetailsView