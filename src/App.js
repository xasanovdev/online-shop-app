import './scss/styles.scss';
import React, { Suspense } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Orders from './pages/Orders/Orders';
import Catalog from './pages/Catalog/Catalog';
import NotFound from './pages/NotFound/NotFound';
import './i18n/i18n';
import Product from './pages/Product/Product';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />

          <Route path="orders" element={<Orders />} />

          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
