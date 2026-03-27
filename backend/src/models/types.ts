export interface Producto {
    id: number;
    name: string;
    price:number
}

export interface User {
    id: number;
    email: string;
    password: string
}
export interface Order {
    id: number;
    items: {
        itemId: number;
        quantity: number;
    }[];
    total: number;
    paid: boolean;
    status: "pending" | "completed" | "cancelled";
    createdAt: Date;
}