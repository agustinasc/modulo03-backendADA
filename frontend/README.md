# FRONTEND EN REACT, PARA PROYECTO ADA DEL MODULO 3

Aplicación frontend desarrollada en React para la gestión y visualización de productos de una cafetería. 
Permite a los usuarios editar, agregar y eliminar productos.

---

## 🚀 Tecnologías utilizadas

* React
* React Router DOM
* CSS
* Vite 

---

## 📂 Estructura del proyecto

```
src/
│── components/       # Componentes reutilizables
│── pages/            # Vistas principales (Products.)
│── routes/           # Configuración de rutas
│── styles/           # CSS de los componentes
│── App.jsx
│── main.jsx
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPO>
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto:

```bash
npm run dev
```

4. Abrir en el navegador:

```
http://localhost:5173
```

---

## 🔗 Conexión con el backend

Este frontend consume una API desarrollada con Node.js + Express.

Configurar la URL base en el archivo correspondiente (ejemplo en `services/api.js`):

---

## 📌 Funcionalidades principales

* 📦 Listado de productos
* ➕ Agregar productos (formulario)
* ➕ Modificar productos (formulario)
* ➕ Eliminar productos
* 🔐 Manejo básico de roles (según backend)

---


## ⚠️ Problemas comunes

### ❌ Error: `onSave is not a function`

Asegurarse de pasar correctamente la función como prop al componente:

```jsx
<ProductAddForm onSave={handleSave} />
```

---


## 👩‍💻 Autor

AgustinaSC

---
