import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Signup from './Components/Signup'
import Login from './Components/Login'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <Signup /> */}
    <Login />
  </StrictMode>,
  
)
