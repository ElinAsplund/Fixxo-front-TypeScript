import { IProduct } from "./productModel"

export interface ICartItem {
    articleNumber: string
    item: IProduct[]
    quantity: number
}

export interface IShoppingCart {
    increment: (articleNumber: string) => void
    decrement: (articleNumber: string) => void
    remove: (articleNumber: string) => void
    totalAmount: () => number
    totalQuantity: () => number
}