import React, { useState, useEffect } from "react"
import { IProductContext, IProductProviderProps, Product } from "../models/productModels"
import { CartItem } from '../models/cartModels'

// Solved this part with help from Sara Lindström and Joakim:

const ProductContext = React.createContext<IProductContext | null>(null)

export const useProductContext = () => {
  return React.useContext(ProductContext) as IProductContext
}

export const ProductProvider = ({ children }: IProductProviderProps) => {

  const [products, setProducts] = useState<CartItem[]>([])
  const [fourProducts, setFourProducts] = useState<CartItem[]>([])
  const [eighthProducts, setEighthProducts] = useState<CartItem[]>([])
  const [nineProducts, setNineProducts] = useState<CartItem[]>([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      const products: Product[] = await result.json()

      const cartItems: CartItem[] = products.map((product: Product) => {
        return {
          item: product,
          quantity: 0
        }
      })
      setProducts(cartItems)
    }
    fetchAllProducts()

    const fetchFourProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      const products: Product[] = await result.json()
      const cartItems: CartItem[] = products.map((product: Product) => {
        return {
          item: product,
          quantity: 0
        }
      })
      setFourProducts(cartItems)
    }
    fetchFourProducts()

    const fetchEighthProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      const products: Product[] = await result.json()
      const cartItems: CartItem[] = products.map((product: Product) => {
        return {
          item: product,
          quantity: 0
        }
      })
      setEighthProducts(cartItems)
    }
    fetchEighthProducts()

    const fetchNineProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')
      const products: Product[] = await result.json()
      const cartItems: CartItem[] = products.map((product: Product) => {
        return {
          item: product,
          quantity: 0
        }
      })
      setNineProducts(cartItems)
    }
    fetchNineProducts()

  }, [setProducts, setFourProducts, setEighthProducts, setNineProducts])


  return <ProductContext.Provider value={{ products, fourProducts, eighthProducts, nineProducts }}>
    {children}
  </ProductContext.Provider>
}