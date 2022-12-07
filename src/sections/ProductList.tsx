import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductListItem'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { ProductAPI } from '../models/productModels'

const ProductList: React.FC = () => {

  const { products, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext

  useEffect(() => {
    getAll()
  }, [getAll])

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