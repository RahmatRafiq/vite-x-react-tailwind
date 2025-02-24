import { useState, useEffect } from "react";
import { Mahasiswa, UserRequest } from "@/types/MahasiswaUpsert";
import { getMahasiswa } from "@/services/MahasiswaUpsert";
import { updateProfilMahasiswa } from "@/services/Profile";

const MahasiswaForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [mhswId] = useState("mhsw_id");

  const [mahasiswa, setMahasiswa] = useState<Mahasiswa>({
    mhsw_id: mhswId,
    nama: "",
    program_id: "",
    prodi_id: "",
    alamat: "",
    negara: "",
    handphone: "",
    email: "",
    nama_ibu: "",
    agama_id: "",
    tgl_sk_penyetaraan: null,
    user_id: undefined,
    user: null,
  });

  const [user, setUser] = useState<UserRequest>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchMahasiswa = async () => {
      if (!mhswId) return;
      setLoading(true);
      try {
        const response = await getMahasiswa(mhswId);
        console.log("Response dari API:", response);

        if (response.code === 200 && response.item) {
          setMahasiswa(response.item);
          setUser(response.item.user || { email: "", password: "" });
        } else {
          setMessage("Gagal memuat data mahasiswa.");
          setStatus("error");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Terjadi kesalahan saat memuat data.");
        setStatus("error");
      }
      setLoading(false);
    };

    fetchMahasiswa();
  }, [mhswId]);

  const handleChangeMahasiswa = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMahasiswa((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = JSON.stringify({ ...mahasiswa, user });
      const response = await updateProfilMahasiswa(mhswId, payload);

      if (response.code === 200) {
        setMessage("Data berhasil diperbarui!");
        setStatus("success");
      } else {
        setMessage("Gagal memperbarui data.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Terjadi kesalahan.");
      setStatus("error");
    }

    setLoading(false);
    setModalOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 md:p-10 lg:p-12 space-y-4 pb-20">
      <h2 className="text-xl font-bold mb-4">Profil Anda</h2>
      {message && (
        <div role="alert" className={`alert ${status === "success" ? "alert-success" : "alert-error"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{message}</span>
        </div>
      )}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <label className="form-control w-full sm:max-w-md">
            <div className="label">
              <span className="label-text">Nama Mahasiswa</span>
            </div>
            <input
              type="text"
              name="nama"
              readOnly
              value={mahasiswa.nama}
              onChange={handleChangeMahasiswa}
              placeholder="Nama Mahasiswa"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full sm:max-w-md">
            <div className="label">
              <span className="label-text">Program Studi</span>
            </div>
            <input
              type="text"
              name="prodi_id"
              readOnly
              value={mahasiswa.prodi_id}
              onChange={handleChangeMahasiswa}
              placeholder="Prodi ID"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full sm:max-w-md">
            <div className="label">
              <span className="label-text">Email Mahasiswa</span>
            </div>
            <input
              type="email"
              name="email"
              readOnly
              value={mahasiswa.email}
              onChange={handleChangeMahasiswa}
              placeholder="Email Mahasiswa"
              className="input input-bordered w-full"
              required
            />
          </label>
          <section className="mt-6">
            {/* Divider */}
            <div className="divider text-base-content font-semibold">Edit Profil Anda</div>

            {/* Card untuk Form */}
            <div className="card shadow-lg bg-base-100 rounded-lg p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-center mb-4">Informasi Kontak</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Alamat */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-medium">Alamat</span>
                  </div>
                  <input
                    type="text"
                    name="alamat"
                    value={mahasiswa.alamat}
                    onChange={handleChangeMahasiswa}
                    placeholder="Alamat Mahasiswa"
                    className="input input-bordered w-full"
                  />
                </label>

                {/* Handphone */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-medium">Handphone</span>
                  </div>
                  <input
                    type="text"
                    name="handphone"
                    value={mahasiswa.handphone}
                    onChange={handleChangeMahasiswa}
                    placeholder="Nomor Handphone"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </section>

          <button type="button" className="btn btn-primary w-full" onClick={() => setModalOpen(true)}>
            Simpan
          </button>

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
              <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-sm border border-gray-300">
                <h3 className="text-lg text-base-content font-bold mb-4">Konfirmasi</h3>
                <p>Apakah Anda yakin ingin menyimpan data ini?</p>
                <div className="flex justify-end mt-4 space-x-2">
                  <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>
                    Batal
                  </button>
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default MahasiswaForm;
