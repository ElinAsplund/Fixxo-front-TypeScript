import React from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { CartItem } from '../models/cartModels'

const ProductListItem: React.FC<{ item: CartItem }> = ({ item }) => {

    return (
        <div className="small-card product-list-item">
            <div className="placeholder-area">
                <img src={item.item.imageName} />
            </div>
            <h2>{item.item.category}</h2>
            <NavLink to={`/products/${item.item.articleNumber}`} className="product-name" end>{item.item.name}</NavLink>
            <p><span id="before-discount-price">{item.item.initialPrice}</span> {currencyFormatter(item.item.price)}</p>
        </div>
    )
}

export default ProductListItem