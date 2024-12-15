import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Home";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";

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
  },
  {
    path:'/checkout/:id',
    element:<Checkout></Checkout>,
    loader: ({params})=> fetch(`http://localhost:3000/service/${params.id}`)

    
  }
  ]
   
  },
]);

export default router;