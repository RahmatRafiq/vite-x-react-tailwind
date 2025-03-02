import axios, { AxiosRequestConfig } from 'axios';

const fetchData = async <T>(url: string, options?: AxiosRequestConfig): Promise<T | null> => {
    try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Token tidak ditemukan");

        const config: AxiosRequestConfig = {
            method: options?.method || "GET", // Default GET jika tidak ada method
            url,
            headers: {
                Authorization: `Bearer ${token}`,
                "X-Api-Key": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            ...options, // Spread untuk menerima opsi tambahan (data, params, dll.)
        };

        const response = await axios(config);
        return response.data;
    } catch (error: unknown) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export default fetchData;
