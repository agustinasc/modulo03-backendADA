import * as generic from "./genericService.js"

const path = "./src/data/products.json"

export const getAllProducts = () => generic.getAll(path)

export const createProduct = (data) => generic.create(path, data)

export const updateProduct = (id, data) => generic.update(path, id, data)

export const deleteProduct = (id) => generic.remove(path, id)