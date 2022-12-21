import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem, ShoppingCartContextProps, ShoppingCartProviderProp } from "../models/cartModels";

const ShoppingCartContext = createContext<ShoppingCartContextProps | null>(null);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ( { children }: ShoppingCartProviderProp ) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.quantity * item.item.price), 0
    )

    const getItemQuantity = ( id: string ) => {
        return cartItems.find(item => item.item.id === id)?.quantity || 0
    }

    const getItemPrice = ( id: string ) => {
        let quantity = cartItems.find(item => item.item.id === id)?.quantity || 0
        let price = cartItems.find(item => item.item.id === id)?.item.price || 0

        let itemTotal = quantity * price

        return itemTotal
    }

    const incrementQuantity = ( cartItem: CartItem ) => {

        setCartItems(items => {
            if (items.find(item => item.item.id === cartItem.item.id) == null) {
                return [...items, { item: cartItem.item, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.item.id === cartItem.item.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = ( cartItem: CartItem ) => {

        setCartItems(items => {
            if (items.find(item => item.item.id === cartItem.item.id)?.quantity === 1) {
                return items.filter(item => item.item.id !== cartItem.item.id)
            } else {
                return items.map(item => {
                    if (item.item.id === cartItem.item.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = ( id: string ) => {
        setCartItems(items => {
            return items.filter(item => item.item.id !== id)
        })
    }

    const result: ShoppingCartContextProps = {
        cartItems,
        cartQuantity,
        cartTotal,
        getItemQuantity,
        getItemPrice,
        incrementQuantity,
        decrementQuantity,
        removeItem
    }


    return <ShoppingCartContext.Provider value={result}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}