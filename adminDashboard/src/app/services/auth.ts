const API_URL = "https://webnexa-backend.onrender.com/api";

export async function login(email: string, password: string) {
  const res = await fetch("https://webnexa-backend.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await res.json();

  localStorage.setItem("admin_token", data.access_token);

  return true;
}

export function isAuthenticated() {
  return !!localStorage.getItem("admin_token");
}

export function logout() {
  localStorage.removeItem("admin_token");
}


export function getToken() {
  return localStorage.getItem("token");
}
