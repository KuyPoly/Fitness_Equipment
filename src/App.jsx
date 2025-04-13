import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/nav/Navbar';
import Home from './pages/home/home';
import Rackpage from './pages/rack/rackpage';
import SpecialtyPage from './pages/specialty/specialtyPage';
import ProductPage from './pages/product/productPage';
import CartPage from './pages/cart/cartPage';
import ScrollToTop from './component/scrollTotheTop';
import AccountPage from './component/accountpage/accountpage';  
import Signup from './component/signup/signup';  
import Contact from './pages/Contact/contact'; 
import AccessoriesPage from './pages/accessories/accessoriespage';
import Payment from './pages/Payment/payment'; 

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
          <Route path="/specialty" element={<SpecialtyPage />} /> 
          <Route path="/product/:name" element={<ProductPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;