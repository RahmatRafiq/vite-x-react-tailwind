import { TahunKHSResponse, StatusKrsResponse, JadwalKuliahResponse } from "@/types/TahunKhs";
import fetchData from "./FetchData";

export const getTahunKhsMahasiswa = async (): Promise<TahunKHSResponse> => {
  const data = await fetchData<TahunKHSResponse>(`${import.meta.env.VITE_APP_API_URL}/nilai/tahun_khs`);
  return data || { status: "error", data: [], code: 500 };
};

export const getStatusKrs = async (tahunid: string): Promise<StatusKrsResponse> => {
  const data = await fetchData<StatusKrsResponse>(`${import.meta.env.VITE_APP_API_URL}/krs/status-krs?tahun_id=${tahunid}`);
  return data || { status: "error", data: [], code: 500 };
};

export const getJadwalKuliah = async (KhsID: string): Promise<JadwalKuliahResponse> => {
  const data = await fetchData<JadwalKuliahResponse>(`${import.meta.env.VITE_APP_API_URL}/krs/detail?KhsID=${KhsID}`);
  return data || { status: "error", data: [], code: 500 };
};
