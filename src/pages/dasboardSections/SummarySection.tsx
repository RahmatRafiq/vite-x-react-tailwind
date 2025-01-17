import React from 'react';
import { FaBook, FaClipboardList } from 'react-icons/fa';

const SummarySection = () => {
    const statistics = [
        {
            id: 1,
            label: 'KRS Anda',
            value: 24,
            icon: <FaClipboardList className="h-8 w-8 text-accent" />,  // Menggunakan text-accent
            desc: 'Tahun 20241',
        },
        {
            id: 2,
            label: 'Mata Kuliah',
            value: 6,
            icon: <FaBook className="h-8 w-8 text-accent" />,  // Menggunakan text-accent
            desc: 'Tahun 20241',
        },
        {
            id: 3,
            label: 'Total SKS',
            value: 18,
            icon: <FaBook className="h-8 w-8 text-accent" />,  // Menggunakan text-accent
            desc: 'Tahun 20241',
        },
    ];

    return (
        <div className="bg-base-200 rounded-lg p-6 shadow-md my-6">
            <div className="flex flex-col xsm:flex-row justify-between gap-6">
                {statistics.map((stat) => (
                    <div key={stat.id} className="stat flex flex-col items-start">
                        <div className="stat-figure flex-shrink-0">{stat.icon}</div>
                        <div className="stat-title text-base font-semibold truncate">{stat.label}</div>
                        <div className="stat-value text-2xl font-bold">{stat.value}</div>
                        <div className="stat-desc text-sm text-gray-500 break-words">{stat.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummarySection;
