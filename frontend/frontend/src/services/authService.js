import api from "./api";

const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

const register = async (name, email, password) => {
  const res = await api.post("/auth/register", { name, email, password });
  return res.data;
};

const logout = async () => {
  await api.post("/auth/logout");
};

export default { login, register, logout };
