import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';

import axios from 'axios';

import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  const [date, setDate] = useState(null)

  const fitchDate = async () => {
    await axios.get("http://localhost:8888").then((response) => {
      setDate(response.data)
    })
  }

  useEffect(() => {
    fitchDate()
  }, [])

  return (
    <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
  );
}

export default App;
