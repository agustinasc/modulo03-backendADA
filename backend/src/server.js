import express from "express"
import dotenv from "dotenv"
import orderRoutes from "./routes/order.routes.js"
import productRoutes from "./routes/product.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/orders", orderRoutes)
app.use("/products", productRoutes)
app.use("/users", userRoutes)

app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada"})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})

export default app