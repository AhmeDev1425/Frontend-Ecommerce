import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as R, Routes, Route } from 'react-router-dom'


import EcommerceLayout from './Layouts/EcommerceLayout'
import DashboardLayout from './Layouts/DashboardLayout'

import Signup from './Components/Signup'
import Login from './Components/Login'
import Mainboard from './Components/Dashboard/Mainboard'
import Overview from './Components/Dashboard/Boards/Overview'
import Users from './Components/Dashboard/Boards/Users'
import Products from './Components/Dashboard/Boards/Products'
import Categories from './Components/Dashboard/Boards/Categories'
import Brands from './Components/Dashboard/Boards/Brands'
import Orders from './Components/Dashboard/Boards/Orders'


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
        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="mainboard" element={<Mainboard />} >
            <Route index element={<Overview/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="categories" element={<Categories/>}/>
            <Route path="brands" element={<Brands/>}/>
            <Route path="orders" element={<Orders/>}/>
          </Route>
        </Route>


      </Routes>
    </R>
  </StrictMode>
)
// import Products from "./Boards/Proudcts";
//             <Routes>
//                 <Route path="/products" element={<Products/>}>
//                 </Route>
//             </Routes>
