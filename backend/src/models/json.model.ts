import fs from "fs/promises"

export class JSONmodel<T>{
    private path: string
    
    constructor(path: string){
        this.path = path
    }
    async read(): Promise<T[]>{
        const data = await fs.readFile(this.path, "utf-8")
        return JSON.parse(data)
    }
    async write(data: T[]): Promise<void>{
        await fs.writeFile(this.path, JSON.stringify(data, null, 2))
    }

}