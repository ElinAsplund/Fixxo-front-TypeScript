import { Product } from "./productModels"

export interface ShoppingCartContextProps {
    cartItems: CartItem[]
    cartQuantity: number
    cartTotal: number
    getItemQuantity: (id: number) => number
    getItemPrice: (id: number) => number
    incrementQuantity: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void
    removeItem: (id: number) => void
}

export interface CartItem {
    item: Product
    quantity: number
}

export interface ShoppingCartProviderProp {
    children: any
}