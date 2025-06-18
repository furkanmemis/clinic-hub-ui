import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;