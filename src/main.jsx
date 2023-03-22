import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from './context/FavoritesContext';
import CartProvider from './context/CartContext';
import UserProvider from './context/UserContext';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
   <UserProvider>
   <CartProvider>
<FavoritesProvider>
    <App />
    </FavoritesProvider>
    </CartProvider>
   </UserProvider>
   </BrowserRouter>
  </React.StrictMode>,
);
