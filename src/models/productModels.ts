import { CartItem } from './cartModels'

export interface Product {
  id: string,
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
  imageName: string
}

// "ALLT ANNAT FRÅN API"?
export interface ProductAPI {
  id: string,
  _id?: string,
  articleNumber?: string,
  tag?: string,
  name: string,
  description?: string,
  category: string,
  price: number,
  rating?: number,
  imageName: string
}

export interface IProductContext {
  getAll: () => void
  all: CartItem[]
  getFeatured: (amount: number) => void
  featured: CartItem[]
  getSpecial: (amount: number) => void
  special: CartItem[]
  getSpecialTwo: (amount: number) => void
  specialTwo: CartItem[]
  getTheRemains: (amount: number) => void
  theRemains: CartItem[]
}

export interface IProductProviderProps {
  children: any
}