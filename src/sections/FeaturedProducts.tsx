import React from 'react'
import SmallCard from '../components/SmallCard'
import { Product } from '../models/productModel'

interface IFeaturedProducts{
    className: string,
    title: string
    items: Product[]
}

const FeaturedProducts: React.FC <IFeaturedProducts> = ( {className, title, items=[]} ) => {
  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            items.map((product: Product) => <SmallCard item={product} key={product.articleNumber} />)
          }
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts