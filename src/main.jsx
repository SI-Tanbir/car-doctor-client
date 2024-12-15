
import { createRoot } from "react-dom/client";

import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider.jsx";



createRoot(document.getElementById("root")).render(

  <div className="max-w-screen-xl m-auto"> 

<AuthProvider>

    <RouterProvider router={router} />
</AuthProvider>
  </div>

);
