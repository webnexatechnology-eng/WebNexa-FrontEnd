const API_URL = "https://webnexa-backend.onrender.com/api";

export type Lead = {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: "new" | "contacted" | "converted";
  createdAt: string;
};

function getAuthHeaders() {
  const token = localStorage.getItem("admin_token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchLeads(): Promise<Lead[]> {
  const res = await fetch(`${API_URL}/leads`, {
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch leads");
  }

  return res.json();
}

export async function updateLeadStatus(id: string, status: string) {
  const res = await fetch(`${API_URL}/leads/${id}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({ status }),
  });

  if (!res.ok) throw new Error("Failed to update lead");

  return res.json();
}

export async function deleteLead(id: string) {
  const res = await fetch(`${API_URL}/leads/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error("Failed to delete lead");

  return res.json();
}

export async function fetchDashboardStats() {
  const token = localStorage.getItem("admin_token");

  const res = await fetch("https://webnexa-backend.onrender.com/api/leads/stats/summary", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("admin_token");
    window.location.href = "/";
    throw new Error("Unauthorized");
  }

  if (!res.ok) throw new Error("Failed to load dashboard stats");

  return res.json();
}
