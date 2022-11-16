import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import { useEffect, useState } from 'react';
// import { ProductContext, FourProductsContext, EighthProductsContext, NineProductsContext } from './contexts/contexts';
// import { ShoppingCartProvider } from './contexts/ShoppingCartContext';


const App: React.FC = () => {
  const [products, setProducts] = useState([])
  const [fourProducts, setFourProducts] = useState([])
  const [eighthProducts, setEighthProducts] = useState([])
  const [nineProducts, setNineProducts] = useState([])

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

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/products/" element={<ProductsView />} />
          <Route path="/products/:articleNumber" element={<ProductDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;