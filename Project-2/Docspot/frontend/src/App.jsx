import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import ApplyDoctor from "./pages/ApplyDoctor";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        } />


        <Route path="/apply-doctor" element={
          <ProtectedRoute role="user">
            <ApplyDoctor />
          </ProtectedRoute>
        } />

        <Route path="/doctor" element={
          <ProtectedRoute role="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute role="user">
            <Appointments />
          </ProtectedRoute>
        } />


      </Routes>
    </BrowserRouter>
  )
}
export default App;
