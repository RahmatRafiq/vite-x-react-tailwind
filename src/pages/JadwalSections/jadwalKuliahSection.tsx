
const JadwalKuliahSection = ({ jadwal }: {
    jadwal: Array<{
        hari: string;
        mataKuliah: string;
        ruangan: string;
        jam: string;
        dosen: string
    }>
}) => {
    const groupedByDay = jadwal.reduce((acc: Record<string, typeof jadwal>, item) => {
        if (!acc[item.hari]) {
            acc[item.hari] = [];
        }
        acc[item.hari].push(item);
        return acc;
    }, {});

    return (
        <div className="bg-base-100 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-4">Jadwal Mata Kuliah</h2>
            {Object.entries(groupedByDay).map(([hari, mataKuliahList], index) => (
                <div key={index} className="card bg-base-200 shadow-lg mb-4">
                    <div className="card-header p-4 flex justify-between items-center">
                        <span className="badge badge-primary text-lg">{hari}</span>
                    </div>
                    <div className="card-body p-4">
                        {mataKuliahList.map((mataKuliah, idx) => (
                            <div key={idx} tabIndex={0} className="collapse collapse-arrow border border-base-300 rounded-box bg-base-100 mb-2">
                                <div className="collapse-title text-md font-medium">
                                    {mataKuliah.mataKuliah || 'Mata Kuliah Tidak Ditemukan'}
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        <strong>Ruangan:</strong> {mataKuliah.ruangan || 'Ruangan Tidak Tersedia'}
                                    </p>
                                    <p>
                                        <strong>Jam:</strong> {mataKuliah.jam || 'Jam Tidak Tersedia'}
                                    </p>
                                    <p>
                                        <strong>Dosen:</strong> {mataKuliah.dosen || 'Dosen Belum Ditentukan'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JadwalKuliahSection;
