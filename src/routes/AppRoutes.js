import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import ProtectedRoute from "../components/ProtectedRoute";
import Menu from "../pages/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
      <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;