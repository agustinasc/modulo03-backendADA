import * as generic from "./genericService.js"
import fs from "fs/promises"

const path = "../data/orders.json"
const productPath = "../data/products.json"

const getProducts = async () =>{
    const data = await fs.readFile(productPath, "utf8")
    return JSON.parse(data)
}

export const getAllOrders = () => generic.getAll(path)

export const createOrder = async (data) =>{
    const productsDB = await getProducts()

    let total = 0

    const detailedProducts = data.products.map(orderProduct => {
        const found = productsDB.find(i => i.id === orderProduct.ProductId)

        if(!found){
            throw new Error(`Item ${orderProduct.ProductId} no existe`);            
        }

        const subtotal = found.price * orderProduct.quantity
        total += subtotal

        return {
            ProductId: found.id,
            quantity: orderProduct.quantity,
            price: found.price
        }
    })
    const order = {
        items: detailedProducts,
        total,
        paid: false,
        createAt: new Date()
    }
    return await generic.create(path, order)
}

export const updateOrder = (id, data) => generic.update(path, id, data)

export const deleteOrder = (id) => generic.remove(path, id)