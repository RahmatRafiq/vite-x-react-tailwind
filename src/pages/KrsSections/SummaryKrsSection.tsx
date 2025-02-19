import { useState, useEffect, useMemo } from "react";
import { getStatusKrs, getJadwalKuliah } from "@/services/TahunKhs";
import JadwalKuliahSection from "./jadwalKuliahSection";
import TahunSelector from "@/components/TahunSelector";

const SummaryKrsSection = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [statusKrs, setStatusKrs] = useState<string | null>(null);
    const [mataKuliah, setMataKuliah] = useState<{ hari: string; mataKuliah: string; ruangan: string; jam: string; dosen: string; }[]>([]);
    const [semester, setSemester] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatusKrs = async () => {
            if (!selectedYear) return;
            try {
                const response = await getStatusKrs(selectedYear);
                if (response.data && response.data[0]?.[0]?.status_mahasiswa) {
                    setStatusKrs(response.data[0][0].status_mahasiswa);
                    const KhsID = response.data[0][0].khs_id;
                    await fetchMataKuliah(KhsID);
                } else {
                    setStatusKrs('Status tidak ditemukan');
                }
            } catch (error) {
                console.error("Error fetching status KRS:", error);
                setStatusKrs('Gagal mengambil status');
            }
        };

        setSemester(selectedYear?.endsWith("1") ? "Ganjil" : "Genap");
        fetchStatusKrs();
    }, [selectedYear]);

    const fetchMataKuliah = async (KhsID: string) => {
        try {
            const response: JadwalKuliahResponse = await getJadwalKuliah(KhsID);
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
                const mataKuliahData = response.data[0].map((item: JadwalKuliah) => ({
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

    const groupedByDay = useMemo(() => {
        return mataKuliah.reduce((acc: Record<string, typeof mataKuliah>, item) => {
            if (item.hari !== 'N/A') {  
                if (!acc[item.hari]) {
                    acc[item.hari] = [];
                }
                acc[item.hari].push(item);
            }
            return acc;
        }, {});
    }, [mataKuliah]);

    return (
        <div className="mt-4 space-y-4">
            <TahunSelector selectedTahun={selectedYear || ""} onTahunChange={setSelectedYear} />

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

            {Object.entries(groupedByDay).map(([hari, mataKuliahList], index) => (
                <div key={index} className="mt-6">
                    <h3 className="text-xl font-semibold">{hari}</h3>
                    <JadwalKuliahSection jadwal={mataKuliahList} />
                </div>
            ))}
        </div>
    );
};

export default SummaryKrsSection;
