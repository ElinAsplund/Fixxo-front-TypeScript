import { Product } from "./productModel"

export interface CartItem {
    item: Product
    quantity: number
}