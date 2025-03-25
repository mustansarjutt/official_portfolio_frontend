import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home, About, Contact, Services, Blogs } from "./components"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='services' element={<Services />} />
      <Route path='blogs' element={<Blogs />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)