import React from 'react';

type Tugas = {
    nomor: number;
    nama: string;
    detail: string;
};

type MataKuliah = {
    nama: string;
    kode: string;
    sks: number;
    tugas: Tugas[];
    absen: string;
};

const NilaiSection = ({ nilai }: { nilai: MataKuliah[] }) => {
    return (
        <div className="bg-base-100 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-4">Nilai Mata Kuliah</h2>
            {nilai.map((mataKuliah, index) => (
                <div key={index} className="card bg-base-200 shadow-lg mb-4">
                    <div className="card-header p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-lg">{mataKuliah.nama}</p>
                                <p className="text-sm text-gray-500">Kode: {mataKuliah.kode}</p>
                                <p className="text-sm text-gray-500">SKS: {mataKuliah.sks}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 rounded-box bg-base-100">
                            <div className="collapse-title text-md font-medium">
                                Detail Nilai
                            </div>
                            <div className="collapse-content">
                                <div className="mt-2">
                                    <h4 className="font-semibold">Tugas:</h4>
                                    <div className="overflow-x-auto">
                                        <table className="table table-zebra">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama Tugas</th>
                                                    <th>Detail Tugas</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {mataKuliah.tugas.map((tugas) => (
                                                    <tr key={tugas.nomor}>
                                                        <th>{tugas.nomor}</th>
                                                        <td>{tugas.nama}</td>
                                                        <td>{tugas.detail}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold">Absen:</h4>
                                    <p>{mataKuliah.absen}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NilaiSection;
