import { useState } from "react";
import { registerUser } from "../api/client";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // podés reutilizar estilos

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Usuario creado correctamente");

      navigate("/login"); // después de registrarse → login
    } catch (error) {
      console.error("Error register:", error);
      alert("Error al registrarse");
    }
  };

  return (
    <div className="login-container">
      <h2>Registro de usuarios</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;