import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/nav/Navbar';
import Home from './pages/home/home';
import Rackpage from './pages/rack/rackpage';
import ProductPage from './pages/product/productPage';
import ScrollToTop from './component/scrollTotheTop'; // Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rackpage" element={<Rackpage />} />
          <Route path="/product/:name" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;