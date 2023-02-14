import axios from 'axios';
import { useAuthStore } from '../store/auth';

const authApi = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

// Error from linter
authApi.interceptors.request.use( (config) => {
    config.headers = {
        Authorization: `Bearer ${useAuthStore.getState().token}`
    }
    return config;
})

export default authApi;