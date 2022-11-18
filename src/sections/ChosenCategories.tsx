import React, { useContext }  from 'react'
import MiniCard from '../components/MiniCard'
// import { NineProductsContext } from '../contexts/contexts'
import { Product } from '../models/productModel'
import { useProductContext } from '../contexts/ProductContext';
import { CartItem } from '../contexts/ShoppingCartContext'

const ChosenCategories: React.FC = () => {
  // const products = useContext(NineProductsContext)

  const { nineProducts } = useProductContext()

  return (
    <section className="chosen-categories ">
      <div className="container">
        <div className="grid">
          <h3 className="first-coloumn">Latest Products</h3>
          <h3 className="middle-coloumn">Best Selling Products</h3>
          <h3 className="last-coloumn">Top Reacted Products</h3>
          {
            nineProducts.map((product: CartItem) => <MiniCard item={product} key={product.item.articleNumber} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ChosenCategories