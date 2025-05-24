import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/primereact.min.css' //deprecated 
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
