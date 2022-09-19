import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login.js';
import Signup from "./pages/signup/Signup.js";
import Products from "./pages/products/Products.js";
import Home from "./pages/home/Home.js";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = '/login' element = { <Login /> } />
                    <Route path = '/signup' element = { <Signup /> } />
                    <Route path = '/' element = { <Home /> } />
                    <Route path = '/products' element = { <Products /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}