import React, { useState, useEffect, useCallback } from "react";
import { getTahunKhsMahasiswa, getStatusKrs } from "@/services/TahunKhs";
import { StatusKrsResponse, TahunKHS } from "@/types/TahunKhs";
import JadwalKuliahSection from "./jadwalKuliahSection";

const SummaryKrsSection = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [years, setYears] = useState<string[]>([]);
    const [statusKrs, setStatusKrs] = useState<string | null>(null);

    useEffect(() => {
        const fetchYears = async () => {
            try {
                const response = await getTahunKhsMahasiswa();
                if (Array.isArray(response.data) && Array.isArray(response.data[0])) {
                    const tahunList: TahunKHS[] = response?.data[0];
                    setYears(tahunList.map((item) => item.tahunid));
                } else {
                    console.error("Format data tidak sesuai:", response);
                }
            } catch (error) {
                console.error("Gagal mengambil data tahun KHS:", error);
            }
        };

        fetchYears();
    }, []);

    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen((prev) => !prev);
    }, []);

    const handleYearSelect = useCallback((year: string) => {
        setSelectedYear(year);
        setIsDropdownOpen(false);
    }, []);

    const [semester, setSemester] = useState<string | null>(null);

    useEffect(() => {
        if (selectedYear) {
            setSemester(selectedYear.endsWith("1") ? "Ganjil" : "Genap");

            const fetchStatusKrs = async () => {
                

                const response = await getStatusKrs(selectedYear)  as StatusKrsResponse;

                if (response.data && response.data[0]?.[0]?.status_mahasiswa) {
                    setStatusKrs(response.data[0][0].status_mahasiswa);
                } else {
                    setStatusKrs('Status tidak ditemukan');
                }
            };

            fetchStatusKrs();
        }
    }, [selectedYear]);

    const jadwalKuliah: { [key: string]: { hari: string; mataKuliah: string; ruangan: string; jam: string; dosen: string; }[] } = {
        '20211': [
            { hari: 'Senin', mataKuliah: 'Matematika Dasar', ruangan: 'R101', jam: '08:00 - 09:30', dosen: 'Dr. A' },
            { hari: 'Senin', mataKuliah: 'Fisika Umum', ruangan: 'R102', jam: '10:00 - 11:30', dosen: 'Dr. B' },
            { hari: 'Selasa', mataKuliah: 'Kimia Dasar', ruangan: 'R103', jam: '08:00 - 09:30', dosen: 'Dr. C' },
            { hari: 'Selasa', mataKuliah: 'Biologi Umum', ruangan: 'R104', jam: '10:00 - 11:30', dosen: 'Dr. D' },
            { hari: 'Rabu', mataKuliah: 'Pemrograman Dasar', ruangan: 'R105', jam: '08:00 - 09:30', dosen: 'Dr. E' },
            { hari: 'Rabu', mataKuliah: 'Struktur Data', ruangan: 'R106', jam: '10:00 - 11:30', dosen: 'Dr. F' },
            { hari: 'Kamis', mataKuliah: 'Algoritma', ruangan: 'R107', jam: '08:00 - 09:30', dosen: 'Dr. G' },
            { hari: 'Kamis', mataKuliah: 'Basis Data', ruangan: 'R108', jam: '10:00 - 11:30', dosen: 'Dr. H' },
            { hari: 'Jumat', mataKuliah: 'Sistem Operasi', ruangan: 'R109', jam: '08:00 - 09:30', dosen: 'Dr. I' },
            { hari: 'Jumat', mataKuliah: 'Jaringan Komputer', ruangan: 'R110', jam: '10:00 - 11:30', dosen: 'Dr. J' },
        ],
        '20212': [
            { hari: 'Senin', mataKuliah: 'Matematika Dasar', ruangan: 'R101', jam: '08:00 - 09:30', dosen: 'Dr. A' },
            { hari: 'Senin', mataKuliah: 'Fisika Umum', ruangan: 'R102', jam: '10:00 - 11:30', dosen: 'Dr. B' },
            { hari: 'Selasa', mataKuliah: 'Kimia Dasar', ruangan: 'R103', jam: '08:00 - 09:30', dosen: 'Dr. C' },
            { hari: 'Rabu', mataKuliah: 'Pemrograman Dasar', ruangan: 'R105', jam: '08:00 - 09:30', dosen: 'Dr. E' },
            { hari: 'Rabu', mataKuliah: 'Struktur Data', ruangan: 'R106', jam: '10:00 - 11:30', dosen: 'Dr. F' },
            { hari: 'Kamis', mataKuliah: 'Algoritma', ruangan: 'R107', jam: '08:00 - 09:30', dosen: 'Dr. G' },
            { hari: 'Kamis', mataKuliah: 'Basis Data', ruangan: 'R108', jam: '10:00 - 11:30', dosen: 'Dr. H' },
            { hari: 'Jumat', mataKuliah: 'Sistem Operasi', ruangan: 'R109', jam: '08:00 - 09:30', dosen: 'Dr. I' },
            { hari: 'Jumat', mataKuliah: 'Jaringan Komputer', ruangan: 'R110', jam: '10:00 - 11:30', dosen: 'Dr. J' },
        ],
        '20221': [
            { hari: 'Senin', mataKuliah: 'Matematika Dasar', ruangan: 'R101', jam: '08:00 - 09:30', dosen: 'Dr. A' },
            { hari: 'Senin', mataKuliah: 'Fisika Umum', ruangan: 'R102', jam: '10:00 - 11:30', dosen: 'Dr. B' },
            { hari: 'Selasa', mataKuliah: 'Kimia Dasar', ruangan: 'R103', jam: '08:00 - 09:30', dosen: 'Dr. C' },
            { hari: 'Selasa', mataKuliah: 'Biologi Umum', ruangan: 'R104', jam: '10:00 - 11:30', dosen: 'Dr. D' },
            { hari: 'Rabu', mataKuliah: 'Pemrograman Dasar', ruangan: 'R105', jam: '08:00 - 09:30', dosen: 'Dr. E' },
            { hari: 'Rabu', mataKuliah: 'Struktur Data', ruangan: 'R106', jam: '10:00 - 11:30', dosen: 'Dr. F' },
            { hari: 'Kamis', mataKuliah: 'Algoritma', ruangan: 'R107', jam: '08:00 - 09:30', dosen: 'Dr. G' },
            { hari: 'Kamis', mataKuliah: 'Basis Data', ruangan: 'R108', jam: '10:00 - 11:30', dosen: 'Dr. H' },
            { hari: 'Jumat', mataKuliah: 'Sistem Operasi', ruangan: 'R109', jam: '08:00 - 09:30', dosen: 'Dr. I' },
            { hari: 'Jumat', mataKuliah: 'Jaringan Komputer', ruangan: 'R110', jam: '10:00 - 11:30', dosen: 'Dr. J' },
        ],
        '20222': [
            { hari: 'Senin', mataKuliah: 'Matematika Dasar', ruangan: 'R101', jam: '08:00 - 09:30', dosen: 'Dr. A' },
            { hari: 'Senin', mataKuliah: 'Fisika Umum', ruangan: 'R102', jam: '10:00 - 11:30', dosen: 'Dr. B' },
            { hari: 'Selasa', mataKuliah: 'Kimia Dasar', ruangan: 'R103', jam: '08:00 - 09:30', dosen: 'Dr. C' },
            { hari: 'Selasa', mataKuliah: 'Biologi Umum', ruangan: 'R104', jam: '10:00 - 11:30', dosen: 'Dr. D' },
            { hari: 'Rabu', mataKuliah: 'Pemrograman Dasar', ruangan: 'R105', jam: '08:00 - 09:30', dosen: 'Dr. E' },
            { hari: 'Rabu', mataKuliah: 'Struktur Data', ruangan: 'R106', jam: '10:00 - 11:30', dosen: 'Dr. F' },
            { hari: 'Kamis', mataKuliah: 'Algoritma', ruangan: 'R107', jam: '08:00 - 09:30', dosen: 'Dr. G' },
            { hari: 'Kamis', mataKuliah: 'Basis Data', ruangan: 'R108', jam: '10:00 - 11:30', dosen: 'Dr. H' },
            { hari: 'Jumat', mataKuliah: 'Sistem Operasi', ruangan: 'R109', jam: '08:00 - 09:30', dosen: 'Dr. I' },
            { hari: 'Jumat', mataKuliah: 'Jaringan Komputer', ruangan: 'R110', jam: '10:00 - 11:30', dosen: 'Dr. J' },
        ],
    };

    const mataKuliah = selectedYear ? jadwalKuliah[selectedYear] || [] : [];

    return (
        <div className="mt-4 space-y-4">
            <div className="dropdown w-full max-w-full bg-base-200">
                <button
                    onClick={toggleDropdown}
                    className="btn btn-primary w-full max-w-full text-left bordered"
                >
                    <span className="font-semibold">
                        {selectedYear ? `Tahun KHS: ${selectedYear}` : "Pilih Tahun KRS"}
                    </span>
                </button>
                {isDropdownOpen && (
                    <ul className="menu menu-sm dropdown-content bg-base-300 z-[1] w-full shadow-lg rounded-lg">
                        {years.length > 0 ? (
                            years.map((year) => (
                                <li key={year}>
                                    <button
                                        className="btn btn-bordered w-full text-left mt-3"
                                        onClick={() => handleYearSelect(year)}
                                    >
                                        {year}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="p-2 text-gray-500">Tidak ada data</li>
                        )}
                    </ul>
                )}
            </div>

            <div className="mt-4 space-y-4 collapse collapse-arrow bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-semibold">Ringkasan KRS</div>
                <div className="collapse-content">
                    <div className="flex space-x-6">
                        <div>
                            <p>
                                <span className="font-semibold">Tahun KRS:</span> {selectedYear || 'Belum dipilih'}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="font-semibold">Tahun Ajaran Aktif:</span> {selectedYear || 'Belum dipilih'} {semester}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="font-semibold">Status KRS:</span> {statusKrs || 'Belum ada status'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {selectedYear && (
                mataKuliah.length > 0 ? (
                    <JadwalKuliahSection jadwal={mataKuliah} />
                ) : (
                    <p className="text-center mt-4">Belum ada jadwal untuk tahun ajaran ini.</p>
                )
            )}
        </div>
    );
};

export default SummaryKrsSection;
