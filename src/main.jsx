import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import GadgetsCategory from './components/Gadgets/GadgetsCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GadgetsDetails from './components/Gadgets/GadgetsDetails';
import BuyingGuide from './components/BuyingGuide/BuyingGuide';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: '/',
            element: <GadgetsCategory></GadgetsCategory>,
            loader: () => fetch('/gadgets.json')
          },
          {
            path: '/gadgets/:category',
            element: <GadgetsCategory></GadgetsCategory>,
            loader: () => fetch('/gadgets.json')
          },
        ]
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/buyingGuide',
        element: <BuyingGuide></BuyingGuide>,
      },
      {
        path: '/details/:GId',
        element: <GadgetsDetails></GadgetsDetails>,
        loader: () => fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
