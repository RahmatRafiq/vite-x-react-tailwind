import React from 'react';
import ProfileSection from './dasboardSections/ProfileSection';
import PaketSection from './KrsSections/KrsSections';

const dummyPaketData = [
  {
    mk_id: 943,
    mk_kode: "KEP23702",
    nama_mk: "BIOSTATISTIK",
    sks: 2,
    dosen: "SRI WAHYUNI BAHRUM",
  },
  {
    mk_paket_isi_id: 966,
    mk_id: 943,
    mk_kode: "KEP23702",
    nama_mk: "BIOSTATISTIK",
    sks: 2,
    dosen: "SRI WAHYUNI BAHRUM",
  },
  {
    mk_id: 943,
    mk_kode: "KEP23702",
    nama_mk: "BIOSTATISTIK",
    sks: 2,
    dosen: "SRI WAHYUNI BAHRUM",
  },
  {
    mk_id: 943,
    mk_kode: "KEP23702",
    nama_mk: "BIOSTATISTIK",
    sks: 2,
    dosen: "SRI WAHYUNI BAHRUM",
  },
  {
    mk_id: 943,
    mk_kode: "KEP23702",
    nama_mk: "BIOSTATISTIK",
    sks: 2,
    dosen: "SRI WAHYUNI BAHRUM",
  }
];

const PaketPage = () => {
  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-4">
      <ProfileSection />
      <PaketSection mataKuliahPaket={dummyPaketData} />
    </div>
  );
};

export default PaketPage;
