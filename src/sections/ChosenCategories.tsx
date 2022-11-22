import React from 'react'
import MiniCard from '../components/MiniCard'
import { useProductContext } from '../contexts/ProductContext';
import { CartItem } from '../models/cartModels'

const ChosenCategories: React.FC = () => {

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