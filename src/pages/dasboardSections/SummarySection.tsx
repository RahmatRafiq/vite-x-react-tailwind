// components/SummarySection.tsx

import { getProfilMahasiswa } from "@/services/Profile";
import { Mahasiswa } from "@/types/profile";
import React, { useState, useEffect } from "react";
import { FaBook, FaClipboardList } from "react-icons/fa";


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

    const statistics = [
        {
            id: 1,
            label: "SKS Tahun ini",
            value: profile?.total_sks_tahun_ini || 0,
            icon: <FaClipboardList className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />,
            desc: profile?.tahun_terbaru || "Tahun 20241",
        },
        {
            id: 2,
            label: "Mata Kuliah",
            value: profile?.jumlah_matakuliah_sekarang || 0,
            icon: <FaBook className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />,
            desc: profile?.tahun_terbaru || "Tahun 20241",
        },
        {
            id: 3,
            label: "Total SKS",
            value: profile?.total_sks_lulus || 0,
            icon: <FaBook className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />,
            desc: profile?.tahun_terbaru || "Tahun 20241",
        },
    ];

    return (
        <div className="bg-base-200 rounded-lg p-4 sm:p-6 shadow-md my-6">
            <div className="flex flex-row justify-between items-center gap-4 sm:gap-6">
                {statistics.map((stat) => (
                    <div
                        key={stat.id}
                        className="stat flex flex-col items-center text-center flex-1 min-w-0"
                    >
                        <div className="stat-figure flex-shrink-0">{stat.icon}</div>
                        <div className="stat-title text-sm sm:text-base font-semibold truncate">
                            {stat.label}
                        </div>
                        <div className="stat-value text-lg sm:text-2xl font-bold">{stat.value}</div>
                        <div className="stat-desc text-xs sm:text-sm text-gray-500 break-words">
                            {stat.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummarySection;
