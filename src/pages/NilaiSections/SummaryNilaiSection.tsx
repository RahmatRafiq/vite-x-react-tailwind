import React, { useState, useEffect } from 'react';
import NilaiSection from './NilaiSection';
import TahunSelector from "@/components/TahunSelector";
import { getNilaiMahasiswa } from '@/services/Nilai';

const SummaryNilaiSection = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [nilai, setNilai] = useState<MataKuliah[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectedYear) {
            fetchNilai(selectedYear);
        }
    }, [selectedYear]);

    const fetchNilai = async (tahunID: string) => {
        setLoading(true);
        try {
            const response: NilaiResponse = await getNilaiMahasiswa(tahunID);
            if (response.status === 'success') {
                const nilaiTransformed: MataKuliah[] = response.data.flat().map((item) => ({
                    nama: item.nama,
                    kode: item.mk_kode,
                    sks: item.sks,
                    tugas: [
                        { nomor: 1, nama: 'Tugas 1', detail: `Nilai: ${item.tugas1}` },
                        { nomor: 2, nama: 'Tugas 2', detail: `Nilai: ${item.tugas2}` },
                        { nomor: 3, nama: 'Tugas 3', detail: `Nilai: ${item.tugas3}` },
                        { nomor: 4, nama: 'UTS', detail: `Nilai: ${item.uts}` },
                        { nomor: 5, nama: 'UAS', detail: `Nilai: ${item.uas}` },
                        { nomor: 6, nama: 'Nilai Akhir', detail: `Nilai: ${item.nilai_akhir}` },
                    ],
                    absen: `${item.v_presensi}%`,
                }));
                setNilai(nilaiTransformed);
            } else {
                setNilai([]);
            }
        } catch (error) {
            console.error('Error fetching nilai:', error);
            setNilai([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <TahunSelector selectedTahun={selectedYear} onTahunChange={setSelectedYear} />

            {loading ? (
                <p className="text-center mt-4">Loading nilai...</p>
            ) : selectedYear && nilai.length > 0 ? (
                <NilaiSection nilai={nilai} />
            ) : (
                <p className="text-center mt-4">Belum ada nilai untuk tahun ajaran ini.</p>
            )}
        </div>
    );
};

export default SummaryNilaiSection;
