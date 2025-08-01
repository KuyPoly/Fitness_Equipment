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
import SearchResult from './component/nav/SeachResult';
import Method from './pages/Method/method';
import Profile from './component/accountpage/profile/profile';
import Benchpage from './pages/bench/benchpage';
import BarWeightPage from './pages/bar_weight/bar_weightpage';

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
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<AccountPage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/method" element={<Method />} />
          <Route path="/benchpage" element={<Benchpage />} />
          <Route path="/bar_weightpage" element={<BarWeightPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;