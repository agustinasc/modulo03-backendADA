# 🧁 Backend - Proyecto de Cafeteria

API REST desarrollada con Node.js y Express para gestionar usuarios, productos y pedidos. Incluye autenticación con JWT y persistencia de datos en archivos JSON.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* JSON Web Token (JWT)
* bcrypt
* dotenv
* fs/promises

---

## 📁 Estructura del proyecto

```
backend/
│
├── src/
│   ├── controllers/     # Lógica de cada endpoint
│   ├── services/        # Lógica de negocio
│   ├── routes/          # Definición de rutas
│   ├── middleware/      # Middlewares (auth, error, validate)
│   ├── utils/           # Funciones auxiliares (fileHandler)
│   ├── data/            # Archivos JSON (DB simulada)
│   ├── config/          # Configuración (env)
│   └── server.js        # Punto de entrada
│
├── package.json
└── .env
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/agustinasc/modulo03-backendADA.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env`:

```env
PORT=3000
JWT_SECRET=mi_clave_secreta
```

4. Ejecutar el servidor:

```bash
npm run dev
```

---

## 🔐 Autenticación

La API utiliza JWT para proteger rutas.

### Registro

```http
POST /users/register
```

Body:

```json
{
  "email": "test@email.com",
  "password": "123456"
}
```

---

### Login

```http
POST /users/login
```

Respuesta:

```json
{
  "message": "Login exitoso",
  "token": "..."
}
```

---

## 📦 Endpoints principales

### 🧑 Usuarios

* `POST /users/register`
* `POST /users/login`

---

### 🛍️ Productos

* `GET /items` → Obtener productos
* `POST /items` → Crear producto 🔒
* `PUT /items/:id` → Actualizar producto 🔒
* `DELETE /items/:id` → Eliminar producto 🔒

---

## 🧠 Arquitectura

El proyecto sigue una arquitectura por capas:

* **Routes** → definen endpoints
* **Controllers** → manejan request/response
* **Services** → lógica de negocio
* **Utils** → manejo de archivos JSON

---

## 📌 Notas

* Los datos se almacenan en archivos JSON (no se utiliza base de datos).
* Se utiliza bcrypt para el hash de contraseñas.
* Se implementa autenticación mediante JWT (JSON Web Tokens).
* Se aplican middlewares para validación de tokens y manejo de errores.

## ⚠️ Consideraciones sobre persistencia de datos

En el entorno de producción (Render), los datos no se persisten en archivos `.json`.

Esto se debe a que el sistema de archivos es temporal (ephemeral), por lo que cualquier cambio realizado (POST, PUT, DELETE) se pierde al reiniciar el servicio.

Por este motivo:

* Los datos pueden visualizarse correctamente mediante los endpoints.
* Sin embargo, los cambios no se guardan de forma permanente en producción.

Para pruebas con persistencia real, se recomienda ejecutar el proyecto en entorno local o utilizar una base de datos como MongoDB.


---

## 👩‍💻 Autor

AgustinaSC
