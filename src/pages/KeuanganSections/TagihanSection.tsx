import React from 'react';

// Tipe data untuk item Tagihan
type TagihanItem = {
  label: string;
  jumlah: number;
  terbayar: number;
  tunggakan: number;
};

// Komponen TagihanSection
const TagihanSection = () => {
  // Data tagihan
  const tagihan: TagihanItem[] = [
    {
      label: 'SPP',
      jumlah: 5000000,
      terbayar: 2500000,
      tunggakan: 2500000,
    },
    {
      label: 'SSP',
      jumlah: 3000000,
      terbayar: 1500000,
      tunggakan: 1500000,
    },
    {
      label: 'Uang Alumni',
      jumlah: 1312,
      terbayar: 1312,
      tunggakan: 0,
    },
  ];

  return (
    <div className="card p-4">
      <h2>Tagihan</h2>
      {tagihan.map((item, index) => (
        <div key={index} className="collapse collapse-plus border border-base-300 rounded-box mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">{item.label}</div>
          <div className="collapse-content">
            <ul>
              <li><strong>Jumlah:</strong> Rp {item.jumlah}</li>
              <li><strong>Terbayar:</strong> Rp {item.terbayar}</li>
              <li><strong>Tunggakan:</strong> Rp {item.tunggakan}</li>
            </ul>
          </div>
        </div>
      ))}
      {/* Total Tagihan */}
      <div className="mt-4">
        <h3 className="font-semibold">Total Tagihan</h3>
        <p>
          Jumlah: Rp{' '}
          {tagihan.reduce((total, item) => total + item.jumlah, 0)}
        </p>
      </div>
    </div>
  );
};

export default TagihanSection;
