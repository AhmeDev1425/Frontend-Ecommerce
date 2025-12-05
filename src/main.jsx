import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as R, Routes, Route } from 'react-router-dom'


import EcommerceLayout from './Layouts/EcommerceLayout'
import DashboardLayout from './Layouts/DashboardLayout'

import Signup from './Components/Signup'
import Login from './Components/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <R>
      <Routes>

        {/* Ecommerce Routes */}
        <Route path="/"  element={<EcommerceLayout />}>
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/admin" element={<DashboardLayout />} />

      </Routes>
    </R>
  </StrictMode>
)
