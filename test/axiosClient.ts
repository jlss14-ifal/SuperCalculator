
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000', // Base URL of your API
    timeout: 10000, // Timeout for requests
});

export default axiosClient;
