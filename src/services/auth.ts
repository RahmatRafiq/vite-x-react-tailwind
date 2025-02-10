export const login = async (email: string, password: string): Promise<{ token: string }> => {
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

  return res.json();
};
