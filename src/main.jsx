import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Homeowner from './homeOwner/Homeowner.jsx';
import Homeuser from './HomeUser/homeuser.jsx';
import Homeadmin from './homeAdmin/homeadmin.jsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element:
    <>
    {/* <Navbar /> */}
    <App />
    </>
  },
  {
    path: '/Homeowner',
    element:
    <>
    {/* <Navbar /> */}
    <Homeowner />
    </>
  },
  {
    path: '/Homeuser',
    element:
    <>
    <Homeuser />
    </>
  },

  {
    path: '/Homeadmin',
    element:
    <>
    <Homeadmin />
    </>
  },


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
