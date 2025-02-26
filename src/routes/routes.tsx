import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import KeuanganPage from "@/pages/KeuanganPage";
import Krs from "@/pages/Krs";
import NilaiPage from "@/pages/NilaiPage";
import ProfilePage from "@/pages/ProfilePage";
import Login from "@/components/Login";
import Setting from "@/pages/Setting";
import ProtectedRoute from "@/components/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/", element: <App />, children: [
          { path: "/", element: <Dashboard /> },
          { path: "krs", element: <Krs /> },
          { path: "keuangan", element: <KeuanganPage /> },
          { path: "nilai", element: <NilaiPage /> },
          { path: "profile_page", element: <ProfilePage /> },
          { path: "/mahasiswa", element: <ProfilePage /> },
          { path: "setting", element: <Setting /> },
        ]
      },
    ],
  },
]);

export default router;
