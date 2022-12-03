import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { ShoppingCartProp } from '../models/sectionsModels'
import { currencyFormatter } from '../utilities/currencyFormatter'


const ShoppingCartItem: React.FC<ShoppingCartProp> = ({ item }) => {
    const incrementQuantity = useShoppingCart()?.incrementQuantity
    const decrementQuantity = useShoppingCart()?.decrementQuantity
    const removeItem = useShoppingCart()?.removeItem

    return (
        <div className='shopping-cart-item'>
            <div className='item-holder-left d-flex'>
                <div className='item-image'>
                    <img src={item.item.imageName} alt={item.item.name} />
                </div>
                <div className='item-info'>
                    <div className='item-info-name'>{item.item.name}</div>
                    <div className='item-info-quantity btn-no-corners'>
                        <button className='btn-canvas' onClick={() => decrementQuantity !== undefined ? decrementQuantity(item) : {}}>-</button>
                        <span>{item.quantity}</span>
                        <button className='btn-canvas' onClick={() => incrementQuantity !== undefined ? incrementQuantity(item) : {}}>+</button>
                    </div>
                </div>
            </div>
            <div className='item-price btn-no-corners'>
                <div className='price-tag'>{currencyFormatter(item.item.price * item.quantity)}</div>
                <button className='btn-canvas remove-btn' onClick={() => removeItem !== undefined ? removeItem(item.item.id) : {}}><i className='fa-solid fa-trash'></i></button>            
            </div>
        </div>
    )
}

export default ShoppingCartItem