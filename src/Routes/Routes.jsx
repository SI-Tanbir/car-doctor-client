import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Home";

let router = createBrowserRouter([
  {
    path: "/",
    element:<Layouts></Layouts>,
    children:[{
        path:'/',
        element:<Home></Home>
    }]
   
  },
]);

export default router;