import React, { useState } from "react"
import { IProductContext, IProductProviderProps, Product } from "../models/productModels"
import { CartItem } from '../models/cartModels'

// Solved this part with help from Sara Lindström and Joakim:

const ProductContext = React.createContext<IProductContext | null>(null)

export const useProductContext = () => {
  return React.useContext(ProductContext) as IProductContext
}

export const ProductProvider = ({ children }: IProductProviderProps) => {

  // const [products, setProducts] = useState<CartItem[]>([])
  // const [fourProducts, setFourProducts] = useState<CartItem[]>([])
  // const [eighthProducts, setEighthProducts] = useState<CartItem[]>([])
  // const [nineProducts, setNineProducts] = useState<CartItem[]>([])
  // const [featuredProducts, setFeaturedProducts] = useState<CartItem[]>([])
  const [all, setAll] = useState<CartItem[]>([])
  const [featured, setFeatured] = useState<CartItem[]>([])
  const [special, setSpecial] = useState<CartItem[]>([])
  const [specialTwo, setSpecialTwo] = useState<CartItem[]>([])
  const [theRemains, setTheRemains] = useState<CartItem[]>([])

  // useEffect(() => {
  //   const fetchAllProducts = async () => {
  //     let result = await fetch('http://localhost:5000/api/products')
  //     // let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
  //     const products: Product[] = await result.json()

  //     const cartItems: CartItem[] = products.map((product: Product) => {
  //       return {
  //         item: product,
  //         quantity: 0
  //       }
  //     })
  //     setProducts(cartItems)
  //   }
  //   fetchAllProducts()

    // const fetchFourProducts = async () => {
    // let result = await fetch('http://localhost:5000/api/products/take=4')
      // let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
    //   const products: Product[] = await result.json()
    //   const cartItems: CartItem[] = products.map((product: Product) => {
    //     return {
    //       item: product,
    //       quantity: 0
    //     }
    //   })
    //   setFourProducts(cartItems)
    // }
    // fetchFourProducts()

    // const fetchEighthProducts = async () => {
    //   let result = await fetch('http://localhost:5000/api/products/take=8')
      // let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
    //   const products: Product[] = await result.json()
    //   const cartItems: CartItem[] = products.map((product: Product) => {
    //     return {
    //       item: product,
    //       quantity: 0
    //     }
    //   })
    //   setEighthProducts(cartItems)
    // }
    // fetchEighthProducts()

    // const fetchNineProducts = async () => {
    //   let result = await fetch('http://localhost:5000/api/products/take=9')
      // let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')
    //   const products: Product[] = await result.json()
    //   const cartItems: CartItem[] = products.map((product: Product) => {
    //     return {
    //       item: product,
    //       quantity: 0
    //     }
    //   })
    //   setNineProducts(cartItems)
    // }
    // fetchNineProducts()

    // const fetchFeaturedProducts = async () => {
    //   let result = await fetch('http://localhost:5000/api/products/featured')
    //   const products: Product[] = await result.json()
    //   const cartItems: CartItem[] = products.map((product: Product) => {
    //     return {
    //       item: product,
    //       quantity: 0
    //     }
    //   })
    //   setFeaturedProducts(cartItems)
    // }
    // fetchFeaturedProducts()

  // }, [setProducts])



  const getAll =async () => {
    let url = 'http://localhost:5000/api/products/'

    const result = await fetch(url)
    const products: Product[] = await result.json()
    const cartItems: CartItem[] = products.map((product: Product) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setAll(cartItems)
  }

  const getFeatured =async (amount: number = 0) => {
    let url = 'http://localhost:5000/api/products/featured'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: Product[] = await result.json()
    const cartItems: CartItem[] = products.map((product: Product) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setFeatured(cartItems)
  }

  const getSpecial =async (amount: number = 0) => {
    let url = 'http://localhost:5000/api/products/special'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: Product[] = await result.json()
    const cartItems: CartItem[] = products.map((product: Product) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setSpecial(cartItems)
  }

  const getSpecialTwo =async (amount: number = 0) => {
    let url = 'http://localhost:5000/api/products/special-two'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: Product[] = await result.json()
    const cartItems: CartItem[] = products.map((product: Product) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setSpecialTwo(cartItems)
  }

  const getTheRemains =async (amount: number = 0) => {
    let url = 'http://localhost:5000/api/products/the-remains'

    if (amount !== 0)
      url += `/take=${amount}`
  
    const result = await fetch(url)
    const products: Product[] = await result.json()
    const cartItems: CartItem[] = products.map((product: Product) => {
      return {
        item: product,
        quantity: 0
      }
    })

    setTheRemains(cartItems)
  }


  return <ProductContext.Provider value={{ all, getAll, special, getSpecial, specialTwo, getSpecialTwo, featured, getFeatured, theRemains, getTheRemains }}>
    {children}
  </ProductContext.Provider>
}