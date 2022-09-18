import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.js";
import CartShopping from "./pages/CartShopping/CartShopping.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<CartShopping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
