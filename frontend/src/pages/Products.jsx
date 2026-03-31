import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { useNavigate } from "react-router-dom";
import "../styles/Products.css"

const API_URL = import.meta.env.VITE_API_URL;


const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  console.log("DATA", data);
  return data;
};

export const Products = () => {
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => {
        console.log("DATA", data);
        setProducts(data);
      })
      .catch(error => {
        console.error("ERROR:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="products-loading">Cargando...</p>

  const onRegister = () => {
    navigate("/register")
    console.log("Ingrese un email y password");
    //alert("Su usuario ha sido registrado")
  }
  const onLogin = () =>{
    navigate("/login")
    console.log("Ingrese su email y password");
        
  }

  const onAdd = () =>{
    navigate("/formAdd")
    console.log("Agregar producto");
        
  }
  const onEdit = (product) =>{
    console.log("Editar producto", product);
    navigate(`/formAdd/${product.id}`, { state: { product } });
        
  }

  const onDelete = async (product) => {
  const confirmDelete = window.confirm("¿Seguro que querés eliminar este producto?");
  
  if (!confirmDelete) return;

  try {
    await fetch(`${API_URL}/products/${product.id}`, {
      method: "DELETE"
    });

    setProducts(prev => prev.filter(p => p.id !== product.id));
    alert("Su producto ha sido eliminado");
    console.log("ID que se elimina:", product.id);
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
};


  return (
    <div className="products-container">
      <div>
        <button onClick={onAdd} className="product-button">
            ➕ Agregar Producto
        </button>
        <button onClick={onLogin} className="product-button">
            Login
        </button>
        <button  onClick={onRegister} className="product-button">
            Registrar Usuario
        </button>

      </div>
      <h1 className="products-title">Productos</h1>

      {products.length === 0 ? (
        <p className="products-empty">No hay productos disponibles</p>
      ) : (
        <div className="products-grid">
          {products.map(p => (
            <Product
              key={p.id}
              name={p.name}
              price={p.price}
              stock={p.stock}
              product={p}
              onDelete={() =>onDelete(p)}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}

     
    </div>
  );
};