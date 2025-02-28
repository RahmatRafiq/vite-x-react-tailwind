import React, { useEffect, useState } from 'react';
import ProfileSection from './dasboardSections/ProfileSection';
import PaketSection from './KrsSections/KrsSections';
import { getMataKuliahPaket, simpanKrs, KrsPayload, cekKrs } from '@/services/Krs';
import { MataKuliah } from '@/types/Krs';
import { getMkPaketList, MkPaketItem } from '@/services/Krs';
import { getTahunKhsMahasiswa } from '@/services/Tahun';
import { TahunKHS } from '@/types/tahun';
import { getStatusKrs } from '@/services/TahunKhs';

const PaketPage = () => {
  const [selectedTahun, setSelectedTahun] = useState<string>('');
  const [mkPaketList, setMkPaketList] = useState<MkPaketItem[]>([]);
  const [mkPaketId, setMkPaketId] = useState<string>('');
  const [mataKuliahPaket, setMataKuliahPaket] = useState<MataKuliah[]>([]);
  const [isKrsSubmitted, setIsKrsSubmitted] = useState<boolean>(false);
  const [khsID, setKhsID] = useState<string>('');
  const [hasKrs, setHasKrs] = useState<boolean>(false); // Untuk mengecek apakah KRS sudah ada
  const [, setStatusKrs] = useState<string>('');
  const [, setSemester] = useState<string>('');
  
  // State untuk modal konfirmasi, pesan, status, dan loading
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<"success" | "error" | "">('');
  const [loading, setLoading] = useState<boolean>(false);

  // Ambil data tahun dan pilih tahun terbaru
  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await getTahunKhsMahasiswa();
        if (Array.isArray(response.data) && Array.isArray(response.data[0])) {
          const tahunData: TahunKHS[] = response.data[0];
          const tahunArr = tahunData.map(item => item.tahunid);
          const latestTahun = tahunArr.sort((a, b) => Number(b) - Number(a))[0];
          setSelectedTahun(latestTahun);
          setSemester(latestTahun.endsWith("1") ? "Ganjil" : "Genap");
        }
      } catch (error) {
        console.error("Gagal mengambil data tahun:", error);
      }
    };
    fetchYears();
  }, []);

  // Ambil status KRS dan KHS ID berdasarkan tahun yang terpilih
  useEffect(() => {
    const fetchStatusKrs = async () => {
      if (!selectedTahun) return;
      try {
        const response = await getStatusKrs(selectedTahun);
        if (response.data && response.data[0]?.[0]?.status_mahasiswa) {
          setStatusKrs(response.data[0][0].status_mahasiswa);
          const fetchedKhsID = response.data[0][0].khs_id;
          setKhsID(fetchedKhsID);
        } else {
          setStatusKrs('Status tidak ditemukan');
        }
      } catch (error) {
        console.error("Error fetching status KRS:", error);
        setStatusKrs('Gagal mengambil status');
      }
    };

    fetchStatusKrs();
  }, [selectedTahun]);

  // Cek KRS: apakah KHS yang didapat sudah memiliki mata kuliah?
  useEffect(() => {
    const checkKrs = async () => {
      if (!selectedTahun) return;
      try {
        const response = await cekKrs(selectedTahun);
        if (
          response &&
          response.status === 'success' &&
          Array.isArray(response.data) &&
          response.data.length > 0 &&
          response.data[0].length > 0
        ) {
          const jumlah = response.data[0][0]["Jumlah Mata Kuliah"];
          setHasKrs(jumlah > 0);
        }
      } catch (error) {
        console.error("Error checking KRS:", error);
      }
    };

    checkKrs();
  }, [selectedTahun]);

  // Ambil daftar paket MK berdasarkan tahun yang terpilih
  useEffect(() => {
    if (selectedTahun) {
      getMkPaketList(selectedTahun)
        .then(response => {
          if (
            response &&
            response.status === 'success' &&
            Array.isArray(response.data) &&
            response.data.length > 0 &&
            response.data[0].length > 0
          ) {
            const paketList = response.data[0];
            setMkPaketList(paketList);
            const latestMkPaket = paketList.reduce((prev, current) =>
              Number(current.mkpaketid) > Number(prev.mkpaketid) ? current : prev
            );
            setMkPaketId(latestMkPaket.mkpaketid.toString());
          }
        })
        .catch(error => {
          console.error("Error fetching mk paket list:", error);
        });
    }
  }, [selectedTahun]);

  // Ambil data mata kuliah paket jika tahun dan paket MK sudah tersedia
  useEffect(() => {
    if (selectedTahun && mkPaketId) {
      getMataKuliahPaket(selectedTahun, mkPaketId)
        .then(response => {
          if (
            response &&
            response.status === "success" &&
            Array.isArray(response.data) &&
            response.data.length > 0
          ) {
            setMataKuliahPaket(response.data[0] as MataKuliah[]);
          }
        })
        .catch(error => {
          console.error("Error fetching mata kuliah paket:", error);
        });
    }
  }, [selectedTahun, mkPaketId]);

  const handleMkPaketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMkPaketId(e.target.value);
  };

  // Fungsi yang dipanggil ketika pengguna mengonfirmasi penyimpanan KRS
  const handleConfirmSave = async () => {
    setLoading(true);
    setMessage('');
    try {
      const krsData = mataKuliahPaket.map(mk => ({
        JadwalID: mk.jadwal_id,
        MKKode: mk.mk_kode,
        MK_id: mk.mk_id,
        NamaMK: mk.nama_mk,
        SKS: mk.sks,
      }));

      const payload: KrsPayload = {
        TahunID: selectedTahun,
        KrsData: krsData,
        KhsID: khsID,
      };

      const response = await simpanKrs(payload);
      console.log("Simpan response:", response);
      if (response && response.status === "success") {
        setIsKrsSubmitted(true);
        setStatus("success");
        setMessage("KRS berhasil disimpan!");
      } else {
        setStatus("error");
        setMessage("Gagal menyimpan KRS.");
      }
    } catch (error) {
      console.error("Error saving KRS:", error);
      setStatus("error");
      setMessage("Terjadi kesalahan saat menyimpan KRS.");
    }
    setLoading(false);
    setModalOpen(false);
  };

  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-4 mb-20">
      <ProfileSection />

      {message && (
        <div role="alert" className={`alert ${status === "success" ? "alert-success" : "alert-error"}`}>
          <span>{message}</span>
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Tahun KHS (terbaru):
        </label>
        <input type="text" value={selectedTahun} readOnly className="input input-bordered w-full" />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Pilih Paket MK:
        </label>
        <select className="select select-bordered w-full" value={mkPaketId} onChange={handleMkPaketChange}>
          {mkPaketList.map(item => (
            <option key={item.mkpaketid} value={item.mkpaketid}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>

      {/* PaketSection menerima onSave yang sekarang membuka modal konfirmasi */}
      <PaketSection 
        mataKuliahPaket={mataKuliahPaket} 
        onSave={() => setModalOpen(true)} 
        isSubmitted={hasKrs || isKrsSubmitted}
      />

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-sm border border-gray-300">
            <h3 className="text-lg font-bold mb-4">Konfirmasi</h3>
            <p>Apakah Anda yakin ingin menyimpan KRS?</p>
            <div className="flex justify-end mt-4 space-x-2">
              <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>
                Batal
              </button>
              <button className="btn btn-primary" onClick={handleConfirmSave} disabled={loading}>
                {loading ? "Loading..." : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaketPage;
