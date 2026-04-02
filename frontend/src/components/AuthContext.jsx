import { createContext, useContext, useState } from "react";
import { loginUser } from "../api/client"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(() => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  if (token && email) {
    return { email };
  }

  return null;
});

  const login = async (email, password) => {
    const data = await loginUser({ email, password });

    // guardar token
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", email);
    
    setUser({email});
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);