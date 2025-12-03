import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Header from './Components/Header'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Header/>
    {/* <Signup /> */}
    <Login />
  </StrictMode>,
  
)
