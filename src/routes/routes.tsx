import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import Krs from "@/pages/Krs";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "krs", element: <Krs /> }, 
    ],
  },
]);

export default router;
