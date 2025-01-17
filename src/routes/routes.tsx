import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import KeuanganPage from "@/pages/KeuanganPage";
import Krs from "@/pages/Krs";
import NilaiPage from "@/pages/NilaiPage";
import ProfilePage from "@/pages/ProfilePage";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "krs", element: <Krs /> }, 
      { path: "keuangan", element: <KeuanganPage /> },
      { path: "nilai", element: <NilaiPage />},
      { path: "profile_page", element: <ProfilePage />},
    ],
  },
]);

export default router;
