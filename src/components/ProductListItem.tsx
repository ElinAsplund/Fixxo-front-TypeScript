import React from 'react'
import { NavLink } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { CartItem } from '../models/cartModels'
import { Product, ProductAPI } from '../models/productModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductListItem: React.FC <{ item: ProductAPI }> = ({ item }) => {

    const { remove } = React.useContext(ProductAPIContext) as IProductAPIContext
 
    return (
        <div className="product-list-item btn-no-corners">
            <div className='left-side'>
                <p>id: {item.id}</p>
                <div className="placeholder-area">
                    <img src={item.imageName} />
                </div>
                {/* <h2>{item.item.category}</h2> */}
                <p className="product-name">{item.name}</p>
                {/* <p><span id="before-discount-price">{item.item.initialPrice}</span> {currencyFormatter(item.item.price)}</p> */}
            </div>
            <p className="product-price">Price: {currencyFormatter(item.price)}</p>
            <div className='right-side'>
                <NavLink to={`/update_product/${item.id}`} end>
                    <button className='btn-product edit-btn'><i className="fa-solid fa-pen"></i></button>
                </NavLink>
                <button className='btn-product remove-btn' onClick={() => remove(item.id)} ><i className='fa-solid fa-trash'></i></button>
                {/* <button className='btn-product remove-btn' onClick={() => item.id !== undefined ? remove(item.id): 0} ><i className='fa-solid fa-trash'></i></button> */}
                {/* <button className='btn-product remove-btn' onClick={() => (item.id) ? remove(item.id) : "" } ><i className='fa-solid fa-trash'></i></button> */}
            </div>
        </div>
    )
}

export default ProductListItem