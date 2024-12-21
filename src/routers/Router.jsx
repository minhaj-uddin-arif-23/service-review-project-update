import { createBrowserRouter } from "react-router-dom";
import Layout from "../root_layout/Layout";
import Authentication from "../root_layout/Authentication";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";



 export const Router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'addService',
        element:<AddService />
      },
      {
        path:'myReview',
        element:<MyReviews />
      }
    ]
  },
  {
    path:'/auth',
    element:<Authentication />,
    children:[
      {
        path:'/auth/signIn',
        element:<Login />
      },
      {
        path:'/auth/signUp',
        element:<Register />
      }
    ]
  },
  {
    path:'*',
    element:<Error />
  }
])