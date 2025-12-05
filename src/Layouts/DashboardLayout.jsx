// DashboardLayout.jsx
import Header from "../Components/Dashboard/Header"
import Sidebar from "../Components/Dashboard/Sidebar"
import '../assets/css/dashboard.css'
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    
    <div className="dashboard-app">
      <Header />
      <Sidebar />
      <Outlet />

    </div>
  );
}
