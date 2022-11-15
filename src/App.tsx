import React from 'react';
import './App.min.css';
import HomeView from './views/HomeView';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import NotFoundView from './views/NotFoundView';


const App: React.FC = () => {
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