import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { CartItem } from '../models/cartModels'

const SmallCard: React.FC<{ item: CartItem }> = ({ item }) => {
    const incrementQuantity = useShoppingCart()?.incrementQuantity

    // card-menu onClick-events
    const addToWishList = (e: React.MouseEvent<HTMLElement>) => {
        console.log("added to wish list");
    }
    const addToCompare = (e: React.MouseEvent<HTMLElement>) => {
        console.log("added to compare");
    }

    return (
        <div className="small-card" id={item.item.idCardNumber}>
            <div className="placeholder-area">
                <img src={item.item.imageName} />
                <div className="card-menu btn-no-corners">
                    <button onClick={addToWishList} className='btn-menu-icon'><i className='fa-regular fa-heart'></i></button>
                    <button onClick={addToCompare} className='btn-menu-icon'><i className='fa-regular fa-code-compare fa-flip-horizontal'></i></button>
                    <button onClick={() => incrementQuantity !== undefined ? incrementQuantity(item) : {}} className='btn-menu-icon'><i className='fa-regular fa-bag-shopping'></i></button>
                </div>
                <NavLink to={`/products/${item.item.articleNumber}`} end>
                    <button className="btn-bg-theme btn-quick-view">QUICK VIEW</button>
                </NavLink>
            </div>
            <h2>{item.item.category}</h2>
            <NavLink to={`/products/${item.item.articleNumber}`} className="product-name" end>{item.item.name}</NavLink>
            <div className="star-holder">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <p><span id="before-discount-price">{item.item.initialPrice}</span> {currencyFormatter(item.item.price)}</p>
        </div>
    )
}

export default SmallCard