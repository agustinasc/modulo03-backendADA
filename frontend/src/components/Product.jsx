import "../styles/Product.css";

/// CARD DE PRODUCTO ///
export const Product = ({ product, onEdit, onDelete }) => {   

    return (
        <div className="product-card">
            <div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <p className="product-stock">${product.stock}</p>

            </div>
            <div>                
                <button onClick={() => onEdit(product)} className="product-button" style={{backgroundColor: "blue"}}>Modificar</button>
                <button onClick={()=> onDelete(product)} className="product-button"  style={{backgroundColor: "red"}}>Eliminar</button>
            </div>
        </div>
    )
}

