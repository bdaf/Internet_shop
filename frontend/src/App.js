import { Routes, Route } from 'react-router';
import React,{useState} from "react";

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Faq from './pages/FAQ/Faq';
import EmployeePanel from './pages/EmployeePanel/EmployeePanel';
import Cart from './pages/Cart/Cart';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/panel" element={<EmployeePanel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
