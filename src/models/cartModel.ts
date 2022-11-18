import { Product } from "./productModel"

export interface ICartItem {
    articleNumber: string
    item: Product[]
    quantity: number
}

export interface IShoppingCart {
    increment: (articleNumber: string) => void
    decrement: (articleNumber: string) => void
    remove: (articleNumber: string) => void
    totalAmount: () => number
    totalQuantity: () => number
}