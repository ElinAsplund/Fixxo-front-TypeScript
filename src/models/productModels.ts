import { CartItem } from './cartModels'

export interface Product {
  id?: number,
  articleNumber: string,
  name: string,
  description?: string,
  category: string,
  price: number,
  rating: number,
  imageName: string,
  initialPrice?: number
}

// "NÄR VI SKAPAR EN PRODUKT"?
export interface ProductRequest {
  articleNumber: string,
  name: string,
  description?: string,
  category: string,
  price: number,
  rating: number,
  imageName: string,
  initialPrice?: number
}

export interface IProductContext {
  products: CartItem[],
  fourProducts: CartItem[],
  eighthProducts: CartItem[],
  nineProducts: CartItem[]
}

export interface IProductProviderProps {
  children: any
}