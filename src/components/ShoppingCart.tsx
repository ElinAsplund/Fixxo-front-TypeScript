import React from 'react'
// import { useShoppingCart } from '../contexts/ShoppingCartContext'
// import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart: React.FC = () => {
    // const { cartItems } = useShoppingCart()

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
                // cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
            }
        </div>
    </div>
  )
}

export default ShoppingCart