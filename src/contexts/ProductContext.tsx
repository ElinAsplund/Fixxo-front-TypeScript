import React, { useContext, useState, useEffect } from "react"
import { Product } from "../models/productModel"
import { CartItem } from '../contexts/ShoppingCartContext'

// ------------------------------------------------------------------------------
// INTERFACES
interface IProductContext {
  products: CartItem[],
  fourProducts: CartItem[],
  eighthProducts: CartItem[],
  nineProducts: CartItem[]
}

interface IProductProviderProps {
  children: any
}

// export interface CartItem {
//   item: Product
//   quantity: number
// }

// export interface Product {
//   articleNumber: string,
//   name: string,
//   description?: string,
//   category: string,
//   price: number,
//   rating: number,
//   imageName: string,
//   idCardNumber?: string
//   initialPrice?: number 
// }

// ------------------------------------------------------------------------------

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
      const data = await result.json()
      const cartItems = data.map((product: Product) => {
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
      const data = await result.json()
      const cartItems = data.map((product: Product) => {
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
      const data = await result.json()
      const cartItems = data.map((product: Product) => {
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


// export const UseGetFeaturedProducts = (cardAmount:number) => {

//   const [isReady, setIsReady] = useState<boolean>(false);
//   const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([])

//   //-----------useEffect to fetch from api
//   useEffect (() => {
//       const fetchFeaturedData = async () => {
//           let result = await fetch(https://win22-webapi.azurewebsites.net/api/products?take=${cardAmount})
//           setFeaturedProducts(await result.json());
//           setIsReady(true)
//       }
//       fetchFeaturedData();

//   },[cardAmount])

//   const [featuredCartItems, setFeaturedCartItems] = useState<ICartItem[]>([])

//   //------------useEffect to create ICartItems from result from api
//   useEffect(() => {
//       if(isReady === false){
//           return;
//       }

//       let cartItems = featuredProducts.map(p =>  {
//           let cartItem: ICartItem = {
//               quantity: 0,
//               product: p
//           }

//           return cartItem;
//       })

//       setFeaturedCartItems(cartItems)

//   }, [isReady])

// return featuredCartItems
// }

// export default UseGetFeaturedProducts