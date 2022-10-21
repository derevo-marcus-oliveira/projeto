import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './index.css'
import Header from './routers/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
