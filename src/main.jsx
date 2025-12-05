import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as R, Routes, Route } from 'react-router-dom'

import './assets/css/style.css'
import './assets/css/responsive.css'

import EcommerceLayout from './Layouts/EcommerceLayout'
import DashboardLayout from './Layouts/DashboardLayout'

import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <R>
      <Routes>

        {/* Ecommerce Routes */}
        <Route element={<EcommerceLayout />}>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>

      </Routes>
    </R>
  </StrictMode>
)
