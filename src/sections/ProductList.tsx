import React from 'react'
import ProductListItem from '../components/ProductListItem'
import { ProductAPI } from '../models/productModels'

interface IProductList{
  products: ProductAPI[]
}

const ProductList: React.FC <IProductList> = ( {products} ) => {

  return (
    <section className='product-list'>
      <div className="container">
        <div className="grid">
          {
            products.length > 0 && products.map((product: ProductAPI) => <ProductListItem item={product} key={product.id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductList