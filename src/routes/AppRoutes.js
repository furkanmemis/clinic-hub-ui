import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import ProtectedRoute from "../components/ProtectedRoute";
import Menu from "../pages/Menu";
import User from "../pages/User";
import Hospital from "../pages/Hospital";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
      <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
      <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
      <Route path="/hospital" element={<ProtectedRoute><Hospital /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;