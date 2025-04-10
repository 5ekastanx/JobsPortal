import axios from "axios";

const API_URL = "http://0.0.0.0:8055/api/v1/";

// Токены храним в памяти приложения
let accessToken = "YOUR_ACCESS_TOKEN";
let refreshToken = "YOUR_REFRESH_TOKEN";

// Получить текущий access-token
export const getAccessToken = () => accessToken;

// Получить текущий refresh-token
export const getRefreshToken = () => refreshToken;

// Сохранить новые токены
export const saveTokens = (newAccessToken, newRefreshToken) => {
  accessToken = newAccessToken;
  refreshToken = newRefreshToken;
};

// Очистить токены
export const clearTokens = () => {
  accessToken = null;
  refreshToken = null;
};

// Обновить access-token
export const refreshAccessToken = async () => {
  if (!refreshToken) {
    console.error("Refresh token отсутствует");
    return null;
  }

  try {
    const response = await axios.post(`${API_URL}auth-token/jwt/refresh/`, {
      refresh: refreshToken,
    });
    accessToken = response.data.access;
    return accessToken;
  } catch (error) {
    console.error("Ошибка обновления токена:", error);
    clearTokens();
    return null;
  }
};

// Установить заголовок авторизации
export const setAuthHeader = () => {
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Интерцептор для автоматического обновления токена
axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const newToken = await refreshAccessToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }
    
    return Promise.reject(error);
  }
);

// Функция для входа пользователя
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}auth-token/jwt/create/`, credentials);
    saveTokens(response.data.access, response.data.refresh);
    setAuthHeader();
    return response.data;
  } catch (error) {
    console.error("Ошибка входа:", error);
    throw error;
  }
};

// Функция для выхода пользователя
export const logoutUser = () => {
  clearTokens();
  delete axios.defaults.headers.common["Authorization"];
};

// Функция для проверки авторизации
export const verifyAuth = async () => {
  if (!accessToken) return false;

  try {
    await axios.post(`${API_URL}auth-token/jwt/verify/`, { token: accessToken });
    return true;
  } catch (error) {
    if (error.response?.status === 401) {
      try {
        const newToken = await refreshAccessToken();
        return !!newToken;
      } catch (refreshError) {
        return false;
      }
    }
    return false;
  }
};

// Инициализация заголовка
setAuthHeader();