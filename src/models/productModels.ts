import { CartItem } from './cartModels'

// when you are creating a new product
export interface ProductRequest {
  articleNumber?: string,
  name: string,
  tag?: string,
  description?: string,
  category: string,
  price: number,
  rating?: number,
  imageName: string
}

// everything else using product
export interface ProductAPI {
  _id?: string,
  id: string,
  articleNumber?: string,
  tag: string,
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