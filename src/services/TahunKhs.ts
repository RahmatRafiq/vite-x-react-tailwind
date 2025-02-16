import { JadwalKuliahResponse, StatusKrsResponse, TahunKHS } from "@/types/TahunKhs";
import axios from "axios";

interface TahunKHSResponse {
    data: TahunKHS[];
}

export const getTahunKhsMahasiswa = async (): Promise<TahunKHSResponse> => {
    try {
        const token = localStorage.getItem("access_token");

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

        return { data: response.data?.data || [] };
    } catch (error) {
        console.error("Error fetching Tahun KHS:", error);
        return { data: [] };
    }
};

export const getStatusKrs = async (tahunid: string): Promise<StatusKrsResponse> => {
    try {
        const token = localStorage.getItem("access_token");

        if (!token) {
            throw new Error("Token tidak ditemukan");
        }

        const response = await axios.get<StatusKrsResponse>(
            `${import.meta.env.VITE_APP_API_URL}/krs/status-krs?tahun_id=${tahunid}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "X-Api-Key": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("API Response:", response.data);

        return { status: response.data?.status || "error", data: response.data?.data || [], code: response.data?.code || 500 };
        } catch (error) {
        console.error("Error fetching Status KRS:", error);
        return { status: "error", data: [], code: 500 };
    }
};


export const getJadwalKuliah = async (KhsID: string): Promise<JadwalKuliahResponse> => {
    try {
        const token = localStorage.getItem("access_token");

        if (!token) {
            throw new Error("Token tidak ditemukan");
        }

        const response = await axios.get<JadwalKuliahResponse>(
            `${import.meta.env.VITE_APP_API_URL}/krs/detail?KhsID=${KhsID}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "X-Api-Key": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching jadwal kuliah:", error);
        return { status: "error", data: [], code: 500 };
    }
};
