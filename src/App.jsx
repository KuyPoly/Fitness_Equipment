import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/nav/Navbar';
import Home from './pages/home/home';
import Rackpage from './pages/rack/rackpage';
import ProductPage from './pages/product/productPage';
import CartPage from './pages/cart/cartPage';
import ScrollToTop from './component/scrollTotheTop';

function App() {
  const [cart, setCart] = useState([]); // Global cart state

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rackpage" element={<Rackpage />} />
          <Route path="/product/:name" element={<ProductPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;