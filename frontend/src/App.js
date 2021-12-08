import { Routes, Route, Navigate } from 'react-router';
import React,{useContext, useState} from "react";

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import About from './pages/About/About';
import Payment from './pages/Payment/Payment';
import Contact from './pages/Contact/Contact';
import Faq from './pages/FAQ/Faq';
import EmployeePanel from './pages/EmployeePanel/EmployeePanel';
import Cart from './pages/Cart/Cart';
import AuthContext from './store/auth-context';


function App() {
  const authCtx = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/panel" element={(authCtx.role === 'ADMIN' || authCtx.role === 'WORKER') ? <EmployeePanel /> : <Navigate to="/"/>} />
      <Route path="/login" element={authCtx.isLoggedIn ? <Navigate to="/"/> : <Login />}/>
      <Route path="/register" element={authCtx.isLoggedIn ? <Navigate to="/"/> : <Register />} />
      <Route path="/detail/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
