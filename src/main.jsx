import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/css/style.css'
import './assets/css/responsive.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Header from './Components/Header'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/register" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
  
)
