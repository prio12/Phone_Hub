import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

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
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      }
    ],
  },
]);

export default router;
