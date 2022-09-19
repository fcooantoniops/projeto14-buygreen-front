import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login.js';
import Signup from "./pages/signup/Signup.js";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = '/login' element = { <Login /> } />
                    <Route path = '/signup' element = { <Signup /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}