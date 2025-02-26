import React from 'react';

interface MataKuliahPaket {
  mk_id: number;
  nama_mk: string;
  sks: number;
  dosen: string;
}

const PaketSection = ({ mataKuliahPaket }: { mataKuliahPaket: MataKuliahPaket[] }) => {
  return (
    <div className=" card bg-base-300 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Daftar Mata Kuliah Semester Depan</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
              <th>Dosen</th>
            </tr>
          </thead>
          <tbody>
            {mataKuliahPaket.map((mk) => (
                <tr key={mk.mk_id}>
                <td>{mk.nama_mk}</td>
                <td>{mk.sks}</td>
                <td>{mk.dosen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaketSection;
