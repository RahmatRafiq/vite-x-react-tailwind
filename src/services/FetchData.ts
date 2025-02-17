import axios from 'axios';

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

export default fetchData;
