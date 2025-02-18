import { ProfileResponse } from "@/types/profile";
import fetchData from "./FetchData";



export const getProfilMahasiswa = async (): Promise<ProfileResponse | null> => {
    const data = await fetchData<ProfileResponse>(`${import.meta.env.VITE_APP_API_URL}/profil-singkat/`);
    return data || { status: "error", data: [], code: 500 };
};


