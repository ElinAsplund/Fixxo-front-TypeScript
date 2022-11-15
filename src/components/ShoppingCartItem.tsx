import React from 'react'
// import { useShoppingCart } from '../contexts/ShoppingCartContext'
// import { currencyFormatter } from '../utilities/currencyFormatter'

const ShoppingCartItem: React.FC = () => {
    // const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()

    return (
        <div className='shopping-cart-item'>
            <div className='item-holder-left d-flex'>
                <div className='item-image'>
                    {/* <img src={item.product.imageName} alt={item.product.name} /> */}
                </div>
                <div className='item-info'>
                    {/* <div className='item-info-name'>{item.product.name}</div> */}
                    <div className='item-info-quantity btn-no-corners'>
                        {/* <button className='btn-canvas' onClick={() => decrementQuantity(item)}>-</button> */}
                        {/* <span>{item.quantity}</span> */}
                        {/* <button className='btn-canvas' onClick={() => incrementQuantity(item)}>+</button> */}
                    </div>
                </div>
            </div>
            <div className='item-price btn-no-corners'>
                {/* <div className='price-tag'>{currencyFormatter(item.product.price * item.quantity)}</div> */}
                {/* <button className='btn-canvas remove-btn' onClick={() => removeItem(item.articleNumber)}><i className='fa-solid fa-trash'></i></button> */}
            </div>
        </div>
    )
}

export default ShoppingCartItem