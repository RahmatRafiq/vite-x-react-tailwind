
import React, { useState } from 'react';
import NilaiSection from './NilaiSection';

const SummaryKrsSection = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const years = ['20211', '20212', '20221', '20222'];

    const nilaiDummy: { [key: string]: { nama: string; kode: string; sks: number; tugas: { nomor: number; nama: string; detail: string }[]; absen: string }[] } = {
        '20211': [
            {
                nama: 'Matematika Dasar',
                kode: 'MK001',
                sks: 3,
                tugas: [
                    { nomor: 1, nama: 'Tugas 1', detail: 'Nilai: 85' },
                    { nomor: 2, nama: 'Tugas 2', detail: 'Nilai: 90' },
                    { nomor: 3, nama: 'Tugas 3', detail: 'Nilai: 85' },
                    { nomor: 4, nama: 'Tugas 4', detail: 'Nilai: 90' },
                    { nomor: 5, nama: 'Tugas 5', detail: 'Nilai: 85' },
                    { nomor: 6, nama: 'Tugas 6', detail: 'Nilai: 90' },
                ],
                absen: '95%',
            },
            {
                nama: 'Fisika Umum',
                kode: 'MK002',
                sks: 4,
                tugas: [
                    { nomor: 1, nama: 'Tugas 1', detail: 'Nilai: 85' },
                    { nomor: 2, nama: 'Tugas 2', detail: 'Nilai: 90' },
                    { nomor: 3, nama: 'Tugas 3', detail: 'Nilai: 85' },
                    { nomor: 4, nama: 'Tugas 4', detail: 'Nilai: 90' },
                    { nomor: 5, nama: 'Tugas 5', detail: 'Nilai: 85' },
                    { nomor: 6, nama: 'Tugas 6', detail: 'Nilai: 90' },
                    { nomor: 7, nama: 'Tugas 7', detail: 'Nilai: 85' },
                    { nomor: 8, nama: 'Tugas 8', detail: 'Nilai: 90' },
                    { nomor: 9, nama: 'Tugas 9', detail: 'Nilai: 85' },
                    { nomor: 10, nama: 'Tugas 10', detail: 'Nilai: 90' },
                ],
                absen: '88%',
            },
        ],
        '20212': [
            {
                nama: 'Pemrograman Dasar',
                kode: 'MK003',
                sks: 3,
                tugas: [
                    { nomor: 1, nama: 'Tugas 1', detail: 'Nilai: 88' },
                    { nomor: 2, nama: 'Tugas 2', detail: 'Nilai: 91' },
                ],
                absen: '92%',
            },
        ],
    };

    const nilai = selectedYear ? nilaiDummy[selectedYear] || [] : [];

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleYearSelect = (year: string) => {
        setSelectedYear(year);
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <div className="dropdown w-full max-w-full bg-base-200">
                <button
                    onClick={toggleDropdown}
                    className="btn btn-primary w-full max-w-full text-left bordered"
                >
                    <span className="font-semibold">Pilih Tahun KRS</span>
                </button>
                {isDropdownOpen && (
                    <ul className="menu menu-sm dropdown-content bg-base-300 z-[1] w-full shadow-lg rounded-lg">
                        {years.map((year) => (
                            <li key={year}>
                                <button
                                    onClick={() => handleYearSelect(year)}
                                    className="btn btn-bordered w-full text-left mt-3"
                                >
                                    {year}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {selectedYear && (
                nilai.length > 0 ? (
                    <NilaiSection nilai={nilai} />
                ) : (
                    <p className="text-center mt-4">Belum ada nilai untuk tahun ajaran ini.</p>
                )
            )}
        </div>
    );
};

export default SummaryKrsSection;
