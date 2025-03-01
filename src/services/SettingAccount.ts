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

export const PutUser = async (user: User): Promise<UserResponse> => {
    return await fetchData<UserResponse>(
        `${import.meta.env.VITE_APP_API_URL}/users`,
        {
            method: "PUT",
            data: user,
        }
    ) || { status: "error", data: [], code: 500 };
};

export const findUser = async (id: string): Promise<UserResponse> => {
    console.log("Mencari user dengan ID:", id);
    const data = await fetchData<UserResponse>(
        `${import.meta.env.VITE_APP_API_URL}/users/${id}`
    );
    console.log("Response dari getUser:", data);
    return data || { status: "error", data: [], code: 500 };
};



