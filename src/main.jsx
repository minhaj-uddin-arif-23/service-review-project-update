import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers/Router'
import AuthProvider from './Shared_Context/AuthProvider'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider >
  <RouterProvider router={Router} />
  <Toaster />
   </AuthProvider>
   
  </StrictMode>,
)
