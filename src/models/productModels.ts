import { CartItem } from './cartModels'

export interface Product {
  articleNumber: string,
  name: string,
  description?: string,
  category: string,
  price: number,
  rating: number,
  imageName: string,
  idCardNumber?: string
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