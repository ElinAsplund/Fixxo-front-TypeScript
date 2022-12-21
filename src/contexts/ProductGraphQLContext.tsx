import { useState, useContext, createContext } from 'react'
import { ProductAPI } from '../models/productModels'
import { CartItem } from '../models/cartModels';
import { useQuery, gql } from '@apollo/client';
const GET_PRODUCTS_QUERY = gql`{ products { _id , tag, name, category, price, imageName } }`

export interface IProductGraphQLContext{
  getAllQL: () => void
  allQL: CartItem[]
}

export interface ProductGraphQLProviderProps{
  children: any
}

export const ProductGraphQLContext = createContext< IProductGraphQLContext | null >(null)
export const useProductGraphQLContext = () => {return useContext(ProductGraphQLContext)}

const ProductGraphQLProvider = ( {children} : ProductGraphQLProviderProps ) => {
  const [ allQL, setAllQL ] = useState<CartItem[]>([])
  const { data } = useQuery(GET_PRODUCTS_QUERY)

  // UNSECURED ROUTES
  // -------------------------------------------------------------------
  // GET ALL PRODUCTS FROM GRAPHQL
  // -------------------------------------------------------------------
  const getAllQL = async () => {
    let products: ProductAPI[] = await data.products
    products = products.map((product: ProductAPI) => {
      return {
        _id: product._id,
        id: product._id !== undefined ? product._id : "",
        tag: product.tag,
        name: product.name,
        category: product.category,
        price: Number(product.price),
        imageName: product.imageName
      }
    })
  
    const cartItems: CartItem[] = products.map((product: ProductAPI) => {
      return {
        item: product,
        quantity: 0
      }
    })
        
    return setAllQL(cartItems)
  }

  return(
    <ProductGraphQLContext.Provider value={{ getAllQL, allQL }}>
      {children}
    </ProductGraphQLContext.Provider>
  )
}

export default ProductGraphQLProvider