import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as R, Routes, Route } from 'react-router-dom'

import './assets/css/style.css'
import './assets/css/responsive.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <R>
          <Header/>

        <Routes>
          <Route path="/admin" element={<Dashboard />}/>
        </Routes>
        
        <Routes>
          <Route path="/register" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    </R>
  </StrictMode>,
  
)
