import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login.js';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = '/login' element = { <Login /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}