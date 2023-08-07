import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from './context/AuthProvider.jsx'
 import {RouterProvider, createBrowserRouter}from 'react-router-dom';

import Login from"./components/Login.jsx";
import Register from "./components/Register.jsx";
import Admin from './pages/admin.jsx'
const routes = createBrowserRouter([
  {
    path: "/",
  element:<App/>,
    children: [
      {
        index: true,
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path:"/admin",
        element:<Admin/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
    <RouterProvider router={routes}/>
 
 
   
  
  
    </AuthProvider>
    
  </React.StrictMode>,
)
