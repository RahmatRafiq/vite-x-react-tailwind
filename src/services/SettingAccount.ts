import fetchData from "./FetchData";

export interface User {
    id?: string;
    name: string;
    email: string;
    password?: string;
    password_confirmation?: string;
}

export interface UserResponse {
    status: string;
    data: User | null[];
    code: number;
}

export const findUser = async (id: string): Promise<User | null> => {
    const response = await fetchData<UserResponse>(
        `${import.meta.env.VITE_APP_API_URL}/users/${id}`
    );
    
    console.log("Response dari getUser:", response);

    if (response && response.status === "success" && Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0]; // Ambil user pertama dari array
    }

    return null; // Jika tidak ada data, kembalikan null
};



export const PutUser = async ( user: User): Promise<UserResponse> => {
    return await fetchData<UserResponse>(
        `${import.meta.env.VITE_APP_API_URL}/users`,
        {
            method: "PUT",
            data: user,
        }
    ) || { status: "error", data: [], code: 500 };
};
