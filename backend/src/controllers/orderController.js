import * as orderService from "../services/orderService.js"


export const getOrders = async (req, res) => {

    try {
        const {search} = req.query

        let orders = await orderService.getAllOrders()

        //case insensitive
        if(search){
            orders = orders.filter(o =>
                o.id.toString().includes(search)
);
        }
        res.json(orders)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ordenes de pedido"})
    }
}

export const createOrder = async ( req, res) =>{
    try {
        const { products } = req.body 

        if(!products || !Array.isArray(products) || products.length === 0){
            return res.status(400).json({ error: "Productos invalidos"})
        }
        const newOrder = await orderService.createOrder(req.body)
        res.status(201).json(newOrder)

    } catch (error) {
        res.status(500).json({ error: error.message || "Error al creal la orden"})
    }
}

export const updateOrder = async (req, res) => {
     try {
        const { id} = req.params

        const updateOrder = await orderService.updateOrder(id, req.body)

        if(!updateOrder){
            return res.status(404).json({ error: "Orden no encontrada"})
        }
        res.json(updateOrder)
     } catch (error) {
        res.status(500).json({ error: "Error al actualizar la Orden de Pedido"})
     }
}

export const deleteOrder = async (req, res) => {
     try {
        const {id} = req.params

        const deleted = await orderService.deleteOrder(id)

        if(!deleted){
            return res.status(404).json({ error: "Orden no encontrada"})
        }
        res.json({message: "Orden de Pedido eliminada correctamente"})

     } catch (error) {
        res.status(500).json({ error: "Error al eliminar la Orden de Pedido"})
     }
}
