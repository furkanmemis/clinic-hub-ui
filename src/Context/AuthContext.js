import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth,setIsAuth] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuth(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const value = { user, login, logout, isAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};