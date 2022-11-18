import React from 'react'
import SmallCard from '../components/SmallCard'
import { CartItem } from '../contexts/ShoppingCartContext'
import { Product } from '../models/productModel'

interface IFeaturedProducts{
    className: string,
    title: string,
    items: CartItem[]
}

const FeaturedProducts: React.FC <IFeaturedProducts> = ( {className, title, items=[]} ) => {
  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            items.map((product: CartItem) => <SmallCard item={product} key={product.item.articleNumber} />)
          }
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts