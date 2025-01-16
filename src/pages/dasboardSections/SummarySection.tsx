import React from 'react';
import { FaBook, FaClipboardList } from 'react-icons/fa';

const SummarySection = () => {
    const statistics = [
        { id: 1, label: 'KRS Semester Ini', value: 24, icon: <FaClipboardList /> },
        { id: 2, label: 'Mata Kuliah Diprogram', value: 6, icon: <FaBook /> },
        { id: 3, label: 'Mata Kuliah Diprogram', value: 6, icon: <FaBook /> }
    ];

    return (
        <div className="bg-base-200 rounded-lg p-6 shadow-md my-6 w-full flex justify-between">
            {statistics.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center text-center w-1/3">
                    <div className="text-primary text-3xl mb-2">{stat.icon}</div>
                    <div className="text-sm font-semibold">{stat.label}</div>
                    <div className="text-lg font-bold">{stat.value}</div>
                </div>
            ))}
        </div>
    );
};

export default SummarySection;
