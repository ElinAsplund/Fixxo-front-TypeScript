import { Product } from "./productModels"

export interface ShoppingCartContextProps {
    cartItems: CartItem[]
    cartQuantity: number
    getItemQuantity: (articleNumber: string) => number
    incrementQuantity: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void
    removeItem: (articleNumber: string) => void
}

export interface CartItem {
    item: Product
    quantity: number
}

export interface ShoppingCartProviderProp {
    children: any
}