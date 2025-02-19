import TahunSelector from '@/components/TahunSelector';
import { getKeuanganDetail } from '@/services/Keuangan';
import React, { useEffect, useState } from 'react';

const TagihanSection = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tagihan, setTagihan] = useState<KeuanganDetail[]>([]);

  useEffect(() => {
    if (selectedYear) {
      fetchTagihan(selectedYear);
    }
  }, [selectedYear]);

  const fetchTagihan = async (tahunID: string) => {
    setLoading(true);
    try {
      const response: KeuanganDetailResponse = await getKeuanganDetail(tahunID);
      if (response.status === 'success') {
        const tagihanTransformed: KeuanganDetail[] = response.data.flat().map((item) => ({
          nama: item.nama,
          jumlah: item.jumlah ?? 0,
          terbayar: item.dibayar ?? 0,
          tunggakan: (item.besar ?? 0) - (item.dibayar ?? 0),
          besar: item.besar ?? 0,
          dibayar: item.dibayar ?? 0,
        }));
        setTagihan(tagihanTransformed);
      } else {
        setTagihan([]);
      }
    } catch (error) {
      console.error('Error fetching tagihan:', error);
      setTagihan([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4">
      <TahunSelector selectedTahun={selectedYear} onTahunChange={setSelectedYear} />
      <div className="card p-4">
        <h2 className="text-lg font-semibold mb-4">Tagihan</h2>

        {!selectedYear ? (
          <p>Pilih tahun ajaran terlebih dahulu.</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : tagihan.length > 0 ? (
          tagihan.map((item, index) => (
            <div key={index} className="collapse collapse-plus border border-base-300 rounded-box mb-4">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-medium">{item.nama}</div>
              <div className="collapse-content">
                <ul className="space-y-2">
                  <li><strong>Jumlah:</strong> Rp {item.besar.toLocaleString('id-ID')}</li>
                  <li><strong>Terbayar:</strong> Rp {item.dibayar.toLocaleString('id-ID')}</li>
                  <li>
                    <strong>Tunggakan:</strong> Rp {(item.besar - item.dibayar).toLocaleString('id-ID')}
                    <span className={`badge ml-2 p-2 text-white ${item.besar - item.dibayar > 0 ? 'badge-error' : 'badge-success'}`}>
                      {item.besar - item.dibayar > 0 ? 'Tunggakan' : 'Lunas'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada tagihan untuk tahun ini.</p>
        )}

        {tagihan.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Total Tagihan</h3>
            <p>
              Jumlah: Rp{' '}
              {tagihan.reduce((total, item) => total + (item.jumlah ?? 0), 0).toLocaleString('id-ID')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagihanSection;
