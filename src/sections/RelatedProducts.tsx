import React, { useEffect } from 'react'
import SmallCard from '../components/SmallCard'
import { CartItem } from '../models/cartModels'
import { useProductContext } from '../contexts/ProductContext';

const RelatedProducts: React.FC = () => {
    const { special, getSpecial } = useProductContext()

    useEffect(() => {
        getSpecial(4)
      }, [])

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
                        special.map((product: CartItem) => <SmallCard item={product} key={product.item.id} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts