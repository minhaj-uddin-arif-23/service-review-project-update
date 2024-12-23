import { createBrowserRouter } from "react-router-dom";
import Layout from "../root_layout/Layout";
import Authentication from "../root_layout/Authentication";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import Service from "../pages/Service";
import DetailsService from "../pages/DetailsService";
import AddReview from "../pages/AddReview";
import MyServices from "../pages/MyServices";
import UpdateReview from "../pages/UpdateReview";
// import MyReviewPage from "../Components/MyReviewPage";



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
        path:'service',
        element:<Service />,
        loader:() => fetch(`${import.meta.env.VITE_API_URL}/serviceCount`)
      },
      {
        path:'addService',
        element:<AddService />
      },
      {
        path:'myReview',
        element:<MyReviews />
      },
      {
        path:'myService',
        element:<MyServices />
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
    path:'/details/:id',
    element:<DetailsService />,
    loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`)
  },
  {
    path:'*',
    element:<Error />
  },
  {
    path:'/review',
    element:<AddReview />
  },
  {
    path:'/update/:id',
    element:<UpdateReview />
  },

])