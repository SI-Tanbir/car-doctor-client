
import { createRoot } from "react-dom/client";

import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";

console.log("API Key:", import.meta.env.VITE_API_KEY);
console.log("App ID:", import.meta.env.VITE_APPID);

createRoot(document.getElementById("root")).render(

  <div className="max-w-screen-xl m-auto"> 

    <RouterProvider router={router} />
  </div>

);
