import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import "../styles/Form.css"

const API_URL = import.meta.env.VITE_API_URL;

export const ProductAddForm = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const productToEdit = state?.product;

  const [form, setForm] = useState({
    name: productToEdit?.name || "",
    price: productToEdit?.price || "",
    stock: productToEdit?.stock || ""
  });

  useEffect(() => {
  if (!productToEdit && id) {
    fetch(`${API_URL}/products/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }
}, [id, productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };


 const handleSubmit = async (e) => {
  e.preventDefault();

  const newProduct = {
    ...form,
    price: Number(form.price),
    stock: Number(form.stock)
  };

  const productData = {
    ...form,
    price: Number(form.price),
    stock: Number(form.stock)
  };

  try {
    if(id) {
       await fetch(`${API_URL}/products/${id}`, {
      method: "PUT", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData)
    })
    alert("Su producto ha sido modificado")
    navigate("/");
    } else {
      await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newProduct)
      });
      alert("Su producto ha sido agregado")
      navigate("/");

    }

  } catch (error) {
    console.error("Error al guardar:", error);
  }
};

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{productToEdit ? "Editar Producto" : "Agregar Producto"}</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {productToEdit ? "Guardar cambios" : "Agregar"}
      </button>

      <button type="button" onClick={() => navigate("/")}>
        Cancelar
      </button>
    </form>
  );
};