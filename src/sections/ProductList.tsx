import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductListItem'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { useProductContext } from '../contexts/ProductContext'
import { CartItem } from '../models/cartModels'
import { Product, ProductAPI } from '../models/productModels'

const ProductList: React.FC = () => {

  // const { products } = useProductContext()
  const { products, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <section className='product-list'>
      <div className="container">
        <div className="grid">
          {/* {
            products.length > 0 && products.map((product: Product) => <div className='my-3' key={product.id}>ID: {product.id} NAME: {product.name} PRICE: {product.price}</div>)
          } */}
          {
            products.length > 0 && products.map((product: ProductAPI) => <ProductListItem item={product} key={product.id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductList