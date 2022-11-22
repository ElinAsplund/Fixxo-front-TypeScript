import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Product } from '../models/productModels'

const ProductDetailsView: React.FC = () => {

  // ------------------------------------------------------------------------------
  // ENABLING RENDERING THE PRODUCT NAME IN THE BREADCRUMB SECTION AND IN THE DOCUMENT TITLE:  
  const [productInfo, setProductInfo] = useState<Product>({} as Product)
  const params = useParams()

  useEffect(() => {
    const fetchProductInfo = async () => {
      const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${params.articleNumber}`)
      setProductInfo(await result.json())
    }
    fetchProductInfo()

  }, [setProductInfo])

  document.title = productInfo.name + ' | Fixxo.'


  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-block" currentPage={productInfo.name} />
      <CurrentOfferBanner />
      <ProductOverview />
      <ProductInDepthInfo />
      {/* PRODUCT INFO BUTTON: */}
      {/* <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={productInformation}>PRODUCT INFO</button></div> */}
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default ProductDetailsView