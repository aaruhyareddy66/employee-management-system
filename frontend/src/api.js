const API = "http://localhost:8080/api/employees";
const headers = { "Content-Type": "application/json" };

export const getEmployees = () => fetch(API).then((r) => r.json());

export const saveEmployee = (e) =>
  fetch(e.id ? `${API}/${e.id}` : API, {
    method: e.id ? "PUT" : "POST",
    headers,
    body: JSON.stringify(e),
  }).then((r) => r.json());

export const deleteEmployee = (id) =>
  fetch(`${API}/${id}`, { method: "DELETE" });