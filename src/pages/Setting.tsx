import { findUser, PutUser, User } from "@/services/SettingAccount";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const UserForm = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
    const fetchUser = async () => {
        if (!id) return;

        setLoading(true);
        const response = await findUser(id);
        setLoading(false);
        console.log("Response dari getUser:", response); // Debugging

        if (response.code === 200 && response.data) {
            if (Array.isArray(response.data) && response.data.length > 0) {
                if (response.data[0]) {
                    setUser(response.data[0] as User); // Perbaikan akses data
                }
            }
        }
    };
console.log("ID:", id); // Debugging
    fetchUser();
}, [id]);




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (user.password && user.password !== passwordConfirmation) {
            setErrorMessage("Password dan konfirmasi password tidak cocok!");
            return;
        }

        setLoading(true);
        const response = await PutUser(user);
        setLoading(false);

        alert(response.status === "success" ? "User berhasil diperbarui!" : "Gagal memperbarui user");
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">User Form</h2>
            {loading && <p className="text-gray-500">Loading...</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <label className="block">
                    <span className="label-text">Name</span>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </label>

                <label className="block mt-4">
                    <span className="label-text">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </label>

                <label className="block mt-4">
                    <span className="label-text">Password (kosongkan jika tidak ingin mengubah)</span>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </label>

                <label className="block mt-4">
                    <span className="label-text">Konfirmasi Password</span>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={handlePasswordChange}
                        className="input input-bordered w-full"
                    />
                </label>

                <button
                    type="submit"
                    className={`btn btn-primary w-full mt-4 ${loading ? "loading" : ""}`}
                >
                    {loading ? "Saving..." : "Save"}
                </button>
            </form>
        </div>
    );
};

export default UserForm;
