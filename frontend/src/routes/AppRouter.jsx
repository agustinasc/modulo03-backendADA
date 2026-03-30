import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Products} from "../pages/Products"
import { ProductAddForm } from "../components/ProductAddForm";
import { AuthProvider } from "../components/AuthContext";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const AppRouter = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Products />}/>
                    <Route path="/formAdd" element={<ProductAddForm />}/>
                    <Route path="/formAdd/:id" element={<ProductAddForm />} />
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    )
}