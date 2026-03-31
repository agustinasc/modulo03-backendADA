import express from "express"
import dotenv from "dotenv"
import orderRoutes from "./routes/order.routes.js"
import productRoutes from "./routes/product.routes.js"
import userRoutes from "./routes/user.routes.js"
import {errorMiddleware }from "./middleware/error.js"
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
//Para conectarlo con React
app.use(cors())

//rutas
app.use("/users", userRoutes)
app.use("/products", productRoutes)
app.use("/orders", orderRoutes)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});


/* // si no entra en ninguna ruta
app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada"})
}) */

//errores internos
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})


export default app