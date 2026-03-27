import fs from "fs/promises"

//Para leer archivo
export const readJSON = async (path) =>{
    const data = await fs.readFile(path, "utf-8")
    return JSON.parse(data)
}

//Escribir el archivo
export const writeJSON = async (path, data) =>{
    await fs.writeFile(path, JSON.stringify(data, null, 2))
}