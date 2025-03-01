import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaChartBar, FaCog, FaUserCircle, FaInstagram } from "react-icons/fa";

const menuItems = [
  { id: 1, name: "Jadwal", tooltip: "Jadwal", path: "/Jadwal", colors: ["#4F46E5", "#22D3EE"], icon: FaHome },
  { id: 2, name: "Buat Krs", tooltip: "Buat Krs", path: "/krs", colors: ["#EC4899", "#F43F5E"], icon: FaInfoCircle },
  { id: 3, name: "Stats", tooltip: "Stats", path: "/stats", colors: ["#9333EA", "#D946EF"], icon: FaChartBar },
  { id: 4, name: "Setting", tooltip: "Settings", path: "/users/:id", colors: ["#10B981", "#22C55E"], icon: FaCog },
  { id: 5, name: "Profile", tooltip: "Profile", path: "/mahasiswa", colors: ["#F59E0B", "#FACC15"], icon: FaUserCircle },
  { id: 6, name: "Social Media", tooltip: "Social Media", path: "/social", colors: ["#3B82F6", "#60A5FA"], icon: FaInstagram },
];

// Fungsi untuk mengonversi HEX ke RGBA dengan nilai alpha tertentu
const hexToRGBA = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const MenuSection = () => {
  return (
    <ul className="menu bg-base-200 rounded-box p-4 grid grid-cols-3 gap-4 mt-6">
      {menuItems.map((item, index) => {
        // Membuat background gradien dengan opasitas rendah agar tidak bertabrakan dengan warna ikon
        const backgroundGradient = `linear-gradient(45deg, ${hexToRGBA(item.colors[0], 0.2)}, ${hexToRGBA(item.colors[1], 0.2)})`;
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className="tooltip flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
              data-tip={item.tooltip}
            >
              {/* Definisi gradien untuk ikon */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={item.colors[0]} />
                    <stop offset="100%" stopColor={item.colors[1]} />
                  </linearGradient>
                </defs>
              </svg>
              {/* Container ikon dengan background gradien */}
              <div
                className="w-12 h-12 flex items-center justify-center shadow-lg rounded-full"
                style={{ background: backgroundGradient }}
              >
                <item.icon className="text-3xl" style={{ fill: `url(#grad${index})` }} />
              </div>
              <span className="text-sm mt-2">{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuSection;
