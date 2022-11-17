import React from 'react'
import SmallCard from '../components/SmallCard'
// import { IProductProp } from '../models/productModel'

export interface IProduct {
  articleNumber: string,
  name: string,
  description?: string,
  category: string,
  price: number,
  rating: number,
  imageName: string,
  idCardNumber?: string
}

interface IFeaturedProducts{
    className: string,
    title: string
    // INNEHÅLLER FLERA OLIKA, vill initiera om på något sätt?? 
    items: IProduct[]
}

const FeaturedProducts: React.FC <IFeaturedProducts> = ( {className, title, items=[]} ) => {
  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            // items.map(product => <SmallCard item={product} key={product.articleNumber} />)
          }
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts