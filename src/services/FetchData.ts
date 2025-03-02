// src/services/fetchData.ts
import { AxiosRequestConfig } from "axios";
import axiosInstance from "./fetchWithAuth";

const fetchData = async <T>(url: string, options?: AxiosRequestConfig): Promise<T | null> => {
    try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Token tidak ditemukan");

        const config: AxiosRequestConfig = {
            method: options?.method || "GET",
            url,
            headers: {
                Authorization: `Bearer ${token}`,
                "X-Api-Key": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            ...options,
        };

        const response = await axiosInstance(config);
        return response.data;
    } catch (error: unknown) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export default fetchData;
