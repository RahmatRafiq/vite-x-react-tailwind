import fetchData from "./FetchData";

export const getNilaiMahasiswa = async (tahunid: string): Promise<NilaiResponse> => {
    const data = await fetchData<NilaiResponse>(`${import.meta.env.VITE_APP_API_URL}/nilai/?tahun_id=${tahunid}`);
    console.log(data);
    return data || { status: "error", data: [], code: 500 };
}