const API_URL = import.meta.env.VITE_API_URL;

console.log("API:", API_URL)

export const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`)
    console.log("API:", API_URL)
    return res.json()
}

export const createProduct = async(data) =>{
    const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    })
    if (!response.ok){
        throw new Error("Error en el login");
    }
    const data = await response.json()
    return data
}

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error en el registro");
  }

  return data;
};
