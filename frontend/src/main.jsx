import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Home from './Home.jsx';
import ErrorPage from './ErrorPage.jsx';

import SignUp from './component/LogInPopUp/SignUp.jsx';
import LogIn from './component/LogInPopUp/LogIn.jsx';
import FoodItem from './component/FoodItem/FoodItem.jsx';
import about from './component/About/about.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element:<LogIn/>
      },
      {
        path :"/signup",
        element:<SignUp/>
      },
      {
        path:"/contact",
        element:<about/>
      }
    ],
  },
]);

const root = createRoot(document.querySelector('#root'))

root.render(
      
      <RouterProvider router={router} />
     
);
