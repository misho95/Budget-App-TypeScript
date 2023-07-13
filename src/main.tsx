import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Container from './components/container'
import Header from './components/header'
import HomePage from './pages/homepage'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <Container>
      <Header />
      <HomePage />
    </Container>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
