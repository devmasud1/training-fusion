import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);

export default Routes;
