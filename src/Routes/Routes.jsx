import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Home";

import Signup from "../pages/Signup";
import Login from "../pages/Login";

let router = createBrowserRouter([
  {
    path: "/",
    element:<Layouts></Layouts>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/login',
    element:<Login></Login>
  }
  ]
   
  },
]);

export default router;