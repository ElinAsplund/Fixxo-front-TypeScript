import React, { useState, useContext, createContext } from 'react'
import { CartItem } from '../models/cartModels'
import { Product, ProductRequest } from '../models/productModels'

export interface IProductAPIContext{
  product: Product
  setProduct: React.Dispatch<React.SetStateAction<Product>>
  productRequest: ProductRequest
  setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
  products: Product[]
  create: (e: React.FormEvent) => void
  get: (id: number) => void
  getAll: () => void
  update: (e: React.FormEvent) => void
  remove: (id: number) => void
}

export interface ProductAPIProviderProps{
    children: any
}

export const ProductAPIContext = createContext< IProductAPIContext | null >(null)
export const useProductAPIContext = () => {return useContext(ProductAPIContext)}

const ProductAPIProvider = ({children} : ProductAPIProviderProps) => {
  const baseUrl = 'http://localhost:5000/api/products'
  const product_default: Product = { id: 0, articleNumber: '', name: '', category: '', price: 0, rating: 0, imageName: '' }
  const productRequest_default: ProductRequest = { articleNumber: '', name: '', category: '', price: 0, rating: 0, imageName: '' }

  const [product, setProduct] = useState<Product>(product_default)
  const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
  const [products, setProducts] = useState<Product[]>([])

  // SKAPA NY PRODUKT
  const create = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productRequest)
    })

    if (result.status === 201){
        setProductRequest(productRequest_default)
    } else {
      console.log('error')
    }
  }

  // HÄMTA SPECIFIK(?) PRODUKT
  const get = async (id: number) => {
    const result = await fetch(`${baseUrl}/${id}`)
    if( result.status === 200 )
      setProduct(await result.json())
  }

  // HÄMTA ALLA PRODUKTER
  const getAll = async () => {
    const result = await fetch(`${baseUrl}`)
    if( result.status === 200 )
      setProducts(await result.json())
  }

  // UPPDATERA BEFINTLIG PRODUKT
  const update = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}/${product.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    if (result.status === 200)
      setProduct(await result.json())
  }
  
  // TA BORT PRODUKT
  const remove = async (id: number) => {
    const result = await fetch(`${baseUrl}/${id}`, { 
      method: 'delete' 
    })

    if (result.status === 204)
      setProduct(product_default)
  }

  return (
    <ProductAPIContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, remove }}>
      {children}
    </ProductAPIContext.Provider>
  )
}

export default ProductAPIProvider