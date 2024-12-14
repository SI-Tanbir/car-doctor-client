import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Home";
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
    path:'/login',
    element:<Login></Login>
  }
  ]
   
  },
]);

export default router;