import { createContext, useContext, useState, useEffect } from "react"

// const ProductContext = createContext()

// export const useProductContext = () => {
//     return useContext(ProductContext)
// }

// export const ProductProvider = ({children}) => {

//     const [products, setProducts] = useState([])
//     const [fourProducts, setFourProducts] = useState([])
//     const [eighthProducts, setEighthProducts] = useState([])
//     const [nineProducts, setNineProducts] = useState([])
    
//     useEffect(() => {
//       const fetchAllProducts = async () => {
//         let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
//         setProducts(await result.json())
//       }
//       fetchAllProducts()
    
//       const fetchFourProducts = async () => {
//         let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')    
//         setFourProducts(await result.json())
//       }
//       fetchFourProducts()
    
//       const fetchEighthProducts = async () => {
//         let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')    
//         setEighthProducts(await result.json())
//       }
//       fetchEighthProducts()
    
//       const fetchNineProducts = async () => {
//         let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')    
//         setNineProducts(await result.json())
//       }
//       fetchNineProducts()
    
//     }, [setProducts, setFourProducts, setEighthProducts, setNineProducts])
    

//     return <ProductContext.Provider value={{products, fourProducts, eighthProducts, nineProducts}}>
//         {children}
//     </ProductContext.Provider>
// }
