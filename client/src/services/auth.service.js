import api from "./api";
import TokenService from "./token.service";

const signup = async (email, password) => {
  const response = await api.post("/auth/signup", {
    email,
    password,
  });
  if (response.data.accessToken) {
    TokenService.setUser(response.data);
  }
  return response.data;
};

const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  if (response.data.accessToken) {
    TokenService.setUser(response.data);
  }
  return response.data;
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
