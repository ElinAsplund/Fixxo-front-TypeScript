import React, { useState } from "react"
import { IProductContext, IProductProviderProps, ProductAPI } from "../models/productModels"
import { CartItem } from '../models/cartModels'

// Solved this part with help from Sara Lindström and Joakim:
const ProductContext = React.createContext<IProductContext | null>(null)

export const useProductContext = () => {
  return React.useContext( ProductContext ) as IProductContext
}

export const ProductProvider = ( { children }: IProductProviderProps ) => {
  const [all, setAll] = useState<CartItem[]>([])
  const [special, setSpecial] = useState<CartItem[]>([])
  const [featured, setFeatured] = useState<CartItem[]>([])
  const [specialTwo, setSpecialTwo] = useState<CartItem[]>([])
  const [theRemains, setTheRemains] = useState<CartItem[]>([])

  const getAll = async () => {
    let url = 'http://localhost:5000/api/products/'

    const result = await fetch(url)
    const products: ProductAPI[] = await result.json()
    const cartItems: CartItem[] = products.map((product: ProductAPI) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setAll(cartItems)
  }

  const getFeatured = async ( amount: number = 0 ) => {
    let url = 'http://localhost:5000/api/products/featured'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: ProductAPI[] = await result.json()
    const cartItems: CartItem[] = products.map((product: ProductAPI) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setFeatured(cartItems)
  }

  const getSpecial = async ( amount: number = 0 ) => {
    let url = 'http://localhost:5000/api/products/special'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: ProductAPI[] = await result.json()
    const cartItems: CartItem[] = products.map(( product: ProductAPI ) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setSpecial(cartItems)
  }

  const getSpecialTwo = async ( amount: number = 0 ) => {
    let url = 'http://localhost:5000/api/products/special-two'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: ProductAPI[] = await result.json()
    const cartItems: CartItem[] = products.map(( product: ProductAPI ) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setSpecialTwo(cartItems)
  }

  const getTheRemains = async ( amount: number = 0 ) => {
    let url = 'http://localhost:5000/api/products/the-remains'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: ProductAPI[] = await result.json()
    const cartItems: CartItem[] = products.map((product: ProductAPI) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setTheRemains(cartItems)
  }

  return <ProductContext.Provider value={ { all, getAll, special, getSpecial, specialTwo, getSpecialTwo, featured, getFeatured, theRemains, getTheRemains } }>
    {children}
  </ProductContext.Provider>
}