import { TahunKHSResponse } from "@/types/tahun";
import fetchData from "./FetchData";

export const getTahunKhsMahasiswa = async (): Promise<TahunKHSResponse> => {
    const data = await fetchData<TahunKHSResponse>(`${import.meta.env.VITE_APP_API_URL}/nilai/tahun_khs`);
   console.log(data)
    return data || { status: "error", data: [], code: 500 };
  };