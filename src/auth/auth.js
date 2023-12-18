import axios from "axios";
import { proxy } from "valtio";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: "http://192.168.1.50:9000",
});

export const authState = proxy({
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  schoolId: localStorage.getItem("schoolId") || null,
  userId: localStorage.getItem("userId") || null,
});

export const setTokens = (accessToken, refreshToken) => {
  authState.accessToken = accessToken;
  authState.refreshToken = refreshToken;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const setSchoolId = (id, userId) => {
  authState.schoolId = id;
  authState.userId = userId;
  localStorage.setItem("schoolId", id);
  localStorage.setItem("userId", userId);
};

export const clearTokens = () => {
  authState.accessToken = null;
  authState.refreshToken = null;
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const decodeTokens = () => {
  const { accessToken, refreshToken } = authState;
  const accessTokenData = jwtDecode(accessToken);
  const refreshTokenData = jwtDecode(refreshToken);
  return {
    accessTokenData,
    refreshTokenData,
  };
};

api.interceptors.request.use((config) => {
  const { accessToken } = authState;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { accessToken } = authState;

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      accessToken
    ) {
      originalRequest._retry = true;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
