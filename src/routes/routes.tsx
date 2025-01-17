import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import Keuangan from "@/pages/Keuangan";
import Krs from "@/pages/Krs";
import Nilai from "@/pages/Nilai";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "krs", element: <Krs /> }, 
      { path: "keuangan", element: <Keuangan /> },
      { path: "nilai", element: <Nilai />},
    ],
  },
]);

export default router;
