import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductProvider } from './contexts/ProductContext';
import ManageProductsView from './views/ManageProductsView';
import ProductAPIProvider from './contexts/ProductAPIContext';
import UpdateProductView from './views/UpdateProductView';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
          <ProductAPIProvider>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/products/" element={<ProductsView />} />
              <Route path="/products/:articleNumber" element={<ProductDetailsView />} />
              <Route path="/manage_products" element={<ManageProductsView />} />
              <Route path="/update_product/:id" element={<UpdateProductView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </ProductAPIProvider>
        </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;