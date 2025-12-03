import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Signup from './Components/Signup'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Signup />
  </StrictMode>,
  
)
