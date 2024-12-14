
import { createRoot } from "react-dom/client";

import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(

  <div className="max-w-screen-xl m-auto"> 

    <RouterProvider router={router} />
  </div>

);
