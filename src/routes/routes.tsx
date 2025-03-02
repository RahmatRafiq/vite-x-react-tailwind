import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import KeuanganPage from "@/pages/KeuanganPage";
import Jadwal from "@/pages/Jadwal";
import NilaiPage from "@/pages/NilaiPage";
import ProfilePage from "@/pages/ProfilePage";
import Login from "@/components/Login";
import Setting from "@/pages/Setting";
import ProtectedRoute from "@/components/ProtectedRoute";
import KrsPage from "@/pages/KrsPage";
import MenuNotAvailable from "@/pages/MenuNotAvailble";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "Jadwal", element: <Jadwal /> },
          { path: "keuangan", element: <KeuanganPage /> },
          { path: "nilai", element: <NilaiPage /> },
          { path: "profile_page", element: <ProfilePage /> },
          { path: "mahasiswa", element: <ProfilePage /> },
          { path: "users/:id", element: <Setting /> },
          { path: "krs", element: <KrsPage /> },
          { path: "stats", element: <MenuNotAvailable name="Statistik" /> },
          { path: "social", element: <MenuNotAvailable name="Social Media" /> },
        ],
      },
    ],
  },
]);

export default router;
