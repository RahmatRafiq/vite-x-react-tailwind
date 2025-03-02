import { MahasiswaUserResponse } from "@/types/MahasiswaUpsert";
import fetchData from "./FetchData";

export const getMahasiswa = async (mhsw_id: string): Promise<MahasiswaUserResponse> => {
    const data = await fetchData<MahasiswaUserResponse>(`${import.meta.env.VITE_APP_API_URL}/mahasiswa/${mhsw_id}`);
    console.log(data);
    return data || { status: "error", data: [null, []], code: 500 } as unknown as MahasiswaUserResponse;
}
