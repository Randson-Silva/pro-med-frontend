import axios from 'axios';
import { IJWT } from '../@types/global/user.types';
import { ProfileContext } from '../context/ProfileContext';
import { useContext } from 'react';

export const useAxios = () => {
    const { JWT, setJWT, user, setIsAuthenticated } = useContext(ProfileContext);

    const axiosInstance = axios.create({
        baseURL: `${import.meta.env.VITE_API_URL}/api`,
    });

    axiosInstance.interceptors.request.use(async req => {
        if (JWT) req.headers!.Authorization = `Bearer ${JWT?.accessToken}`
        return req;
    });

    // handling token refreshing
    axiosInstance.interceptors.response.use(res => res, async (error) => {
        const originalRequest = error.config;
        const checkExpiredToken = error.response.data.message?.includes('JWT expired');

        if (checkExpiredToken && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshRes = await axios.post<IJWT>(`${import.meta.env.VITE_API_URL}/api/auth/refresh`, {
                    token: JWT!.refreshToken
                });

                const { accessToken, refreshToken } = refreshRes.data;
            
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                setJWT(refreshRes.data);
                localStorage.setItem('promed_session', JSON.stringify(
                    { accessToken, refreshToken, profile: user }
                ));

                return axios(originalRequest);
            }
            catch (error: any) {
                localStorage.removeItem('promed_session');
                setIsAuthenticated(false);
            }
        }

        let errorMessage = "Error";
        if (error.response.data.message) errorMessage += `: ${error.response.data.message}`;
        alert(errorMessage);

        return Promise.reject(error);
    });

    return axiosInstance;
}