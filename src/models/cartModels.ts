import { ProductAPI } from "./productModels"

export interface ShoppingCartContextProps {
    cartItems: CartItem[]
    cartQuantity: number
    cartTotal: number
    getItemQuantity: (id: string) => number
    getItemPrice: (id: string) => number
    incrementQuantity: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void
    removeItem: (id: string) => void
}

export interface CartItem {
    item: ProductAPI
    quantity: number
}

export interface ShoppingCartProviderProp {
    children: any
}