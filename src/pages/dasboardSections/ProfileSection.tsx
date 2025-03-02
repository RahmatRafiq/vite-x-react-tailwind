import { getProfilMahasiswa } from "@/services/Profile";
import { Mahasiswa } from "@/types/profile";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileSection = () => {
    const [profile, setProfile] = useState<Mahasiswa | null>(null);

    // Ambil data profil mahasiswa
    useEffect(() => {
        const fetchProfile = async () => {
            const response = await getProfilMahasiswa();
            if (response && response.status === "success") {
                setProfile(response.data[0][0]);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="card card-side bg-base-300 shadow-xl">
            <figure>
                <img
                    className="w-full h-full object-cover rounded-xl"
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Mahasiswa Profile"
                />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title text-xl">Halo, {profile?.nama_mahasiswa || "Mahasiswa"}</h2>
                <div className="spacer my-4"></div>
                <div>
                    <h3 className="text-md font-medium"><strong>Prodi:</strong> {profile?.prodi || "Tidak Ditemukan"}</h3>
                    <h4 className="text-md font-medium"><strong>NIM:</strong> {profile?.mhsw_id || "Tidak Ditemukan"}</h4>
                </div>
                <div className="card-actions justify-end mt-4">
                    <button className="btn glass">
                    <Link to= "/mahasiswa">Lihat Detail</Link>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
