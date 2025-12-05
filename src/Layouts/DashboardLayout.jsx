// DashboardLayout.jsx
import Header from "../Components/Dashboard/Header"
import Sidebar from "../Components/Dashboard/Sidebar"
import '../assets/css/dashboard.css'

export default function DashboardLayout() {
  return (
    
    <div className="dashboard-app">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
