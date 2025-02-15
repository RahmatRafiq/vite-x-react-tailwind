import { LoginResponse } from "@/types/auth";

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login gagal");
  }

  const data = await res.json();
  // console.log("Full API Response:", data); 

  return {
    access_token: data.token.token,
    token_type: "Bearer",
  };
};
