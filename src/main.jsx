import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './styles/index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
// import SingUp from './Pages/SingUp.jsx'
import Buy from './Pages/Buy.jsx'

const router = createBrowserRouter([
 {
  path:"/",
  element:<Home/>
 },
//  {
//   path:"/sing up",
//   element:<SingUp/>
//  },
 {
  path:"items/:itemsId",
  element:<Buy/>
 } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
