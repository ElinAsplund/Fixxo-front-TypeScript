import React, { useContext }  from 'react'
import MiniCard from '../components/MiniCard'
// import { NineProductsContext } from '../contexts/contexts'
import { IProduct } from '../models/productModel'
import { useProductContext } from '../contexts/ProductContext';

const ChosenCategories: React.FC <IProduct> = () => {
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
            // nineProducts.map(product => <MiniCard item={product} key={product.articleNumber} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ChosenCategories