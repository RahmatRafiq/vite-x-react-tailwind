import fetchData from "./FetchData";

export const getKeuanganDetail = async (tahunid: string): Promise<KeuanganDetailResponse> => {
    return await fetchData<KeuanganDetailResponse>(
        `${import.meta.env.VITE_APP_API_URL}/nilai/keuangan/detail`,
        {
            method: "POST",
            data: { limit: 10, tahunid },
        }
    ) || { status: "error", data: [], code: 500 };
};

export const getKeuanganKhs = async (tahunid: string): Promise<KeuanganKhsResponse> => {
    return await fetchData<KeuanganKhsResponse>(
        `${import.meta.env.VITE_APP_API_URL}/nilai/keuangan/khs/detail`,
        {
            method: "POST",
            data: { limit: 10, tahunid },
        }
    ) || { status: "error", data: [], code: 500 };
};

export const calculateTunggakan = (besar?: number, dibayar?: number): number => {
    return (besar ?? 0) - (dibayar ?? 0);
};
