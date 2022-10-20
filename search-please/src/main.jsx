import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './index.css'
import Catalogo from './routers/catalogo';
import Contato from './routers/contato';
import Header from './routers/header';
import Sobre from './routers/sobre';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "sobre",
        element: <Sobre/>,
      },
      {
        path: "catalogo",
        element: <Catalogo/>,
      },
      {
        path: "contato",
        element: <Contato/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
