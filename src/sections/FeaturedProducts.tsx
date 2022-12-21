import React from 'react'
import SmallCard from '../components/SmallCard'
import { CartItem } from '../models/cartModels'
import { IFeaturedProducts } from '../models/sectionsModels'


const FeaturedProducts: React.FC<IFeaturedProducts> = ( { className, title, items } ) => {
  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            items.length > 0 && items.map((product: CartItem) => <SmallCard item={product} key={product.item.id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts