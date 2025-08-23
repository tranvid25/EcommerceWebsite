import axios from 'axios';
import Cookies from 'js-cookie';
const axiosClient = axios.create({
  baseURL: 'https://be-project-reactjs.onrender.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async(error) => {
    const originalRequest=error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // window.location.href = '/login';
      const refreshToken=Cookies.get('refreshToken');
      if(!refreshToken) return Promise.reject(error);
      try {
        const res=await axiosClient.post('/refreshToken',{token:refreshToken});
        const newAccessToken=res.data.accessToken;
        Cookies.set('token',newAccessToken);
        originalRequest.headers['Authorization']='Bearer '+newAccessToken;
        return axiosClient(originalRequest);
      } catch (error) {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
