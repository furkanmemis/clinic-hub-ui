import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      console.log("login response ->", response);

      setUser({ email, password });
      setIsAuth(true);
    } catch (error) {
      console.log("Login error -> ", error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const value = { user, login, logout, isAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
