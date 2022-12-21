import React from 'react'
import MiniCard from '../components/MiniCard'
import { CartItem } from '../models/cartModels'
import { IChoseCategories } from '../models/sectionsModels'

const ChosenCategories: React.FC <IChoseCategories> = ( { items } ) => {
  return (
    <section className="chosen-categories ">
      <div className="container">
        <div className="grid">
          <h3 className="first-coloumn">Latest Products</h3>
          <h3 className="middle-coloumn">Best Selling Products</h3>
          <h3 className="last-coloumn">Top Reacted Products</h3>
          {
            items.length > 0 && items.map((product: CartItem) => <MiniCard item={product} key={product.item.id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ChosenCategories