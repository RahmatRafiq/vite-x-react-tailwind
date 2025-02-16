import React, { useState, useEffect, useCallback } from "react";
import { getTahunKhsMahasiswa, getStatusKrs, getJadwalKuliah } from "@/services/TahunKhs";
import { TahunKHS } from "@/types/TahunKhs";
import JadwalKuliahSection from "./jadwalKuliahSection";

const SummaryKrsSection = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [years, setYears] = useState<string[]>([]);
    const [statusKrs, setStatusKrs] = useState<string | null>(null);
    const [mataKuliah, setMataKuliah] = useState<{ hari: string; mataKuliah: string; ruangan: string; jam: string; dosen: string; }[]>([]);

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
        const fetchStatusKrs = async () => {
            try {
                const response = await getStatusKrs(selectedYear as string);
                if (response.data && response.data[0]?.[0]?.status_mahasiswa) {
                    setStatusKrs(response.data[0][0].status_mahasiswa);
                    const KhsID = response.data[0][0].khs_id;

                    // Panggil fetchMataKuliah setelah mendapatkan KhsID
                    await fetchMataKuliah(KhsID);  // pastikan menunggu selesai
                } else {
                    setStatusKrs('Status tidak ditemukan');
                }
            } catch (error) {
                console.error("Error fetching status KRS:", error);
                setStatusKrs('Gagal mengambil status');
            }
        };

        if (selectedYear) {
            setSemester(selectedYear.endsWith("1") ? "Ganjil" : "Genap");
            fetchStatusKrs();  // Panggil fetchStatusKrs saat selectedYear ada
        }
    }, [selectedYear]);

    const fetchMataKuliah = async (KhsID: string) => {
        try {
            const response = await getJadwalKuliah(KhsID);
            console.log(response);

            const daysMap: Record<number, string> = {
                1: 'Senin',
                2: 'Selasa',
                3: 'Rabu',
                4: 'Kamis',
                5: 'Jumat',
                6: 'Sabtu',
                7: 'Minggu',
            };

            if (response?.data && Array.isArray(response.data[0])) {
                const mataKuliahData = response.data[0].map((item: { jadwal_id: number; mk_nama: string; hari_id: number; nama_kelas: string; jam_mulai: string; jam_selesai: string; ruang_id: string; dsn: string; }) => ({
                    hari: daysMap[item.hari_id] || 'N/A',  
                    mataKuliah: item.mk_nama,
                    ruangan: item.ruang_id,
                    jam: `${item.jam_mulai} - ${item.jam_selesai}`,
                    dosen: item.dsn,
                }));
                setMataKuliah(mataKuliahData);
            } else {
                console.error("Mata kuliah tidak ditemukan");
            }
        } catch (error) {
            console.error("Error fetching mata kuliah:", error);
        }
    };

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

            {mataKuliah.length > 0 && (
                <div className="mt-6">
                    {mataKuliah.map((kuliah, index) => (
                        <JadwalKuliahSection
                            key={index}
                            jadwal={[kuliah]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SummaryKrsSection;
