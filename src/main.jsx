import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>

  <QueryClientProvider client={queryClient}>
  <div className='max-w-screen-lg mx-auto'>
       <RouterProvider router={router}></RouterProvider>
     </div>
    </QueryClientProvider>


     </AuthProvider>
  </StrictMode>,
)
