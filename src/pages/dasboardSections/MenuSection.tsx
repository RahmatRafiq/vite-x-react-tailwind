import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Jadwal",
    tooltip: "Jadwal",
    path: "/Jadwal",
    gradientId: "grad1",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9L12 2L21 9V22H3V9Z" stroke="url(#grad1)" />
      </svg>
    ),
    colors: ["#4F46E5", "#22D3EE"], // Biru ke Cyan
  },
  {
    id: 2,
    name: "Buat Krs",
    tooltip: "Buat Krs",
    path: "/krs",
    gradientId: "grad2",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke="url(#grad2)" />
      </svg>
    ),
    colors: ["#EC4899", "#F43F5E"], // Pink ke Merah
  },
  {
    id: 3,
    name: "Stats",
    tooltip: "Stats",
    path: "/stats",
    gradientId: "grad3",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18V14M9 18V10M14 18V6M19 18V12" stroke="url(#grad3)" />
      </svg>
    ),
    colors: ["#9333EA", "#D946EF"], // Ungu ke Pink
  },
  {
    id: 4,
    name: "Setting",
    tooltip: "Settings",
    path: "/users/:id",
    gradientId: "grad4",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" stroke="url(#grad4)" />
        <path d="M19.4 15a7 7 0 0 1-2 2.6m-10.8 0a7 7 0 0 1-2-2.6m14.8-6a7 7 0 0 1 2 2.6M4.6 9a7 7 0 0 1 2-2.6m10.8 0a7 7 0 0 1 2 2.6M7 5.6A7 7 0 0 1 12 5a7 7 0 0 1 5 1.6M5 12a7 7 0 0 1 1.6-5m10.8 0A7 7 0 0 1 19 12a7 7 0 0 1-1.6 5M12 19a7 7 0 0 1-5-1.6" stroke="url(#grad4)" />
      </svg>
    ),
    colors: ["#10B981", "#22C55E"], // Hijau ke Emerald
  },
  {
    id: 5,
    name: "Profile",
    tooltip: "Profile",
    path: "/mahasiswa",
    gradientId: "grad5",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" stroke="url(#grad5)" />
        <path d="M4 20v-1a8 8 0 0 1 16 0v1" stroke="url(#grad5)" />
      </svg>
    ),
    colors: ["#F59E0B", "#FACC15"], // Kuning ke Emas
  },
  {
    id: 6,
    name: "Social Media",
    tooltip: "Social Media",
    path: "/social",
    gradientId: "grad6",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zM16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM18.5 5.5v.01" stroke="url(#grad6)" />
      </svg>
    ),
    colors: ["#3B82F6", "#60A5FA"], // Biru Instagram
  },
];

const MenuSection = () => {
  return (
    <div>
      {/* Gradients */}
      <svg width="0" height="0">
        <defs>
          {menuItems.map((item) => (
            <linearGradient key={item.gradientId} id={item.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={item.colors[0]} />
              <stop offset="100%" stopColor={item.colors[1]} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {/* Menu */}
      <ul className="menu bg-base-200 rounded-box p-4 grid grid-cols-3 gap-4 mt-6">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className="tooltip flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
              data-tip={item.tooltip}
            >
              <div className="w-10 h-10">{item.svg}</div>
              <span className="text-sm mt-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
