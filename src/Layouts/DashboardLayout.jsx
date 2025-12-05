// DashboardLayout.jsx
import '../assets/dashboard/dashboard.css'
import Header from "../Dashboard/Header"
import Sidebar from "../Dashboard/Sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-wrapper">
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
