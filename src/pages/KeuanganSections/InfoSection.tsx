import React, { useEffect, useState } from 'react';
import { getKeuanganKhs } from '@/services/Keuangan';
import { getTahunKhsMahasiswa } from '@/services/Tahun';
import { TahunKHS } from '@/types/tahun';
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

const InfoSection = () => {
  const [infoList, setInfoList] = useState<{ label: string; jumlah: number; sesi: number; sks: number; ips: number; potongan: number; bayar: number; tarik: number }[]>([]);
  const [tahunList, setTahunList] = useState<TahunKHS[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTahunList();
  }, []);

  useEffect(() => {
    if (tahunList.length > 0) {
      const tahunIds = Array.isArray(tahunList) ? tahunList.flat().map((tahun) => tahun.tahunid) : [];
      fetchKeuanganInfo(tahunIds);
    }
  }, [tahunList]);

  const fetchTahunList = async () => {
    try {
      const tahunResponse = await getTahunKhsMahasiswa();
      if (tahunResponse.status === 'success') {
        setTahunList(Array.isArray(tahunResponse.data) ? tahunResponse.data.flat() : []);
      }
    } catch (error) {
      console.error('Error fetching tahun KHS:', error);
    }
  };

  const fetchKeuanganInfo = async (tahunArray: string[]) => {
    setLoading(true);
    try {
      const promises = tahunArray.map((tahunid) => getKeuanganKhs(tahunid));
      const results = await Promise.all(promises);

      const data = results
        .filter((res) => res.status === 'success' && res.data.length > 0)
        .flatMap((res) =>
          res.data.flat().map((item) => ({
            label: `SPP Tahun ${item.tahunid} - Semester ${item.sesi}`,
            sesi: item.sesi,
            sks: item.sks,
            ips: item.ips,
            jumlah: item.biaya,
            potongan: item.potongan ?? 0,
            bayar: item.bayar ?? 0,
            tarik: item.tarik ?? 0,
          }))
        );

      setInfoList(data);
    } catch (error) {
      console.error('Error fetching keuangan info:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4">
      <h2>Info Keuangan</h2>
      <p>Berikut adalah informasi tagihan keuangan mahasiswa.</p>

      {loading ? (
        <p>Loading...</p>
      ) : infoList.length > 0 ? (
        infoList.map((info, index) => (
          <div key={index} className="collapse collapse-plus border border-base-300 rounded-box mb-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">{info.label}</div>
            <div className="collapse-content space-y-4">
              <div className="border border-base-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">🎓 Riwayat Studi</h3>
                <ul className="space-y-2">
                  <li><strong>Semester:</strong> {info.sesi}</li>
                  <li><strong>SKS:</strong> {info.sks}</li>
                  <li><strong>IPS:</strong> {info.ips}</li>
                </ul>
              </div>
              <div className="border border-base-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">🏦 Administrasi Keuangan</h3>
                <ul className="space-y-2">
                  <li><strong>Jumlah Tagihan:</strong> Rp {info.jumlah.toLocaleString('id-ID')}</li>
                  <li><strong>Potongan:</strong> Rp {info.potongan.toLocaleString('id-ID')}</li>
                  <li><strong>Bayar:</strong> Rp {info.bayar.toLocaleString('id-ID')}</li>
                  <li><strong>Tarik:</strong> Rp {info.tarik.toLocaleString('id-ID')}</li>
                </ul>
              </div>


              <div className={`border rounded-lg p-4 flex items-center gap-2
                ${info.jumlah - info.bayar > 0 ? 'border-red-500 bg-red-100 text-red-700' :
                  'border-green-500 bg-green-100 text-green-700'}`}>
                <span className="font-semibold flex items-center gap-2">
                  {info.jumlah - info.bayar > 0 ? (
                    <HiExclamationCircle className="w-5 h-5 text-red-700" />
                  ) : (
                    <HiCheckCircle className="w-5 h-5 text-green-700" />
                  )}
                  {info.jumlah - info.bayar > 0 ? 'Tunggakan' : 'Lunas'}
                </span>
                <span className={`badge p-2 text-white ${info.jumlah - info.bayar > 0 ? 'badge-error' : 'badge-success'}`}>
                  {info.jumlah - info.bayar > 0
                    ? `Rp ${(info.jumlah - info.bayar).toLocaleString('id-ID')}`
                    : 'Semua tagihan telah dibayar'}
                </span>
              </div>

            </div>
          </div>
        ))
      ) : (
        <p>Tidak ada data keuangan yang tersedia.</p>
      )}
    </div>
  );
};

export default InfoSection;
