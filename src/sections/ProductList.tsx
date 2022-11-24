import React from 'react'
import ProductListItem from '../components/ProductListItem'
import { useProductContext } from '../contexts/ProductContext'
import { CartItem } from '../models/cartModels'

const ProductList: React.FC = () => {

    const { products } = useProductContext()

  return (
    <section className='product-list'>
      <div className="container">
        <div className="grid">
          {
            products.length > 0 && products.map((product: CartItem) => <ProductListItem item={product} key={product.item.articleNumber} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductList