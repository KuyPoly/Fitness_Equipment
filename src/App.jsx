import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/nav/navbar'

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
    </Router>
  )
}

export default App
