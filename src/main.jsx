import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Buy from './Pages/Buy.jsx'
import Seles from './Pages/Sales.jsx'
import Games from './Pages/Games.jsx'
import Accessory from './Pages/Accessory.jsx'

const router = createBrowserRouter([
 {
  path:"/",
  element:<Home/>
 },
 {
  path:"/seles",
  element:<Seles/>
 },
 {
path:"/Games",
element:<Games/>
 },
 {
path:"/Accessory",
element:<Accessory/>
 }
 ,
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
