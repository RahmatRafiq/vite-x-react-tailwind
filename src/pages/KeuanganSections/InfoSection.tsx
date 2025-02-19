import React, { useEffect, useState } from 'react';
import { getKeuanganKhs } from '@/services/Keuangan';
import { getTahunKhsMahasiswa } from '@/services/Tahun';
import { TahunKHS } from '@/types/tahun';

const InfoSection = () => {
  const [infoList, setInfoList] = useState<{ label: string; jumlah: number }[]>([]);
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
            jumlah: item.biaya - (item.potongan ?? 0),
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
            <div className="collapse-content">
              <ul>
                <li>
                  <strong>Jumlah:</strong> Rp {info.jumlah.toLocaleString('id-ID')}
                </li>
              </ul>
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
