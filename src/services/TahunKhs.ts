import { JadwalKuliahResponse, StatusKrsResponse, TahunKHSResponse } from "@/types/TahunKhs";
import axios from "axios";


const fetchData = async <T>(url: string): Promise<T | null> => {
    try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Token tidak ditemukan");

        const response = await axios.get<T>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                "X-Api-Key": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error fetching data:", error.message);
        } else {
            console.error("Error fetching data:", error);
        }
        return null;
    }
};

export const getTahunKhsMahasiswa = async (): Promise<TahunKHSResponse> => {
    const data = await fetchData<TahunKHSResponse>(`${import.meta.env.VITE_APP_API_URL}/nilai/tahun_khs`);
    // console.log(data);
    return data || { status: "error", data: [], code: 500 };
};

export const getStatusKrs = async (tahunid: string): Promise<StatusKrsResponse> => {
    const data = await fetchData<StatusKrsResponse>(
        `${import.meta.env.VITE_APP_API_URL}/krs/status-krs?tahun_id=${tahunid}`
    );
    console.log(data);
    return data || { status: "error", data: [], code: 500 };
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
