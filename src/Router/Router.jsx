
import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from '../Layout/Home';
import Root from '../Layout/Root';
import OurManue from '../Layout/OurManue';
import OurShop from '../Layout/OurShop';
import Login from '../Components/Authentications/Login';
import Regsistration from '../Components/Authentications/Regsistration';
import Private from '../PrivateRoute/Private';
import DashBoard from '../Layout/DashBoard';
import Cart from '../Dashboard_Outlets/Cart';
import Users from '../Dashboard_Outlets/Users';
import AddItems from '../Dashboard_Outlets/AddItems';
import AdminRoute from './AdminRoute';
import ManageItems from '../Dashboard_Outlets/ManageItems';
import Payment from '../Pyment/Payment';
import PaymentHistory from '../Dashboard_Outlets/PaymentHistory';


    
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
             path:"/",
             element:<Home></Home>
        },
        {
          path:"/menue",
          element:<OurManue></OurManue>
        },
        {
          path:"/shop",
          element:<OurShop></OurShop>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"reg",
          element:<Regsistration></Regsistration>
        },
       
      ]
    },
    {
      
        path:"/dashboard",
        element:<Private><DashBoard></DashBoard></Private>,
        children:[
          {
             path:"cart",
             element:<Cart></Cart>
          },
          {
            path:"payment-history",
            element:<PaymentHistory></PaymentHistory>
          },
          {
            path:"payment",
            element:<Payment></Payment>
          },
          {
            path:"users",
            element:<Users></Users>
          },
          {
            path:"additems",
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
          },
          {
            path:"manage items",
            element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
          }
        ]
    
    }
  ]);
    



export default router;