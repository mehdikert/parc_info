import axios from 'axios';

// Créer une instance Axios avec une configuration de base
const api = axios.create({
    baseURL: 'http://localhost:3005', // URL de votre API backend
});

// Ajouter un interceptor pour inclure le jeton JWT dans les en-têtes de chaque requête
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Récupérer le jeton depuis le stockage local

        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Inclure le jeton dans le header Authorization
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
