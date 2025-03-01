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

const MenuSection = () => {
  return (
    <ul className="menu bg-base-200 rounded-box p-4 grid grid-cols-3 gap-4 mt-6">
      {menuItems.map((item, index) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className="tooltip flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
            data-tip={item.tooltip}
          >
            <svg width="0" height="0">
              <defs>
                <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={item.colors[0]} />
                  <stop offset="100%" stopColor={item.colors[1]} />
                </linearGradient>
              </defs>
            </svg>
            <item.icon className="text-3xl" style={{ fill: `url(#grad${index})` }} />
            <span className="text-sm mt-2">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuSection;