import { readJSON, writeJSON } from '../utils/fileHandler.js'

// GET ALL
export const getAll = async (path) =>{
    return await readJSON(path)
}

export const create = async (path, data) =>{
    const items = await(readJSON(path))

    const newItem = {
        id: Date.now(),
        ...data
    }

    items.push(newItem)
    await writeJSON(path, items)
    return newItem
}
export const update = async (path, id, newData) =>{
    const items = await readJSON(path)

    const index = items.findIndex( i => i.id === Number(id))

    if (index === -1) return null
    items[index] = {
        ...items[index],
        ...newData
    }

    await writeJSON(path, items)

    return items[index]
}

export const remove = async (path, id) =>{
    const items = await readJSON(path)

    const filtered = items.filter( i => i.id  !== Number(id))
    if(items.length === filtered.length) return false

    await writeJSON(path, filtered)

    return true
}