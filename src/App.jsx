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
          <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;