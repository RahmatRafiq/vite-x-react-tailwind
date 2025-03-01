import { findUser, PutUser, User } from "@/services/SettingAccount";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserForm = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [status, setStatus] = useState<"success" | "error" | "">("");
    const [message, setMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) return;
    
            setLoading(true);
            const userData = await findUser(id);
            setLoading(false);
    
            if (userData) {
                setUser(userData);
            }
        };
        fetchUser();
    }, [id]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleSubmit = async () => {
        setErrorMessage("");
        setMessage("");
    
        if (user.password && user.password !== passwordConfirmation) {
            setErrorMessage("Password dan konfirmasi password tidak cocok!");
            return;
        }
    
        if (!id) {
            setErrorMessage("ID user tidak ditemukan!");
            return;
        }
    
        setLoading(true);
        try {
            const response = await PutUser(user);
            if (response.status === "success") {
                setMessage("User berhasil diperbarui!");
                setStatus("success");
            } else {
                setMessage("Gagal memperbarui user");
                setStatus("error");
            }
        } catch {
            setMessage("Terjadi kesalahan saat memperbarui user");
            setStatus("error");
        }
        setLoading(false);
        setModalOpen(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg mb-20">
            <h2 className="text-xl font-bold mb-4">User Form</h2>
            {message && (
                <div role="alert" className={`alert ${status === "success" ? "alert-success" : "alert-error"}`}>
                    <span>{message}</span>
                </div>
            )}
            {loading && <p className="text-gray-500">Loading...</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <form onSubmit={(e) => e.preventDefault()}>

                <label className="block mt-4">
                    <span className="label-text">Email</span>
                    <input type="email" name="email" value={user.email} onChange={handleChange} className="input input-bordered w-full" required />
                </label>

                <label className="block mt-4">
                    <span className="label-text">Password (kosongkan jika tidak ingin mengubah)</span>
                    <input type="password" name="password" value={user.password || ""} onChange={handleChange} className="input input-bordered w-full" />
                </label>

                <label className="block mt-4">
                    <span className="label-text">Konfirmasi Password</span>
                    <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handlePasswordChange} className="input input-bordered w-full" />
                </label>

                <button type="button" className="btn btn-primary w-full mt-4" onClick={() => setModalOpen(true)}>
                    Save
                </button>
            </form>

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-sm border border-gray-300">
                        <h3 className="text-lg text-base-content font-bold mb-4">Konfirmasi</h3>
                        <p>Apakah Anda yakin ingin menyimpan perubahan?</p>
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
        </div>
    );
};

export default UserForm;
