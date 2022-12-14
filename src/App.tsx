import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductProvider } from './contexts/ProductTagContext';
import ManageProductsView from './views/ManageProductsView';
import ProductAPIProvider from './contexts/ProductAPIContext';
import UpdateProductView from './views/UpdateProductView';
import MainMenu from './sections/MainMenu';
import Footer from './sections/Footer';
import AdminView from './views/AdminView';
import ProductGraphQLProvider from './contexts/ProductGraphQLContext';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ProductProvider>
      <ShoppingCartProvider>
      <ProductAPIProvider>
      <ProductGraphQLProvider>
        <MainMenu className="gradient-grey" />
        <div className="whole-view">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="/products/" element={<ProductsView />} />
            <Route path="/products/:articleNumber" element={<ProductDetailsView />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/manage_products" element={<ManageProductsView />} />
            <Route path="/update_product/:id" element={<UpdateProductView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </div>
        <Footer />
      </ProductGraphQLProvider>
      </ProductAPIProvider>
      </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;