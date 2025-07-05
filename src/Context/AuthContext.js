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
      const tenantUsers = response.data.tenantUser;

      if (tenantUsers && tenantUsers.length > 0) {
        return tenantUsers;
      } else {
        return [];
      }
    } catch (error) {
      console.log("Login error -> ", error);
    }
  };

  const tenantLogin = async (email, tenantId) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/tenant-login",
        { email, tenantId }
      );

      if (response.status === 200) {
        const { token, email, tenantName, role, name, surname } = response.data.user;
        let user = {email,tenantName,role,name,surname};
        localStorage.setItem("authentication-token", token);
        setUser(user);
        setIsAuth(true);
        window.history.pushState({}, "", "/menu");
        window.dispatchEvent(new Event("popstate"));
      }
    } catch (error) {
      console.log("tenant login ->", error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem("authentication-token");
  };

  const value = { user, login, logout, isAuth, tenantLogin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
