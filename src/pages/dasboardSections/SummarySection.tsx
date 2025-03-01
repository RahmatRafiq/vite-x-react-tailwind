// components/SummarySection.tsx

import { getProfilMahasiswa } from "@/services/Profile";
import { Mahasiswa } from "@/types/profile";
import React, { useState, useEffect } from "react";
import { FaBook, FaClipboardList } from "react-icons/fa";

// Helper: Konversi HEX ke RGBA dengan alpha tertentu
const hexToRGBA = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SummarySection = () => {
  const [profile, setProfile] = useState<Mahasiswa | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfilMahasiswa();
      if (response && response.status === "success") {
        setProfile(response.data[0][0]);
      }
    };

    fetchProfile();
  }, []);

  // Menambahkan properti colors untuk masing-masing statistik
  const statistics = [
    {
      id: 1,
      label: "SKS Tahun ini",
      value: profile?.total_sks_tahun_ini || 0,
      icon: <FaClipboardList className="h-6 w-6 sm:h-8 sm:w-8" />,
      desc: profile?.tahun_terbaru || "Tahun 20241",
      colors: ["#4F46E5", "#22D3EE"],
    },
    {
      id: 2,
      label: "Mata Kuliah",
      value: profile?.jumlah_matakuliah_sekarang || 0,
      icon: <FaBook className="h-6 w-6 sm:h-8 sm:w-8" />,
      desc: profile?.tahun_terbaru || "Tahun 20241",
      colors: ["#EC4899", "#F43F5E"],
    },
    {
      id: 3,
      label: "Total SKS",
      value: profile?.total_sks_lulus || 0,
      icon: <FaBook className="h-6 w-6 sm:h-8 sm:w-8" />,
      desc: profile?.tahun_terbaru || "Tahun 20241",
      colors: ["#9333EA", "#D946EF"],
    },
  ];

  return (
    <div className="bg-base-200 rounded-lg p-4 sm:p-6 shadow-md my-6">
      <div className="flex flex-row justify-between items-center gap-4 sm:gap-6">
        {statistics.map((stat, index) => {
          // Buat background gradien dengan opasitas rendah
          const backgroundGradient = `linear-gradient(45deg, ${hexToRGBA(stat.colors[0], 0.2)}, ${hexToRGBA(stat.colors[1], 0.2)})`;
          return (
            <div
              key={stat.id}
              className="stat flex flex-col items-center text-center flex-1 min-w-0"
            >
              <div className="stat-figure flex-shrink-0 relative">
                {/* Definisi gradien untuk ikon */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id={`grad-stat-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={stat.colors[0]} />
                      <stop offset="100%" stopColor={stat.colors[1]} />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  className="w-12 h-12 flex items-center justify-center shadow-lg rounded-full transition-transform duration-300 hover:scale-110"
                  style={{ background: backgroundGradient }}
                >
                  {React.cloneElement(stat.icon, {
                    style: { fill: `url(#grad-stat-${index})` },
                  })}
                </div>
              </div>
              <div className="stat-title text-sm sm:text-base font-semibold truncate">
                {stat.label}
              </div>
              <div className="stat-value text-lg sm:text-2xl font-bold">
                {stat.value}
              </div>
              <div className="stat-desc text-xs sm:text-sm text-gray-500 break-words">
                {stat.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummarySection;
