import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import React, { useEffect, useState } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import { useLocation } from 'react-router-dom';
import { Product } from '../models/productModels';
import { CartItem } from '../models/cartModels';

const ProductsView: React.FC = () => {
  const [productInfo, setProductInfo] = useState<CartItem[]>([])
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const fetchProductInfo = async () => {
      const result = await fetch(`http://localhost:5000/api/products/`)
      const products: Product[] = await result.json()
      const cartItems: CartItem[] = products.map((product: Product) => {
        return {
          item: product,
          quantity: 0
        }
      })
      setProductInfo(cartItems)
    }
    fetchProductInfo()

  }, [])

  document.title='Products | Fixxo.'

  return (
    <>
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={productInfo}/>
    </>
  )
}

export default ProductsView