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
import Protected_Router from "./Protected_Router";
import UpdateService from "../pages/UpdateService";
import Blog from "../Components/Blog";
import MeetOurPartNers from "../Components/MeetOurPartNers";
import Consulting from "../OfferSection/Consulting";
import SoftwareDevelopment from "../OfferSection/SoftwareDevelopment";
import ITsupport from "../OfferSection/ITsupport";
import CloudSolutions from "../OfferSection/CloudSolutions";
import DIgitalMarketing from "../OfferSection/DIgitalMarketing";
import Cybersecurity from "../OfferSection/Cybersecurity";
import Dashboard from "../dashboard/Dashboard";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/serviceCount`),
      },
      {
        path: "/meetOurPartners",
        element: <MeetOurPartNers />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "addService",
        element: (
          <Protected_Router>
            <AddService />
          </Protected_Router>
        ),
      },
      {
        path: "myReview",
        element: (
          <Protected_Router>
            <MyReviews />
          </Protected_Router>
        ),
      },
      {
        path: "myService",
        element: (
          <Protected_Router>
            <MyServices />
          </Protected_Router>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />,
    children: [
      {
        path: "/auth/signIn",
        element: <Login />,
      },
      {
        path: "/auth/signUp",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/details/:id",
    element: (
      <Protected_Router>
        <DetailsService />
      </Protected_Router>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`),
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/review/:id",
    element: <AddReview />,
  },
  {
    path: "/update/:id",
    element: <UpdateReview />,
  },
  // service update
  {
    path: "/updateService/:id",
    element: <UpdateService />,
  },
  {
    path: "/consulting",
    element: <Consulting />,
  },
  {
    path: "/software",
    element: <SoftwareDevelopment />,
  },
  {
    path: "/It",
    element: <ITsupport />,
  },
  {
    path: "/cloud",
    element: <CloudSolutions />,
  },
  {
    path: "/digital",
    element: <DIgitalMarketing />,
  },
  {
    path: "/cybersecurity",
    element: <Cybersecurity />,
  },
]);
