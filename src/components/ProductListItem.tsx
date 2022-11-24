import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { currencyFormatter } from '../utilities/currencyFormatter'
import { CartItem } from '../models/cartModels'

const ProductListItem: React.FC <{ item: CartItem }> = ({ item }) => {

    return (
        <div className="product-list-item btn-no-corners">
            <div className='left-side'>
                <div className="placeholder-area">
                    <img src={item.item.imageName} />
                </div>
                {/* <h2>{item.item.category}</h2> */}
                <p className="product-name">{item.item.name}</p>
                {/* <p><span id="before-discount-price">{item.item.initialPrice}</span> {currencyFormatter(item.item.price)}</p> */}
            </div>
            <div className='right-side'>
                <button className='btn-product edit-btn'><i className="fa-solid fa-pen"></i></button>
                <button className='btn-product remove-btn'><i className='fa-solid fa-trash'></i></button>
            </div>
        </div>
    )
}

export default ProductListItem