import React from 'react'
import ProductListItem from '../components/ProductListItem'
import { ProductAPI } from '../models/productModels'
import { IProductList } from '../models/sectionsModels'

const ProductList: React.FC <IProductList> = ( {products} ) => {

  return (
    <section className='product-list'>
      <div className="container">
        <div className="list">
          {
            products.length > 0 && products.map((product: ProductAPI) => <ProductListItem item={product} key={product.id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductList