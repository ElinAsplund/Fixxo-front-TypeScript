import React, { useContext, useState, useEffect } from "react"
import { Product } from "../models/productModel"

// Flytta dessa två interface till productModel?
interface IProductContext{
    products: Product[],
    fourProducts: Product[],
    eighthProducts: Product[],
    nineProducts: Product[]
}

interface IProductProviderProps{
    children: any
}

const ProductContext = React.createContext< IProductContext | null >( null )

export const useProductContext = () => {
    return React.useContext(ProductContext) as IProductContext
}

export const ProductProvider = ({children}: IProductProviderProps) => {

    const [products, setProducts] = useState<Product[]>([])
    const [fourProducts, setFourProducts] = useState<Product[]>([])
    const [eighthProducts, setEighthProducts] = useState<Product[]>([])
    const [nineProducts, setNineProducts] = useState<Product[]>([])
    
    useEffect(() => {
      const fetchAllProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await result.json())
      }
      fetchAllProducts()
    
      const fetchFourProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')    
        setFourProducts(await result.json())
      }
      fetchFourProducts()
    
      const fetchEighthProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')    
        setEighthProducts(await result.json())
      }
      fetchEighthProducts()
    
      const fetchNineProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')    
        setNineProducts(await result.json())
      }
      fetchNineProducts()
    
    }, [setProducts, setFourProducts, setEighthProducts, setNineProducts])
    

    return <ProductContext.Provider value={{products, fourProducts, eighthProducts, nineProducts}}>
        {children}
    </ProductContext.Provider>
}