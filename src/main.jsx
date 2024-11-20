import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"products/:product_id",
        element:<ProductDetail></ProductDetail>,
        loader:()=> fetch('/products.json')
      },
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        loader:()=> fetch('/products.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
