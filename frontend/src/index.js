import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./components/Cart"
import { AuthContextProvider } from './store/auth-context';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
