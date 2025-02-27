import React, { useEffect, useState } from 'react';
import ProfileSection from './dasboardSections/ProfileSection';
import PaketSection from './KrsSections/KrsSections';
import { getMataKuliahPaket, KrsPayload } from '@/services/Krs';
import { MataKuliah, } from '@/types/Krs';
import { simpanKrs } from '@/services/Krs';

const PaketPage = () => {
  const [mataKuliahPaket, setMataKuliahPaket] = useState<MataKuliah[]>([]);
  // State untuk melacak apakah KRS sudah disubmit
  const [isKrsSubmitted, setIsKrsSubmitted] = useState<boolean>(false);
  
  const tahunId = "20211"; // bisa disesuaikan/dinamis
  const mkPaketId = "129";  // bisa disesuaikan/dinamis

  useEffect(() => {
    getMataKuliahPaket(tahunId, mkPaketId)
      .then(response => {
        if (response && response.status === "success" && response.data.length > 0) {
          // Mengambil data dari elemen pertama karena response.data berupa array of array
          setMataKuliahPaket(response.data[0] as MataKuliah[]);
          // Jika perlu, tambahkan logika pemeriksaan apakah data sudah disubmit sebelumnya
        }
      })
      .catch(error => {
        console.error("Error fetching mata kuliah paket:", error);
      });
  }, [tahunId, mkPaketId]);

  const handleSimpan = async () => {
    // Mapping data mata kuliah ke format yang diharapkan API
    const krsData = mataKuliahPaket.map(mk => ({
      JadwalID: mk.jadwal_id,
      MKKode: mk.mk_kode,
      MK_id: mk.mk_id,
      NamaMK: mk.nama_mk,
      SKS: mk.sks,
    }));

    const payload: KrsPayload = {
      TahunID: tahunId,
      KrsData: krsData,
    };

    const response = await simpanKrs(payload);
    console.log("Simpan response:", response);
    if (response && response.status === "success") {
      setIsKrsSubmitted(true);
    }
  };

  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-4">
      <ProfileSection />
      <PaketSection mataKuliahPaket={mataKuliahPaket} />
      <div className="flex justify-end mt-4">
        <button
          className="btn btn-primary"
          onClick={handleSimpan}
          disabled={isKrsSubmitted}  // Disable tombol jika sudah disubmit
        >
          {isKrsSubmitted ? "KRS Sudah Disubmit" : "Simpan KRS"}
        </button>
      </div>
    </div>
  );
};

export default PaketPage;
