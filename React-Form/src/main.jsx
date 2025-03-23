import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdmissionForm from './App.jsx'
import Toastr from './ToastContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toastr />
    <AdmissionForm />
  </StrictMode>,
)
