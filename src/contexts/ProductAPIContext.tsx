import React, { useState, useContext, createContext } from 'react'
import { ProductAPI, ProductRequest } from '../models/productModels'

export interface IProductAPIContext{
  product: ProductAPI
  setProduct: React.Dispatch<React.SetStateAction<ProductAPI>>
  productRequest: ProductRequest
  setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
  products: ProductAPI[]
  create: (e: React.FormEvent) => void
  get: (id: string) => void
  getAll: () => void
  update: (e: React.FormEvent) => void
  remove: (id: string) => void
  errorText: string
  setErrorText: React.Dispatch<React.SetStateAction<string>>
  toggleBtnClicked: () => void
  isClicked: boolean
}

export interface ProductAPIProviderProps{
  children: any
}


export const ProductAPIContext = createContext< IProductAPIContext | null >(null)
export const useProductAPIContext = () => { return useContext(ProductAPIContext) }

const ProductAPIProvider = ( {children} : ProductAPIProviderProps ) => {
  const baseUrl = 'http://localhost:5000/api/products'
  const product_default: ProductAPI = { id: '', articleNumber: '', tag: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }
  const productRequest_default: ProductRequest = { articleNumber: '', name: '', description: '',category: '', price: 0, rating: 0, imageName: '' }

  const [product, setProduct] = useState<ProductAPI>(product_default)
  const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
  const [products, setProducts] = useState<ProductAPI[]>([])
  const [errorText, setErrorText] = useState<string>('')
  const [isClicked, setIsClicked] = useState<boolean>(false)

  // UNSECURED ROUTES
  // -------------------------------------------------------------------
  // HÄMTA SPECIFIK PRODUKT
  const get = async ( id: string ) => {
    const result = await fetch(`${baseUrl}/details/${id}`)
    if( result.status === 200 )
      setProduct(await result.json())
  }
  
  // HÄMTA ALLA PRODUKTER
  const getAll = async () => {
    const result = await fetch(`${baseUrl}`)
    if( result.status === 200 )
      setProducts(await result.json())
  }

  // SECURED ROUTES
  // -------------------------------------------------------------------
  // SKAPA NY PRODUKT
  const create = async ( e: React.FormEvent ) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(productRequest)
    })

    if ( result.status === 201 ){
      setErrorText('');
      setProductRequest(productRequest_default)
    } else {
      const data = await result.json()
      setErrorText(data.text);
    }
  }

  // UPPDATERA BEFINTLIG PRODUKT
  const update = async ( e: React.FormEvent ) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}/details/${product.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(product)
    })

    if (result.status === 200){
      setErrorText('');
      setProduct(await result.json())
    } else {
      const data = await result.json()
      setErrorText(data.text);
    }
  }

  // TA BORT PRODUKT
  const remove = async ( id: string ) => {
    const result = await fetch(`${baseUrl}/details/${id}`, { 
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      } 
    })

    if (result.status === 200){
      setErrorText('');
      setProduct(product_default)
    } else {
      const data = await result.json()
      setErrorText(data.text);
    }
  }

  // IS THE BUTTON CLICKED?
  const toggleBtnClicked = () => {
    setTimeout(() =>{ setIsClicked(!isClicked) }, 50)
  }

  return (
    <ProductAPIContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, remove, errorText, setErrorText, toggleBtnClicked, isClicked }}>
      {children}
    </ProductAPIContext.Provider>
  )
}

export default ProductAPIProvider