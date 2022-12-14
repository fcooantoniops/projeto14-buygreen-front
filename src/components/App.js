import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.js";
import CartShopping from "./pages/CartShopping/CartShopping.js";
import Signup from "./pages/signup/Signup.js";
import UserContext from "./UserContext";
import { useState } from "react";
import Products from "./pages/products/Products.js";
import Home from "./pages/home/Home.js";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ token, setToken }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cartShopping" element={<CartShopping />} />
            <Route path = '/' element = { <Home /> } />
            <Route path = '/products' element = { <Products /> } />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
