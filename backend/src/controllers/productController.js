import * as productService from "../services/productService.js"


export const getProducts = async (req, res) => {

    try {
        const {search} = req.query

        let products = await productService.getAllProducts()

        //case insensitive
        if(search){
            products = products.filter(p =>
                p.name.toLowerCase().includes(search.toLowerCase())
            )
        }
        res.json(products)
    } catch (error) {
        console.error("ERROR: ", error);
        res.status(500).json({ error: "Error al obtener los productos"})
    }
}

export const createProduct = async ( req, res) =>{
    try {
        const { name, price } = req.body //falta codigo para asignar ID

        if(!name || !price){
            return res.status(400).json({ error: "Datos incompletos, falta nombre o precio"})
        }
        const newProduct = await productService.createProduct(req.body)
        res.status(201).json(newProduct)

    } catch (error) {
        console.error("ERROR REGISTER:", error);
        res.status(500).json({ error: "Error al crear el producto"})
    }


}

export const updateProduct = async (req, res) => {
     try {
        const { id} = req.params

        const updateProduct = await productService.updateProduct(id, req.body)

        if(!updateProduct){
            return res.status(404).json({ error: "Producto no encontrado"})
        }
        res.json(updateProduct)
     } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ error: "Error al actualizar Producto"})
     }
}

export const deleteProduct = async (req, res) => {
     try {
        const {id} = req.params

        const deleted = await productService.deleteProduct(id)

        if(!deleted){
            return res.status(404).json({ error: "Producto no encontrado"})
        }
        res.json({message: "Producto eliminado"})
     } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ error: "Error al actualizar Item"})
     }
}
