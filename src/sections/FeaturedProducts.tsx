import React from 'react'
import SmallCard from '../components/SmallCard'
import { CartItem } from '../contexts/ShoppingCartContext'
import { IFeaturedProducts } from '../models/sectionModel'


const FeaturedProducts: React.FC<IFeaturedProducts> = ({ className, title, items }) => {

  // Debugging with Joakim:
  // React.useEffect(() => {
  //   console.log(items)
  // }, [items])

  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            items.length > 0 && items.map((product: CartItem) => <SmallCard item={product} key={product.item.articleNumber} />)
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts