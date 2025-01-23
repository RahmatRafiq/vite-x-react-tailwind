import React from 'react';

type InfoItem = {
  label: string;
  jumlah: number;
};

const InfoSection = () => {
  const infoList: InfoItem[] = [
    { label: 'Biaya SPP Semester 1', jumlah: 5000000 },
    { label: 'Biaya SPP Semester 2', jumlah: 5000000 },
    { label: 'Biaya SPP Semester 3', jumlah: 5000000 },
  ];

  return (
    <div className="card p-4">
      <h2>Info</h2>
      <p>Berikut adalah informasi lebih lanjut terkait layanan kami.</p>
      {infoList.map((info, index) => (
        <div key={index} className="collapse collapse-plus border border-base-300 rounded-box mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">{info.label}</div>
          <div className="collapse-content">
            <ul>
              <li><strong>Jumlah:</strong> Rp {info.jumlah}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
