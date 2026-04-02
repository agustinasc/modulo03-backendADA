import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

const Login = () => {
  const { login } = useAuth();
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

  console.log("FORM:", form);

  try {
    await login(form.email, form.password);
    console.log("LOGIN OK");
    navigate("/");
  } catch (error) {
    console.error("ERROR COMPLETO:", error);
    alert("Credenciales incorrectas");
  }
};

  return (
   <div className="login-container">
    <h2>Login</h2>

    <form onSubmit={handleSubmit} className="form">
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

      <button type="submit">Ingresar</button>
    </form>
    <p>
      ¿No tenés cuenta? 
      <button onClick={navigate("/register")}>
        Registrate
      </button>
    </p>
  </div>
  );
}

export default Login;