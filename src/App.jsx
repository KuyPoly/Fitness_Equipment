import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/nav/navbar'; // Corrected import
import Home from './pages/home/home'; // Corrected import

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;