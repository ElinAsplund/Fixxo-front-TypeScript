import React from 'react'
import SmallCard from '../components/SmallCard'

interface IFeaturedProducts{
    className: string,
    title: string
    // INNEHÅLLER FLERA OLIKA, vill initiera om på något sätt?? 
    items: any[]
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