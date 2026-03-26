const API_BASE = "/api";

export const register = async (data) =>
  fetch(`${API_BASE}/auth?action=register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());