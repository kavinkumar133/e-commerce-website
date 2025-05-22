import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Login from './page/Login';
import Home from './page/Home';
import Signup from './page/Signup';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Home" element={<Home/>} />

      </Routes>
    </Router>
  )
}
