import React, { useContext } from 'react'
import SmallCard from '../components/SmallCard'
import { Product } from '../models/productModel'
import { CartItem } from '../contexts/ShoppingCartContext'
// import { FourProductsContext } from '../contexts/contexts'
import { useProductContext } from '../contexts/ProductContext';

const RelatedProducts: React.FC = () => {
    // const products = useContext(FourProductsContext)

    const { fourProducts } = useProductContext()

  return (
    <section className="related-products">
        <div className="container">
            <div className="related-products-menu">
                <h1>Related Products</h1>
                <div className="scroll-arrows-holder btn-no-corners">
                    <button className="scroll-arrow">
                        <i className="fa-regular fa-chevron-left"></i>
                    </button>
                    <button className="scroll-arrow">
                        <i className="fa-regular fa-chevron-right"></i>
                    </button>
                </div>
            </div>    
            <div className="grid">
                {
                    fourProducts.map((product: CartItem) => <SmallCard item={product} key={product.item.articleNumber} />)
                }
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts