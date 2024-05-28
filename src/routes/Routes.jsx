import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import DashBoard from "../pages/Dashboard/DashBoard";
import AddProduct from "../pages/Dashboard/AddProduct";
import EditProduct from "../pages/Dashboard/EditProduct";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phones/${params.id}`),
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/editProduct/:id",
        element:<PrivateRoute><EditProduct></EditProduct></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phones/${params.id}`),
      }
    ],
  },
]);

export default router;
