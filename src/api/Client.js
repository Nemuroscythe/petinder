import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://pettinder.herokuapp.com/',
})
export default apiClient;