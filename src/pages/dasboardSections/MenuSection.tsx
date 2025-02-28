import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaChartBar, FaCog, FaUserCircle, FaInstagram } from "react-icons/fa";

const MenuSection = () => {
  const menuItems = [
    { id: 1, name: "Jadwal", icon: <FaHome />, tooltip: "Jadwal", path: "/Jadwal" },
    { id: 2, name: "Buat Krs", icon: <FaInfoCircle />, tooltip: "Buat Krs", path: "/krs" },
    { id: 3, name: "Stats", icon: <FaChartBar />, tooltip: "Stats", path: "/stats" },
    { id: 4, name: "Settings", icon: <FaCog />, tooltip: "Settings", path: "/settings" },
    { id: 5, name: "Profile", icon: <FaUserCircle />, tooltip: "Profile", path: "/mahasiswa" },
    { id: 6, name: "Social Media", icon: <FaInstagram />, tooltip: "Social Media", path: "/social" },
  ];

  return (
    <ul className="menu bg-base-200 rounded-box p-4 grid grid-cols-3 gap-4 mt-6">
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className="tooltip flex flex-col items-center justify-center"
            data-tip={item.tooltip}
          >
            <div className="text-3xl">{item.icon}</div>
            <span className="text-sm mt-2">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuSection;
