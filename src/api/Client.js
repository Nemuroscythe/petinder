import axios from 'axios';

const apiClient = axios.create({
    // baseURL: 'https://pettinder.herokuapp.com/',
    baseURL: 'http://localhost:8080',
})
export default apiClient;