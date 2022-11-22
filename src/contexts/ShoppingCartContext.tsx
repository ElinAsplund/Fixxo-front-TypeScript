import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem, ShoppingCartContextProps, ShoppingCartProviderProp } from "../models/cartModels";

const ShoppingCartContext = createContext<ShoppingCartContextProps | null>(null);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProp) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find(item => item.item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: CartItem) => {

        setCartItems(items => {
            if (items.find(item => item.item.articleNumber === cartItem.item.articleNumber) == null) {
                return [...items, { item: cartItem.item, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.item.articleNumber === cartItem.item.articleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: CartItem) => {

        setCartItems(items => {
            if (items.find(item => item.item.articleNumber === cartItem.item.articleNumber)?.quantity === 1) {
                return items.filter(item => item.item.articleNumber !== cartItem.item.articleNumber)
            } else {
                return items.map(item => {
                    if (item.item.articleNumber === cartItem.item.articleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
            return items.filter(item => item.item.articleNumber !== articleNumber)
        })
    }

    const result: ShoppingCartContextProps = {
        cartItems,
        cartQuantity,
        getItemQuantity,
        incrementQuantity,
        decrementQuantity,
        removeItem
    }


    return <ShoppingCartContext.Provider value={result}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}