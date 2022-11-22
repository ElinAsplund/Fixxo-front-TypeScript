import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'
import { CartItem } from '../models/cartModels'

const ShoppingCart: React.FC = () => {
    const cart = useShoppingCart()

    // Debugging with Joakim:
    // React.useEffect(() => {
    //     console.log('test', test)
    // }, [test])

    // Solving tabIndex problem:
    // https://stackoverflow.com/questions/73230435/how-to-add-tabindex-0-in-typescript-div

    return (
        <div className="offcanvas offcanvas-end shopping-cart" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping"></i> Shopping Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                    cart && cart.cartItems.map((item: CartItem) => (<ShoppingCartItem key={item.item.articleNumber} item={item} />))
                }
            </div>
        </div>
    )
}

export default ShoppingCart