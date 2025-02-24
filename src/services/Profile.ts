import { ProfileResponse } from "@/types/profile";
import fetchData from "./FetchData";



export const getProfilMahasiswa = async (): Promise<ProfileResponse | null> => {
    const data = await fetchData<ProfileResponse>(`${import.meta.env.VITE_APP_API_URL}/profil/profil-singkat`);
    return data || { status: "error", data: [], code: 500 };
};


export const updateProfilMahasiswa = async (mhsw_id: string, mahasiswa: string): Promise<ProfileResponse> => {
    return await fetchData<ProfileResponse>(
        `${import.meta.env.VITE_APP_API_URL}/profil/update/${mhsw_id}`,
        {
            method: "POST",
            data: mahasiswa,
        }
    ) || ({ status: "error", data: [], code: 500 } as unknown as ProfileResponse);
}
