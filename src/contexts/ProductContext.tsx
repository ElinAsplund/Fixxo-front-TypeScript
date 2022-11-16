import React, { useContext, useState, useEffect } from "react"
import { IProductProp } from "../models/productModel"

interface IProductContext{
    products: IProductProp[],
    fourProducts: IProductProp[],
    eighthProducts: IProductProp[],
    nineProducts: IProductProp[]
}

interface IProductProviderProps{
    children: any
}

const ProductContext = React.createContext< IProductContext | null >( null )

export const useProductContext = () => {
    return React.useContext(ProductContext) as IProductContext
}

export const ProductProvider = ({children}: IProductProviderProps) => {

    const [products, setProducts] = useState<IProductProp[]>([])
    const [fourProducts, setFourProducts] = useState<IProductProp[]>([])
    const [eighthProducts, setEighthProducts] = useState<IProductProp[]>([])
    const [nineProducts, setNineProducts] = useState<IProductProp[]>([])
    
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