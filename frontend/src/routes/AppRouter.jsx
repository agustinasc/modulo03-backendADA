import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Products} from "../pages/Products"
import { ProductAddForm } from "../components/ProductAddForm";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />}/>
                <Route path="/formAdd" element={<ProductAddForm />}/>
                <Route path="/formAdd/:id" element={<ProductAddForm />} />
            </Routes>
        </BrowserRouter>
    )
}