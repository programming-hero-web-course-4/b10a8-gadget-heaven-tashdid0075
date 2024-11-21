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
import StoreLocations from './components/StoreLocations/StoreLocations.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/Error Page/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path: "store-locations",
        element:<StoreLocations></StoreLocations>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
