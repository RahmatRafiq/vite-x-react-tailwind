import { TahunKHS } from "@/types/TahunKhs";
import axios from "axios";

interface TahunKHSResponse {
  data: TahunKHS[];
}

export const getTahunKhsMahasiswa = async (): Promise<TahunKHSResponse> => {
  try {
    const token = localStorage.getItem("access_token"); // Ambil token dari localStorage

    if (!token) {
      throw new Error("Token tidak ditemukan");
    }

    const response = await axios.get<TahunKHSResponse>(
      `${import.meta.env.VITE_APP_API_URL}/nilai/tahun_khs`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Api-Key": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("API Response:", response.data);

    return { data: response.data?.data || [] }; // Ambil array dari response
  } catch (error) {
    console.error("Error fetching Tahun KHS:", error);
    return { data: [] };
  }
};
